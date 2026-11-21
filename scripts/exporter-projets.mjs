// Lit data/portfolio.db et écrit src/data/projets.json et src/data/apropos.json (ce que le site utilise).
// Lancé automatiquement avant chaque `npm run build` / `npm run dev`.
// Nécessite Node 22.5 ou plus (module intégré node:sqlite). Sans la base, le JSON déjà généré est conservé.
import { existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const racine = new URL('../', import.meta.url);
const chemin = (p) => fileURLToPath(new URL(p, racine));
if (!existsSync(chemin('data/portfolio.db'))) {
  console.log('[projets] data/portfolio.db introuvable : src/data/projets.json inchangé.');
  process.exit(0);
}

const { DatabaseSync } = await import('node:sqlite');
const db = new DatabaseSync(chemin('data/portfolio.db'), { readOnly: true });
const tout = (sql, ...p) => db.prepare(sql).all(...p);

const projets = tout('SELECT * FROM projet ORDER BY ordre, id').map((p) => ({
  slug: p.slug,
  type: p.type,
  titre: p.titre,
  accroche: p.accroche,
  resume: p.resume,
  annee: p.annee,
  cadre: p.cadre,
  equipe: p.equipe,
  role: tout('SELECT libelle FROM role WHERE projet_id = ? ORDER BY ordre', p.id).map((r) => r.libelle),
  outils: tout('SELECT nom FROM outil WHERE projet_id = ? ORDER BY ordre', p.id).map((r) => r.nom),
  choix: tout('SELECT nom, raison, icone FROM choix WHERE projet_id = ? ORDER BY ordre', p.id),
  defis: tout('SELECT defi, solution FROM defi WHERE projet_id = ? ORDER BY ordre', p.id),
  liens: tout('SELECT label, url FROM lien WHERE projet_id = ? ORDER BY ordre', p.id),
  couverture: { fichier: p.couv_fichier, alt: p.couv_alt, sujet: p.couv_sujet, format: p.couv_format, taille: p.couv_taille },
  sections: tout('SELECT * FROM section WHERE projet_id = ? ORDER BY ordre', p.id).map((s) => {
    const section = { onglet: s.onglet, titre: s.titre, paragraphes: s.paragraphes.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean) };
    const etapes = tout('SELECT titre, texte FROM etape WHERE section_id = ? ORDER BY ordre', s.id);
    if (s.flux_titre && etapes.length) section.flux = { etiquette: s.flux_titre, etapes };
    const chiffres = tout('SELECT valeur, suffixe, label FROM chiffre WHERE section_id = ? ORDER BY ordre', s.id);
    if (chiffres.length) section.chiffres = chiffres.map((c) => ({ valeur: c.valeur, ...(c.suffixe ? { suffixe: c.suffixe } : {}), label: c.label }));
    if (s.schemas) section.schemas = s.schemas.split(',').map((x) => x.trim());
    if (s.visuel) section.visuel = s.visuel;
    const photos = tout('SELECT fichier, alt, sujet, format, taille FROM photo WHERE section_id = ? ORDER BY ordre', s.id);
    if (photos.length) section.photos = photos;
    return section;
  }),
}));

// Page À propos : les cartes de couleur (tables carte, carte_bloc, carte_item).
const cartes = tout('SELECT * FROM carte ORDER BY ordre, id').map((c) => ({
  etiquette: c.etiquette,
  titre: c.titre,
  fond: c.fond,
  theme: c.theme,
  gabarit: c.gabarit,
  ...(c.lead ? { lead: c.lead } : {}),
  ...(c.intro ? { intro: c.intro.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean) } : {}),
  blocs: tout('SELECT * FROM carte_bloc WHERE carte_id = ? ORDER BY ordre, id', c.id).map((b) => ({
    titre: b.titre,
    ...(b.texte ? { texte: b.texte } : {}),
    ...(b.periode ? { periode: b.periode } : {}),
    ...(b.lieu ? { lieu: b.lieu } : {}),
    items: tout('SELECT libelle FROM carte_item WHERE bloc_id = ? ORDER BY ordre', b.id).map((i) => i.libelle),
  })),
}));

// Typographie française : espace insécable après « et avant », ? ! : ; pour éviter les guillemets seuls en bout de ligne.
const typo = (_, v) => (typeof v === 'string' && !/^https?:/.test(v) ? v.replace(/« /g, '«\u00a0').replace(/ (»|\?|!|;|:)/g, '\u00a0$1') : v);
writeFileSync(chemin('src/data/projets.json'), JSON.stringify(projets, typo, 2) + '\n');
writeFileSync(chemin('src/data/apropos.json'), JSON.stringify(cartes, typo, 2) + '\n');
console.log(`[projets] ${projets.length} projet(s) exporté(s) vers src/data/projets.json, ${cartes.length} carte(s) À propos vers src/data/apropos.json`);
