// Récupère les épingles d'un tableau Pinterest public via son flux RSS (aucune clé d'API)
// et les enregistre comme inspirations de la page À propos.
//
// Utilisation (dans le dossier du projet) :
//   npm run pinterest -- https://www.pinterest.com/ton-pseudo/nom-du-tableau/
//   (option : un 2e argument pour le nombre max d'images, 30 par défaut)
//
// Résultat : public/images/a-propos/inspiration-1.jpg, -2.jpg… et src/data/inspirations.json
// (lien vers chaque épingle, pour que les cases renvoient à la source).
import { mkdir, writeFile, readdir, unlink, readFile } from 'node:fs/promises';
import path from 'node:path';

const url = process.argv[2];
const max = Number(process.argv[3] ?? 30);
if (!url) {
  console.error('Donne l’adresse du tableau, ex. : npm run pinterest -- https://www.pinterest.com/pseudo/tableau/');
  process.exit(1);
}

// pinterest.fr/pseudo/tableau/ → https://www.pinterest.com/pseudo/tableau.rss
const m = new URL(url).pathname.split('/').filter(Boolean);
if (m.length < 2) { console.error('L’adresse doit être celle d’un tableau : pinterest.com/pseudo/tableau/'); process.exit(1); }
const rss = `https://www.pinterest.com/${m[0]}/${m[1]}.rss`;

const ua = { 'User-Agent': 'Mozilla/5.0 (portfolio enzoh.fr)' };
console.log('Lecture du flux', rss);
const res = await fetch(rss, { headers: ua });
if (!res.ok) { console.error(`Flux introuvable (${res.status}). Vérifie que le tableau est public.`); process.exit(1); }
const xml = await res.text();

const decode = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, it]) => {
  const desc = decode((it.match(/<description>([\s\S]*?)<\/description>/) ?? [])[1] ?? '');
  const img = (desc.match(/<img[^>]+src="([^"]+)"/) ?? [])[1];
  const lien = decode((it.match(/<link>([\s\S]*?)<\/link>/) ?? [])[1] ?? '').trim();
  const titre = decode((it.match(/<title>([\s\S]*?)<\/title>/) ?? [])[1] ?? '').replace(/<!\[CDATA\[|\]\]>/g, '').trim();
  const hash = img ? (img.match(/i\.pinimg\.com\/\d+x\/(.+)$/) ?? [])[1] : null;
  return img ? { img: img.replace(/\/\d+x\//, '/736x/'), hash, lien, titre } : null;
}).filter(Boolean).slice(0, max);

if (!items.length) { console.error('Aucune image trouvée dans le flux.'); process.exit(1); }

const dossier = path.join('public', 'images', 'a-propos');
await mkdir(dossier, { recursive: true });
// on retire les anciennes inspirations pour repartir proprement
for (const f of await readdir(dossier)) if (/^inspiration-\d+\.(jpe?g|png|webp|avif)$/i.test(f)) await unlink(path.join(dossier, f)).catch(() => {});

// Crédit : on lit la page de chaque épingle pour trouver le compte du créateur
// (créateur d'origine, sinon la première personne qui l'a épinglée, sinon le site source).
const moi = m[0].toLowerCase();
const chercher = (html, cle) => {
  const i = html.indexOf(`"${cle}":{`);
  if (i < 0) return null;
  const u = html.slice(i, i + 2500).match(/"username":"([^"]+)"/);
  return u ? u[1] : null;
};
const credit = async (lien) => {
  try {
    const html = await (await fetch(lien, { headers: ua })).text();
    for (const cle of ['native_creator', 'origin_pinner']) {
      const u = chercher(html, cle);
      if (u && u.toLowerCase() !== moi) return { auteur: `@${u}`, profil: `https://www.pinterest.com/${u}/` };
    }
    const d = html.match(/"domain":"([^"]+)"/);
    if (d && !/pinterest|uploaded/i.test(d[1])) return { auteur: d[1], profil: null };
  } catch { /* pas de crédit trouvé */ }
  return { auteur: null, profil: null };
};
// les crédits corrigés à la main dans src/data/inspirations.json sont gardés d'un import à l'autre
let anciens = [];
try { anciens = JSON.parse(await readFile(path.join('src', 'data', 'inspirations.json'), 'utf8')); } catch {}

const liste = [];
let n = 0;
for (const it of items) {
  try {
    const r = await fetch(it.img, { headers: ua });
    if (!r.ok) continue;
    n += 1;
    const fichier = `inspiration-${n}.jpg`;
    await writeFile(path.join(dossier, fichier), Buffer.from(await r.arrayBuffer()));
    const garde = anciens.find((a) => a.manuel && (a.lien === it.lien || (a.img && a.img === it.hash)));
    const c = garde ? { auteur: garde.auteur, profil: garde.profil ?? null } : await credit(it.lien);
    liste.push({ fichier, lien: garde?.lien ?? it.lien, titre: it.titre, auteur: c.auteur, profil: c.profil, img: it.hash, ...(garde ? { manuel: true } : {}) });
    process.stdout.write(`\r${n}/${items.length} images`);
  } catch { /* image ignorée */ }
}
await writeFile(path.join('src', 'data', 'inspirations.json'), JSON.stringify(liste, null, 2) + '\n');
const sans = liste.filter((l) => !l.auteur).length;
console.log(`\n${n} inspirations enregistrées.` + (sans ? ` ${sans} sans créateur trouvé : complète "auteur" dans src/data/inspirations.json et ajoute "manuel": true pour le garder.` : ''));
