# IA.md — Déclaration d'usage de l'intelligence artificielle

Projet : portfolio personnel (BUT MMI, semestre 3), enzoh.fr.
Auteur : Enzo Hillairet.

Ce fichier déclare chaque outil d'IA utilisé, à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'il a produit.

## 1. Outils utilisés

| Outil | Étapes | Usage |
| --- | --- | --- |
| **Claude** (Anthropic), via Claude Code et l'application Claude | Conception graphique, intégration, qualité web, mise en place du dépôt | Assistant principal : propositions de design, écriture du code Astro / CSS / JavaScript sous ma direction, corrections, audit, rédaction de textes |
| **Connecteur Figma** piloté par Claude | Maquette | Création du fichier Figma et des écrans à partir de mes consignes |
| Générateur d'images IA (outil : **[À COMPLÉTER]**) | Visuels du projet TiK•TaK | Certains visuels du projet TiK•TaK, déclarés dans les mentions légales |

## 2. Ce que l'IA a produit

- **Conception** : propositions d'identité visuelle (noir et blanc, effet « verre » inspiré d'Apple, palette arc-en-ciel en rappels discrets), logo monogramme « EH ».
- **Code** : structure Astro (pages, composants, données dans `src/data`), galerie de projets en arc avec vue liste, page projet en détail, thème clair / sombre, écran de chargement, barre de défilement personnalisée, widget de thème, pied de page, mentions légales.
- **Qualité** : `sitemap.xml`, `robots.txt`, conversion d'images en WebP, mesures Lighthouse.
- **Dépôt** : création du dépôt Git et des premiers commits.
- **Textes** : première version de textes du site, que j'ai relus et repris.

## 3. Ce que j'ai modifié, corrigé ou rejeté

Je pilote le travail par retours successifs. Principaux arbitrages :

**Rejeté**
- Une police jugée trop fantaisiste : je voulais une police simple et droite de type Inter.
- Une couleur dominante jaune : j'ai demandé plus de noir et blanc.
- Une page « Inspirations » et une landing page : supprimées, l'accueil est directement la galerie des projets.
- Un fond sombre gris-bleu : je l'ai fait remplacer par du vrai noir, avec du gris très foncé pour détacher les éléments.
- Un rectangle derrière l'onglet actif de l'en-tête, la grande ellipse sous le carrousel, les flèches du carrousel : refaits.
- Un écran de chargement trop brutal à la sortie, avec un effet de scintillement : prolongé, adouci, bug corrigé.
- Les lignes blanches et les ombres de l'en-tête, un pied de page trop chargé, un titre de mentions légales trop long : simplifiés selon mes retours.

**Corrigé après contrôle**
- Textes illisibles sur les pages projet, survol de la liste de projets entièrement blanc, espace excessif entre deux sections, section contact trop noire, jonction avec le pied de page, barre de défilement pas assez visible, logo mal adapté au fond noir, flèche « retour en haut » incorrecte au survol, contraste insuffisant des numéros des mentions légales.
- Mentions légales : adresse de l'hébergeur vérifiée sur le site d'Infomaniak et corrigée.
- Texte alternatif d'une image qui contenait une note de travail.

**Mis en forme par moi** : choix du contenu, sélection des projets, coordonnées, hébergeur, structure des pages.

## 4. Ce que je peux expliquer devant le jury

Parties du code que je dois pouvoir présenter et modifier :

- `src/data/projets.ts` et `profil.ts` : le contenu du site vient de ces fichiers, les pages sont générées à partir d'eux.
- `src/layouts/Layout.astro` : structure commune, thème clair / sombre, écran de chargement, en-tête.
- `src/scripts/arc.ts` : galerie en arc avec défilement en boucle.
- `src/lib/theme.ts` : couleurs des pages.
- `src/pages/sitemap.xml.ts` : génération du plan du site.
- `src/styles/global.css` : variables de thème (`--surf`, `--encre`, `--pied-*`…), effet verre.

**Ce que je dois encore réviser avant la soutenance : [À COMPLÉTER honnêtement].**

## 5. Historique Git

Le portfolio a été développé en local avant la création du dépôt. Le dépôt GitHub a été créé le **13 novembre 2026** ; l'état du projet à cette date a été rejoué en commits par étape, puis les modifications suivantes ont été commitées au fil du travail. L'historique ne reflète donc pas les semaines précédentes, que le `JOURNAL.md` décrit.
