# Portfolio d'Enzo Hillairet

Portfolio de BUT MMI (2e année, semestre 3), en ligne sur **[portfolio.enzoh.fr](https://portfolio.enzoh.fr)**.
Étudiant en communication, création et UX, je cherche un stage en studio de création digitale.

## Niveau technique visé

**Niveau 4 de la grille** : framework JS avec contenus dynamiques liés à une source de données, architecture en composants, interactions.

- **Source de données** : les projets sont dans une base SQLite (`data/portfolio.db`, structure dans `data/schema.sql`).
- **Génération** : `scripts/exporter-projets.mjs` lit la base et produit `src/data/projets.json`. Astro génère ensuite une page par projet (`src/pages/projets/[slug].astro`), la galerie d'accueil, le plan du site et le lien « Projet suivant ».
- **Composants** : `src/components/` (photo, hero, contact…) et `src/components/pj/` (blocs des pages projet : diapos, téléphones, montre, chiffres…).
- **Interactions** : galerie en arc avec défilement en boucle (`src/scripts/arc.ts`), apparitions au défilement et barre de progression (`src/scripts/animations.ts`), cartes empilées de la page À propos, écran de chargement en lettres, titre en machine à écrire et copie de l'adresse sur la page Contact.

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
scripts/           export de la base, liste des images manquantes
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
| Mon e-mail, LinkedIn, Behance, GitHub, mon âge, mes compétences, mon parcours | `src/data/profil.ts` |
| Les textes, photos et liens d'un projet, ajouter un projet | `data/portfolio.db` (voir `data/AJOUTER-UN-PROJET.md`) |
| Les couleurs, polices, espacements | `src/styles/global.css` |
| Le CV | `public/cv-enzo-hillairet.pdf` |

## Mise en ligne

Le site est servi par **Apache** sur le serveur VPS de la formation, à l'adresse `portfolio.enzoh.fr` (enregistrement DNS « A » créé chez Infomaniak, registrar du domaine). Le site étant **statique**, Apache sert directement le dossier `dist/` : pas de serveur Node ni de reverse proxy à faire tourner, donc moins de ressources consommées.

**Mise à jour automatique** : à chaque `git push` sur `main`, GitHub Actions (`.github/workflows/deploy.yml`) se connecte au VPS en SSH et lance les commandes ci-dessous. Les accès (hôte, port, utilisateur, clé SSH) sont stockés dans les secrets du dépôt, jamais dans le code.

À la main, sur le serveur :

```bash
cd /var/www/portfolio/portfolio-2026
git pull origin main
bun install
bunx --bun astro build   # src/data/projets.json est versionné : pas besoin de Node sur le serveur
```

Apache sert aussitôt la nouvelle version (aucun service à redémarrer). Certificat HTTPS : Let's Encrypt via certbot.

## Documents du projet

- `POSITIONNEMENT.md` : cible, message, sélection des projets, direction artistique.
- `JOURNAL.md` : journal de bord.
- `IA.md` : déclaration de l'usage de l'intelligence artificielle.
- `QUALITE.md` : grille de contrôle qualité (accessibilité, sobriété, référencement, juridique).
