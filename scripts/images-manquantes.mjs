// Liste les images à fournir : pour chaque photo prévue dans la base, dit si le fichier existe
// dans public/images/ et sinon quoi capturer (nom, format, taille). Lancer : npm run projets:images
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const racine = new URL('../', import.meta.url);
const chemin = (p) => fileURLToPath(new URL(p, racine));
const projets = JSON.parse(readFileSync(chemin('src/data/projets.json'), 'utf8'));

let manquantes = 0;
let total = 0;
for (const p of projets) {
  const photos = p.sections.flatMap((s) => s.photos ?? []);
  const absentes = photos.filter((ph) => !existsSync(chemin(`public/images/${ph.fichier}`)));
  total += photos.length;
  manquantes += absentes.length;
  console.log(`\n${p.titre} : ${photos.length - absentes.length}/${photos.length} images en place`);
  for (const ph of absentes) {
    const cadre = Number(ph.format.split('/')[0]) < Number(ph.format.split('/')[1]) ? 'téléphone' : 'navigateur';
    console.log(`  - public/images/${ph.fichier}  [${ph.format.replace('/', ':')}, ${ph.taille}, cadre ${cadre}]\n      ${ph.sujet}`);
  }
}
console.log(`\n${total - manquantes}/${total} images en place.`);
