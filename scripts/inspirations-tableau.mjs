// Télécharge les 25 épingles exactes du tableau Pinterest « portfolio » (Enzo_Asap)
// et réécrit src/data/inspirations.json. Usage : node scripts/inspirations-tableau.mjs
import { writeFile, readdir, unlink, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const PINS = [
  ['1036039089300826591', 'b6/b8/ed/b6b8ed1f27561e2a8d73e6a2b93ad64f.jpg'],
  ['1036039089300826583', '3b/41/07/3b4107daf83aad530243546df8a4896c.jpg'],
  ['1036039089300826577', '70/0f/3d/700f3d5f207836d5ef1f6ea8cb4c34a0.jpg'],
  ['1036039089300826545', 'b2/76/c3/b276c320466164f3c9985087ca19f7d4.jpg'],
  ['1036039089300826539', '49/1c/27/491c2792bbe25343bc3503e0df1b6e1a.jpg'],
  ['1036039089300826527', 'fe/22/90/fe22905b8246aeaa609e50d058d119e5.jpg'],
  ['1036039089300826515', '9c/a8/92/9ca8923bbba602db37c0badd4b00a3ca.jpg'],
  ['1036039089300826512', '13/ee/61/13ee61fc497586684a0f83ce502d7416.jpg'],
  ['1036039089300826509', 'a1/aa/f6/a1aaf63d545c3982d14195f0667ba54e.jpg'],
  ['1036039089300826483', '9f/64/87/9f6487fccd62863ea8625a67d3332903.jpg'],
  ['1036039089300826479', '6d/61/ad/6d61adcf5d965f1eb067df3662b25f5d.jpg'],
  ['1036039089300826477', 'c1/ee/40/c1ee40cc1eaa254cb93c80f9c177bc6e.jpg'],
  ['1036039089300826464', '17/81/59/17815914a8e8c2aa86ecffa4a81c0965.jpg'],
  ['1036039089300826435', '92/a5/fd/92a5fd212a477c887d6a5e776a94a38d.jpg'],
  ['1036039089300826426', 'b9/be/9e/b9be9ec24e0775f3b4c6789b57fe1a73.jpg'],
  ['1036039089300826409', '44/68/4a/44684aca1d7c740ae59b312d88b1bc9d.jpg'],
  ['1036039089300826407', '11/2a/5f/112a5f815f3cbc52868921ffc2e0d363.jpg'],
  ['1036039089300826382', '59/61/2b/59612b3d2262ac63419dc219e009d3cc.jpg'],
  ['1036039089300826356', 'bb/8e/09/bb8e09d5ca2ffd845eb6056a2751d37b.jpg'],
  ['1036039089300826322', '73/90/36/739036944762a777aa9c8430b54b005b.jpg'],
  ['1036039089300826304', '98/11/4a/98114ab5d5baf9ae6753b4355eef2b07.jpg'],
  ['1036039089300826290', '38/95/ec/3895ec3781c23024842d25877ae1dd58.jpg'],
  ['1036039089300826275', '0c/c4/4a/0cc44a0f36bd87b206b35a91c8fe475d.jpg'],
  ['1036039089300826268', 'cf/fc/fc/cffcfc5b6b0d7cc8c6a91b46c866c0bb.jpg'],
  ['1036039089300826263', 'f1/fe/56/f1fe5663d597845613c6d22698695efa.jpg'],
];

const dossier = 'public/images/a-propos';
await mkdir(dossier, { recursive: true });
for (const f of await readdir(dossier)) if (/^inspiration-\d+\./.test(f)) await unlink(join(dossier, f));

const sortie = [];
for (const [i, [id, img]] of PINS.entries()) {
  const fichier = `inspiration-${i + 1}.jpg`;
  let res = await fetch(`https://i.pinimg.com/736x/${img}`);
  if (!res.ok) res = await fetch(`https://i.pinimg.com/originals/${img}`);
  if (!res.ok) { console.error(`✗ ${id} (${res.status})`); continue; }
  await writeFile(join(dossier, fichier), Buffer.from(await res.arrayBuffer()));
  sortie.push({ fichier, lien: `https://www.pinterest.com/pin/${id}/`, titre: '', auteur: null, profil: null, img, manuel: true });
  console.log(`✓ ${fichier}`);
}
await writeFile('src/data/inspirations.json', JSON.stringify(sortie, null, 2) + '\n');
console.log(`${sortie.length}/25 images, JSON réécrit.`);
