// Complète les noms d'artistes manquants de la galerie (src/data/galerie.json).
// Version réduite de l'ancien script pinterest.mjs : il ne touche ni aux images ni aux liens,
// il lit seulement la page de chaque épingle sans auteur pour retrouver le compte du créateur.
//
// Utilisation (dans le dossier du projet) :
//   npm run pinterest:auteurs
//   (option : un pseudo en argument pour ne pas se créditer soi-même, « Enzo_Asap » par défaut)
//
// Les auteurs déjà renseignés sont gardés. Pour une épingle qui n'a pas de compte (image venue d'un site),
// le script met le nom du site ; s'il ne trouve rien, complète "auteur" à la main dans galerie.json.
import { readFile, writeFile } from 'node:fs/promises';

const moi = (process.argv[2] ?? 'Enzo_Asap').toLowerCase();
const fichier = new URL('../src/data/galerie.json', import.meta.url);
const galerie = JSON.parse(await readFile(fichier, 'utf8'));
const ua = { 'User-Agent': 'Mozilla/5.0 (portfolio enzoh.fr)' };

// Cherche le « username » juste après la clé native_creator / origin_pinner dans la page de l'épingle.
const chercher = (html, cle) => {
  const i = html.indexOf(`"${cle}":{`);
  if (i < 0) return null;
  const u = html.slice(i, i + 2500).match(/"username":"([^"]+)"/);
  return u ? u[1] : null;
};
const credit = async (lien) => {
  try {
    const res = await fetch(lien, { headers: ua });
    if (!res.ok) return null;
    const html = await res.text();
    for (const cle of ['native_creator', 'origin_pinner']) {
      const u = chercher(html, cle);
      if (u && u.toLowerCase() !== moi) return { auteur: u, profil: `https://www.pinterest.com/${u}/` };
    }
    const d = html.match(/"domain":"([^"]+)"/);
    if (d && !/pinterest|uploaded/i.test(d[1])) return { auteur: d[1] };
  } catch { /* pas de crédit trouvé */ }
  return null;
};

let trouves = 0;
const manquants = [];
for (const [i, g] of galerie.entries()) {
  if (g.auteur) continue;
  process.stdout.write(`\rÉpingle ${i + 1}/${galerie.length}…`);
  const c = await credit(g.lien);
  if (c) { Object.assign(g, c); trouves += 1; } else manquants.push(`${i + 1} (${g.fichier})`);
}
await writeFile(fichier, JSON.stringify(galerie, null, 2) + '\n');
console.log(`\n${trouves} auteur(s) ajouté(s).` + (manquants.length ? ` Toujours sans nom : ${manquants.join(', ')} → complète "auteur" à la main dans src/data/galerie.json.` : ''));
