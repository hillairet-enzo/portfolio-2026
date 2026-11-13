// Couleur dominante d'une page, calculée à partir de l'image de son hero.
// Quand tu remplaces l'image, la couleur de la page change toute seule.
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

export const COULEUR_PAR_DEFAUT = '#e0982a';

/** Thème sobre noir et blanc : accueil, À propos, Contact, Projets… (pas de couleur dominante). */
export const THEME_NEUTRE = '--dom:#0a0a0a;--dom-fonce:#0a0a0a;--dom-sombre:#000000;--sur-dom:#ffffff;';

const cache = new Map<string, string>();

function hsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const M = Math.max(r, g, b), m = Math.min(r, g, b), l = (M + m) / 2;
  let h = 0, s = 0;
  if (M !== m) {
    const d = M - m;
    s = l > 0.5 ? d / (2 - M - m) : d / (M + m);
    h = M === r ? (g - b) / d + (g < b ? 6 : 0) : M === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h *= 60;
  }
  return [h, s, l];
}

function hex(h: number, s: number, l: number): string {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * c).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function luminance(h: string): number {
  const c = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

// Teinte la plus présente parmi les pixels colorés (les gris, noirs et blancs comptent peu)
async function teinteDominante(chemin: string): Promise<number | null> {
  const { data } = await sharp(chemin).resize(48, 48, { fit: 'cover' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const seaux = Array.from({ length: 24 }, () => 0);
  for (let i = 0; i < data.length; i += 3) {
    const [h, s, l] = hsl(data[i], data[i + 1], data[i + 2]);
    if (l < 0.14 || l > 0.9 || s < 0.2) continue;
    seaux[Math.floor(h / 15) % 24] += Math.pow(s, 2.4) * (1 - Math.abs(2 * l - 1));
  }
  const lisses = seaux.map((v, i) => v + 0.5 * (seaux[(i + 1) % 24] + seaux[(i + 23) % 24]));
  const max = Math.max(...lisses);
  if (max < 0.5) return null; // image presque grise : on garde la couleur de secours
  const i = lisses.indexOf(max);
  return i * 15 + 7.5;
}

function variables(h: number, s = 0.78): string {
  const dom = hex(h, s, 0.5);
  const fonce = hex(h, Math.min(s, 0.8), 0.3);
  const sombre = hex(h, 0.4, 0.09);
  const sur = luminance(dom) > 0.28 ? '#15171a' : '#ffffff';
  return `--dom:${dom};--dom-fonce:${fonce};--dom-sombre:${sombre};--sur-dom:${sur};`;
}

/** Variables CSS de la page : à poser sur <html style="…">. */
export async function theme(fichier?: string, secours = COULEUR_PAR_DEFAUT): Promise<string> {
  if (!fichier) return THEME_NEUTRE;
  const cle = `${fichier ?? ''}|${secours}`;
  if (cache.has(cle)) return cache.get(cle)!;

  let h: number | null = null;
  if (fichier) {
    const chemin = join(process.cwd(), 'public', 'images', fichier);
    if (existsSync(chemin)) {
      try {
        h = await teinteDominante(chemin);
      } catch {
        h = null;
      }
    }
  }
  // Pas d'image, ou image presque grise : thème noir et blanc.
  const css = h === null ? THEME_NEUTRE : variables(h);
  cache.set(cle, css);
  return css;
}

/** Couleur de la ligne de progression : la teinte moyenne de l'image du hero, avivée pour rester bien visible. */
export async function couleurMoyenne(fichier?: string): Promise<string> {
  const chemin = fichier ? join(process.cwd(), 'public', 'images', fichier) : '';
  if (!chemin || !existsSync(chemin)) return '#7c8088';
  try {
    const { channels } = await sharp(chemin).stats();
    const [r, g, b] = channels.map((c) => c.mean);
    const [h, s] = hsl(r, g, b);
    return hex(h, Math.min(0.85, Math.max(0.35, s * 1.8)), 0.5);
  } catch {
    return '#7c8088';
  }
}
