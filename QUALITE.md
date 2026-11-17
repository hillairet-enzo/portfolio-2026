# QUALITE.md — Contrôle qualité du portfolio

Grille propre à ce site : portfolio statique (Astro), contenus des projets tirés d'une base SQLite **à la compilation** (aucune base en ligne), sans formulaire, sans cookie, avec beaucoup d'images (covers, captures, mockups, inspirations) et d'effets visuels (verre, animations, écran de chargement en lettres, galerie en arc). Les critères retenus découlent de ces choix : les risques de ce site sont le poids des images, l'accessibilité des animations et des effets de verre, et les droits sur les visuels de tiers.

**Méthode.** Lighthouse 12 (Chromium, profil ordinateur) sur les dix pages du site, une par une, sur la version compilée en local (`astro build` puis `astro preview`). Les chiffres de vitesse sont donc meilleurs qu'en ligne : ils seront refaits sur enzoh.fr après la mise en ligne. Les autres contrôles sont faits dans le code et dans le HTML généré.

## Résultats Lighthouse (17 novembre 2026)

| Page | Perf. | Accessibilité | Bonnes pratiques | SEO | Poids transféré | LCP |
| --- | --- | --- | --- | --- | --- | --- |
| Accueil | 98 | 100 | 100 | 100 | 834 Ko | 1,1 s |
| À propos | 100 | 100 (96 avant correction) | 100 | 100 | 550 Ko | 0,8 s |
| Contact | 100 | 100 | 100 | 100 | 94 Ko | 0,3 s |
| Mentions légales | 100 | 100 | 100 | 100 | 95 Ko | 0,3 s |
| TiK•TaK | 100 | 100 | 100 | 100 | 295 Ko | 0,5 s |
| ThermoViz | 100 | 100 | 100 | 100 | 318 Ko | 0,5 s |
| Iris | 100 | 100 | 100 | 100 | 331 Ko | 0,6 s |
| Olyvia | 100 | 100 | 100 | 100 | 338 Ko | 0,5 s |
| Affiches Montbéliard | 100 | 100 | 100 | 100 | 403 Ko | 0,5 s |
| Art contemporain | 99 | 100 | 100 | 100 | 780 Ko | 0,9 s |

## 1. Accessibilité

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Contraste des textes | Audit Lighthouse, en clair et en sombre | Numéros de section des mentions légales à 3,41:1 : texte assombri. Légendes trop pâles en mode sombre : corrigées |
| Taille des zones cliquables | Audit Lighthouse (critère WCAG 2.5.8, 24 px minimum) | Les points de navigation des cartes À propos faisaient 11 px : zone cliquable portée à 24 px, le point visible reste petit (score 96 → 100) |
| Langue et structure | `lang="fr"` ; un seul `h1` par page, vérifié dans le HTML généré | Conforme |
| Alternatives textuelles | Recherche d'images sans `alt` ; relecture des descriptions | Aucune image sans `alt`. Une description contenait une note de travail : remplacée. Les diapos d'Art contemporain citent l'œuvre de manga présente |
| Navigation au clavier | 28 règles `:focus-visible`, lien d'évitement « Aller au contenu » dans le gabarit | Contrôle complet à la main **à faire** |
| Boutons à deux états | Bascule Galerie / Liste : `aria-pressed` ; thème : `role="switch"` et `aria-checked` mis à jour par script | Corrigé : le bouton de thème avait les deux attributs à la fois |
| Écran de chargement | Lettres décoratives masquées aux lecteurs d'écran (`aria-hidden`) | Le texte réel reste dans la page |
| Mouvement et effets | Règles `prefers-reduced-motion` (35), `prefers-reduced-transparency` (9), `prefers-contrast` (6) | Animations, chargement et verre se simplifient selon les préférences du système |

**Non encore testé** : lecteur d'écran (NVDA), zoom à 200 %, parcours complet au clavier, test sur un vrai téléphone.

