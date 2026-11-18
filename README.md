# Portfolio d'Enzo Hillairet

Portfolio de BUT MMI (2e année, semestre 3), en ligne sur **[portfolio.enzoh.fr](https://portfolio.enzoh.fr)**.
Je cherche un stage en communication et création.

## Niveau technique visé

**Niveau 4 de la grille** : framework JS, contenus liés à une source de données, composants, interactions.

- **Données** : les projets sont dans une base SQLite (`data/portfolio.db`). Un script (`scripts/exporter-projets.mjs`) l'exporte en JSON, puis Astro génère une page par projet, la galerie d'accueil et le plan du site.
- **Composants** : `src/components/` et `src/components/pj/` (blocs des pages projet).
- **Interactions** : galerie en arc (`src/scripts/arc.ts`), animations au défilement (`src/scripts/animations.ts`), cartes empilées de la page À propos, écran de chargement en lettres.

Le site est statique une fois compilé : pas de serveur, pas de base en ligne.

## Technologies

- [Astro](https://astro.build) (MIT) : pages, composants, génération statique.
- [Inter](https://rsms.me/inter/) via Fontsource (SIL OFL 1.1) : police hébergée avec le site.
- `node:sqlite` : lecture de la base au moment de la compilation (Node 22.5 ou plus).
- TypeScript pour les scripts.

Pas de framework CSS ni de template : la feuille de styles `src/styles/global.css` est écrite pour ce site. Les mockups et les œuvres citées sont crédités dans les mentions légales.

## Lancer le site

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/, le dossier à mettre en ligne
npm run preview   # sert la version compilée
```

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| Mes coordonnées, compétences, parcours | `src/data/profil.ts` |
| Un projet, ou en ajouter un | `data/portfolio.db` (voir `data/AJOUTER-UN-PROJET.md`) |
| Les images de la galerie de la page À propos | `src/data/galerie.json` et `public/images/a-propos/` |
| Les couleurs, polices, espacements | `src/styles/global.css` |
| Le CV | `public/cv-enzo-hillairet.pdf` |

## Mise en ligne

Le site est servi par Apache sur le VPS de la formation. Comme il est statique, Apache sert directement `dist/`. À chaque `git push` sur `main`, GitHub Actions (`.github/workflows/deploy.yml`) se connecte au VPS en SSH, fait un `git pull` et compile le site. Les accès sont dans les secrets du dépôt. Le certificat HTTPS vient de Let's Encrypt.

## Documents du projet

- `POSITIONNEMENT.md` : cible, message, direction artistique.
- `JOURNAL.md` : journal de bord.
- `IA.md` : usage de l'intelligence artificielle.
- `QUALITE.md` : contrôle qualité.
