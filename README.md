# Portfolio d'Enzo Hillairet

Portfolio de BUT MMI (2e année, semestre 3), en ligne sur **[enzoh.fr](https://enzoh.fr)**.
Étudiant en communication, création et UX, je cherche un stage en studio de création digitale.

## Niveau technique visé

**Niveau 4 de la grille** : framework JS avec contenus dynamiques liés à une source de données, architecture en composants, interactions.

- **Source de données** : les projets sont dans une base SQLite (`data/portfolio.db`, structure dans `data/schema.sql`).
- **Génération** : `scripts/exporter-projets.mjs` lit la base et produit `src/data/projets.json`. Astro génère ensuite une page par projet (`src/pages/projets/[slug].astro`), la galerie d'accueil, le plan du site et le lien « Projet suivant ».
- **Composants** : `src/components/` (photo, hero, contact…) et `src/components/pj/` (blocs des pages projet : diapos, téléphones, montre, chiffres…).
- **Interactions** : galerie en arc avec défilement en boucle (`src/scripts/arc.ts`), apparitions au défilement et barre de progression (`src/scripts/animations.ts`), cartes empilées de la page À propos, thème clair / sombre, écran de chargement en lettres, titre en machine à écrire et copie de l'adresse sur la page Contact.

Le site est statique une fois compilé : pas de serveur, pas de base en ligne.

## Technologies et librairies

| Outil | Rôle | Licence |
| --- | --- | --- |
| [Astro](https://astro.build) 7 | Framework : pages, composants, génération statique | MIT |
| [Inter](https://rsms.me/inter/) via `@fontsource-variable/inter` | Police, hébergée avec le site (aucune requête vers un tiers) | SIL OFL 1.1 |
| `node:sqlite` (Node 22.5 ou plus) | Lecture de la base des projets au moment de la compilation | intégré à Node |
| TypeScript | Scripts d'interaction | Apache 2.0 |

Aucun framework CSS ni bibliothèque de composants : la feuille de styles (`src/styles/global.css`) est écrite pour ce site. Aucun thème ni template n'a été utilisé.
Les mockups (Pixeden, Mockup Cloud) et les œuvres citées dans les projets sont crédités sur la page Mentions légales.

## Lancer le site

```bash
npm install
npm run dev       # http://localhost:4321 (exporte d'abord la base en JSON)
npm run build     # génère dist/, le dossier à mettre en ligne
npm run preview   # sert la version compilée
```

## Arborescence

```
data/              base SQLite des projets, schéma, mode d'emploi pour ajouter un projet
scripts/           export de la base, liste des images manquantes, import des inspirations Pinterest
public/            images, CV, favicon, image de partage (og.png), robots.txt
src/data/          profil.ts (coordonnées, compétences, parcours), projets.ts (types) et projets.json (généré)
src/layouts/       Layout.astro : gabarit commun (en-tête, pied de page, thème, chargement, balises SEO)
src/pages/         accueil, à propos, contact, mentions légales, 404, pages projet, sitemap.xml
src/components/    composants réutilisables
src/scripts/       interactions en TypeScript
src/lib/           couleurs des pages, CV, images
src/styles/        feuille de styles unique
```

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Mon e-mail, LinkedIn, GitHub, mon âge, mes compétences, mon parcours | `src/data/profil.ts` |
| Les textes, photos et liens d'un projet, ajouter un projet | `data/portfolio.db` (voir `data/AJOUTER-UN-PROJET.md`) |
| Les couleurs, polices, espacements | `src/styles/global.css` |
| Le CV | `public/cv-enzo-hillairet.pdf` |

## Mise en ligne

`npm run build`, puis envoi du dossier `dist/` chez Infomaniak (hébergement web lié au domaine enzoh.fr), avec HTTPS.

## Documents du projet

- `POSITIONNEMENT.md` : cible, message, sélection des projets, direction artistique.
- `JOURNAL.md` : journal de bord.
- `IA.md` : déclaration de l'usage de l'intelligence artificielle.
- `QUALITE.md` : grille de contrôle qualité (accessibilité, sobriété, référencement, juridique).