## 2. Sobriété et performance

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Poids des pages | Poids transféré mesuré par Lighthouse | 94-95 Ko sans photo ; 300-400 Ko pour une page projet ; 834 Ko pour l'accueil (six covers) |
| Images | Format et dimensions des covers | Six covers en WebP (2400 × 1800, format 4/3 identique à leur cadre : aucun rognage) |
| Feuille de styles | Recherche des règles dont les classes n'existent plus dans le code, puis comparaison de captures avant / après sur toutes les pages, en clair et en sombre | 6 237 → 4 431 lignes ; 8 composants et une ancienne page supprimés. CSS compilé : 135 Ko, 28 Ko compressé |
| Dépendances | Relecture de `package.json` | Une librairie déclarée mais jamais utilisée (Hairline) retirée |
| Polices | Inspection de `dist/_astro` | Inter hébergée avec le site, seule la partie latine est téléchargée |
| JavaScript | Scripts courts, aucune bibliothèque | 8 Ko au total ; temps de blocage 0 ms sur toutes les pages |
| Stabilité de l'affichage | CLS | 0 partout, sauf Contact (0,007) |

**Limites assumées.** L'écran de chargement est un choix de direction artistique : il retarde volontairement l'arrivée sur le site d'environ 3 secondes, une seule fois. L'accueil et Art contemporain sont les pages les plus lourdes à cause des images.
**À améliorer.** Servir des covers plus petites sur mobile (`srcset`) ; alléger les images d'inspiration de la page À propos.

## 3. Référencement

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Titres et descriptions | `<title>` et `meta description` différents sur chaque page, relus dans le HTML généré | Présents |
| URL canonique | Balise `canonical` sur chaque page | Présente, construite depuis `site: 'https://enzoh.fr'` |
| Partage sur LinkedIn | Balises Open Graph | Ajout d'une image de partage (`og.png`, 1200 × 630) et de `og:image`, `og:locale`, `twitter:card` |
| Données structurées | Bloc JSON-LD `Person` (nom, métier, ville, e-mail, LinkedIn, GitHub) | Ajouté dans le gabarit |
| Plan du site | `sitemap.xml` généré depuis la base des projets ; `robots.txt` qui y renvoie | 10 adresses, mises à jour toutes seules à chaque nouveau projet |
| Structure | Un `h1` par page, liens avec un texte explicite | Score SEO 100 partout |

**Après la mise en ligne.** Tester l'aperçu avec l'outil d'inspection de LinkedIn ; déclarer le plan du site dans Google Search Console.

## 4. Conformité juridique

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Mentions légales | Page liée depuis chaque pied de page | Éditeur, directeur de la publication, contact, hébergeur (Infomaniak Network SA, adresse et numéro vérifiés sur leur site) |
| Données personnelles | Aucun cookie, aucune mesure d'audience, aucun formulaire : contact par lien e-mail | Pas de bannière nécessaire. La page indique la durée de conservation des e-mails (3 ans), les droits RGPD et la CNIL. Le thème choisi est gardé dans le navigateur (stockage local), sans donnée personnelle |
| Services tiers | Aucune police ni bibliothèque chargée depuis un serveur externe | Pas de transfert d'adresse IP vers un tiers |
| Licences du code | Astro (MIT), Inter (SIL OFL 1.1) | Citées dans les crédits |
| Mockups | Licences relues sur Pixeden et Mockup Cloud | Usage personnel et commercial autorisé, crédit non obligatoire : crédités quand même |
| Œuvres de tiers | Mangas et animes des diapos d'Art contemporain, affiches, captures | Œuvre et auteurs cités dans la légende des diapos et dans les mentions légales ; retrait sur simple demande |
| Images d'inspiration | Images Pinterest de la page À propos | Lien vers l'épingle et créateur affichés ; tableau provisoire, images à remplacer |
| IA | Visuels de TiK•TaK générés par IA | Signalés dans les mentions légales ; usage détaillé dans `IA.md` |
| Personnes | Coéquipiers des projets de groupe | Non nommés (choix assumé) |

## Résumé : ce qui reste à faire

1. Test manuel complet au clavier, au lecteur d'écran (NVDA), au zoom 200 % et sur téléphone.
2. Refaire les mesures Lighthouse sur enzoh.fr, en ligne.
3. Remplacer les images d'inspiration, la photo « travail » et le CV, puis revérifier les crédits.
4. Ajouter des tailles d'image adaptées au mobile.
