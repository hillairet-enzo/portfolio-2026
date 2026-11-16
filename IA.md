# IA.md — Déclaration d'usage de l'intelligence artificielle

Projet : portfolio personnel (BUT MMI, semestre 3), enzoh.fr.
Auteur : Enzo Hillairet.

Ce fichier déclare chaque outil d'IA utilisé, à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'il a produit.

## 1. Outils utilisés

| Outil | Étapes | Usage |
| --- | --- | --- |
| **Claude** (Anthropic), via Claude Code et l'application Claude | Conception graphique, intégration, qualité web, mise en place du dépôt, covers des projets, textes de la page À propos | Assistant principal : propositions de design, écriture du code Astro / CSS / JavaScript sous ma direction, corrections, audit, rédaction de textes, fabrication des covers (HTML rendu en image) |
| **Connecteur Figma** piloté par Claude | Maquette | Création du fichier Figma et des écrans à partir de mes consignes |
| **Gemini** (Google) | Visuels du projet TiK•TaK | Génération de certains visuels du projet TiK•TaK, déclarés dans les mentions légales |

## 2. Comment je pilote l'IA

- **Prompts clairs et précis** : je décris le contexte (projet, public, contraintes), le format attendu et, quand c'est utile, un exemple ou une capture à imiter (par exemple la présentation courte d'un portfolio que j'aime, ou le style « verre liquide »).
- **Skills adaptés** : j'utilise des skills (instructions spécialisées) selon la tâche, par exemple design d'interface, effet de verre liquide, lecture de fichiers, plutôt qu'un prompt générique.
- **Retours successifs** : je valide ou je rejette chaque proposition à l'écran, puis je précise (voir section 4).
- **Choix de l'outil** : Claude pour le code et la structure, Gemini pour certains visuels.
- **Vérification** : je relis les textes, je contrôle le rendu dans le navigateur, et chaque usage est déclaré dans ce fichier.

## 3. Ce que l'IA a produit

- **Conception** : propositions d'identité visuelle (noir et blanc, effet « verre » inspiré d'Apple, palette arc-en-ciel en rappels discrets), logo monogramme « EH ».
- **Code** : structure Astro (pages, composants, données dans `src/data`), galerie de projets en arc avec vue liste, page projet en détail, thème clair / sombre, écran de chargement, barre de défilement personnalisée, widget de thème, pied de page, mentions légales.
- **Qualité** : `sitemap.xml`, `robots.txt`, conversion d'images en WebP, mesures Lighthouse.
- **Dépôt** : création du dépôt Git et des premiers commits.
- **Textes** : première version de textes du site, que j'ai relus et repris. Pour la page À propos, les textes sont réécrits à partir de mes projets, puis simplifiés selon mes retours.
- **Covers des projets** : six covers au même style (fond de couleur, titre, visuels du site), fabriquées à partir de mes captures et de mes mockups.
- **Interface** : barres de couleur et cartes en effet « verre liquide », ombres de la galerie d'accueil.

## 4. Ce que j'ai modifié, corrigé ou rejeté

Je pilote le travail par retours successifs. Principaux arbitrages :

**Rejeté**
- Une police jugée trop fantaisiste : je voulais une police simple et droite de type Inter.
- Une couleur dominante jaune : j'ai demandé plus de noir et blanc.
- Une page « Inspirations » et une landing page : supprimées, l'accueil est directement la galerie des projets.
- Un fond sombre gris-bleu : je l'ai fait remplacer par du vrai noir, avec du gris très foncé pour détacher les éléments.
- Un rectangle derrière l'onglet actif de l'en-tête, la grande ellipse sous le carrousel, les flèches du carrousel : refaits.
- Un écran de chargement trop brutal à la sortie, avec un effet de scintillement : prolongé, adouci, bug corrigé.
- Les lignes blanches et les ombres de l'en-tête, un pied de page trop chargé, un titre de mentions légales trop long : simplifiés selon mes retours.

- Des phrases trop vagues ou trop « slogan », des icônes sur chaque ligne de la page À propos, une phrase mise en avant à tort (la recherche de stage) : reformulées ou retirées.
- Des covers de projets au rendu que je n'aimais pas : refaites, puis refaites une seconde fois car elles étaient rognées sur les pages projet.
- Les logos des logiciels et des IA : je fournis moi-même les fichiers, l'IA ne les dessine pas.

**Corrigé après contrôle**
- Textes illisibles sur les pages projet, survol de la liste de projets entièrement blanc, espace excessif entre deux sections, section contact trop noire, jonction avec le pied de page, barre de défilement pas assez visible, logo mal adapté au fond noir, flèche « retour en haut » incorrecte au survol, contraste insuffisant des numéros des mentions légales.
- Mentions légales : adresse de l'hébergeur vérifiée sur le site d'Infomaniak et corrigée.
- Texte alternatif d'une image qui contenait une note de travail.

**Mis en forme par moi** : choix du contenu, sélection des projets, coordonnées, hébergeur, structure des pages.

## 5. Ce que je peux expliquer devant le jury

Parties du code que je dois pouvoir présenter et modifier :

- `src/data/projets.ts` et `profil.ts` : le contenu du site vient de ces fichiers, les pages sont générées à partir d'eux.
- `src/layouts/Layout.astro` : structure commune, thème clair / sombre, écran de chargement, en-tête.
- `src/scripts/arc.ts` : galerie en arc avec défilement en boucle.
- `src/lib/theme.ts` : couleurs des pages.
- `src/pages/sitemap.xml.ts` : génération du plan du site.
- `src/styles/global.css` : variables de thème (`--surf`, `--encre`, `--pied-*`…), effet verre.

**Ce que je dois encore réviser avant la soutenance : [À COMPLÉTER honnêtement].**

## 6. Historique Git

Le code du portfolio a été commencé en local pendant les vacances de la Toussaint, avant la création du dépôt. Le dépôt GitHub a été créé le **13 novembre 2026** ; l'état du projet à cette date a été rejoué en commits par étape, puis les modifications suivantes ont été commitées au fil du travail. L'historique ne reflète donc pas les semaines précédentes, que le `JOURNAL.md` décrit.
