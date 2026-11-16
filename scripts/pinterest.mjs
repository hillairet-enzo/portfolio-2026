// Récupère les épingles d'un tableau Pinterest public via son flux RSS (aucune clé d'API)
// et les enregistre comme inspirations de la page À propos.
//
// Utilisation (dans le dossier du projet) :
//   npm run pinterest -- https://www.pinterest.com/ton-pseudo/nom-du-tableau/
//   (option : un 2e argument pour le nombre max d'images, 30 par défaut)
//
// Résultat : public/images/a-propos/inspiration-1.jpg, -2.jpg… et src/data/inspirations.json
// (lien vers chaque épingle, pour que les cases renvoient à la source).
import { mkdir, writeFile, readdir, unlink } from 'node:fs/promises';
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
  return img ? { img: img.replace(/\/\d+x\//, '/736x/'), lien, titre } : null;
}).filter(Boolean).slice(0, max);

if (!items.length) { console.error('Aucune image trouvée dans le flux.'); process.exit(1); }

const dossier = path.join('public', 'images', 'a-propos');
await mkdir(dossier, { recursive: true });
// on retire les anciennes inspirations pour repartir proprement
for (const f of await readdir(dossier)) if (/^inspiration-\d+\.(jpe?g|png|webp|avif)$/i.test(f)) await unlink(path.join(dossier, f)).catch(() => {});

const liste = [];
let n = 0;
for (const it of items) {
  try {
    const r = await fetch(it.img, { headers: ua });
    if (!r.ok) continue;
    n += 1;
    const fichier = `inspiration-${n}.jpg`;
    await writeFile(path.join(dossier, fichier), Buffer.from(await r.arrayBuffer()));
    liste.push({ fichier, lien: it.lien, titre: it.titre });
    process.stdout.write(`\r${n}/${items.length} images`);
  } catch { /* image ignorée */ }
}
await writeFile(path.join('src', 'data', 'inspirations.json'), JSON.stringify(liste, null, 2) + '\n');
console.log(`\n${n} inspirations enregistrées. Relance le site pour les voir.`);
