# Utilisation de l'IA

Projet : portfolio personnel (BUT MMI, semestre 3), portfolio.enzoh.fr. Auteur : Enzo Hillairet.

## En résumé

Le design du site vient de moi : la direction artistique, la maquette Figma, la structure, le choix des projets, des images et des couleurs, et toutes les décisions de modification. L'IA que j'ai utilisée est **Claude**, le modèle d'Anthropic, via son outil Claude Code, directement dans le dossier du projet. Claude a adapté ce design en code (Astro, CSS, JavaScript). Je lui dis quoi changer, je regarde le résultat, puis je valide ou je fais refaire.

## Outils utilisés

| Outil | Usage |
| --- | --- |
| **Claude** (Anthropic), via Claude Code | Écrire et corriger le code du site, préparer les images, relire et mettre à jour les documents du dépôt |
| **Connecteur Figma**, piloté par Claude | Remettre ma maquette à jour pour qu'elle suive le site (voir plus bas) |
| **Gemini** (Google) | Générer certains visuels du projet TiK•TaK, déclarés dans les mentions légales |

## Ce qui vient de moi

- La direction artistique, les couleurs et le ton du site.
- La maquette Figma, qui sert de base à chaque page.
- La structure des pages et la façon de naviguer.
- Le choix des projets, de mes photos, de mes affiches et de mes images. Par exemple, la galerie de la page À propos vient de mon tableau Pinterest.
- Mes projets et mes réalisations, dont TiK•TaK.
- Chaque demande de changement : ce qu'il fallait ajouter, retirer ou refaire, et pourquoi.
- Les retours sur le rendu quand quelque chose ne me plaisait pas. Exemples récents : supprimer le mode sombre parce que je n'aimais pas son contraste, changer le fond de la section contact, mettre des onglets sur les mentions légales, retirer les descriptions dans la vue liste de l'accueil, retirer une grande photo verticale de la galerie, refaire la galerie de zéro quand elle ne s'affichait pas bien.
- Les informations vraies du site : coordonnées, hébergeur, mentions légales. Je les vérifie moi-même.

## Ce que Claude a fait

- Écrire le code du site : pages, composants, galerie de projets, animations, adaptation au téléphone.
- Traduire ma maquette Figma en code, écran par écran.
- Corriger les bugs d'affichage.
- Préparer les images : recadrages, conversion en WebP, covers des projets fabriquées à partir de mes captures et de mes mockups.
- Proposer une première version de certains textes à partir de mes explications. Je les ai relus et repris.
- Mettre en place la qualité web : plan du site, `robots.txt`, image de partage, mesures Lighthouse.
- Créer le dépôt Git et faire les commits que je lui demande.
- Remettre ma maquette Figma à jour à partir du site, pour qu'elle corresponde au rendu final : c'est un travail de synchronisation fait par Claude, pas une nouvelle conception. Les décisions de design restent les miennes.
- Récupérer les noms des artistes de ma galerie Pinterest.
- Aider à rédiger les documents du dépôt (`README.md`, `JOURNAL.md`, `QUALITE.md`, `POSITIONNEMENT.md`, ce fichier) à partir de mes consignes.

## Comment je travaille avec lui

- Je donne des consignes précises, avec une capture ou un exemple quand c'est utile.
- Claude me répond en français et me montre le résultat.
- Je regarde chaque changement dans le navigateur, y compris en navigation privée pour éviter le cache, puis je redemande une correction si le rendu ne correspond pas à ce que je veux.
- Je pousse moi-même le code sur GitHub. Les commits sont à mon nom, mais une grande partie du code qu'ils contiennent a été écrite par Claude : c'est déclaré ici.

## Ce que je peux expliquer devant le jury

- `data/portfolio.db`, `scripts/exporter-projets.mjs`, `src/data/projets.ts` : la base SQLite des projets, son export et la génération des pages. `src/data/profil.ts` pour mes coordonnées.
- `src/pages/projets/[slug].astro` : la page générée pour chaque projet.
- `src/layouts/Layout.astro` : la structure commune, l'écran de chargement, l'en-tête, le pied de page et le référencement.
- `src/scripts/arc.ts` : la galerie des projets en arc.
- `src/pages/a-propos.astro` et `src/data/galerie.json` : la page À propos, la pile de cartes et la galerie d'images.
- `src/styles/global.css` : les variables de couleurs et le style de toutes les pages.

Ce que je dois encore réviser avant la soutenance : [À COMPLÉTER honnêtement].

## Historique Git

Le code du portfolio a été commencé en local pendant les vacances de la Toussaint, avant la création du dépôt. Le dépôt GitHub a été créé le 13 novembre 2026. L'état du projet à cette date a été rejoué en commits, puis les modifications suivantes ont été commitées au fil du travail. L'historique ne reflète donc pas les semaines précédentes, que le `JOURNAL.md` décrit.
