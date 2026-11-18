# Qualité web – Portfolio

Cette grille porte sur mon site : un portfolio statique (Astro) très visuel, avec une galerie de projets en arc, beaucoup d'images, un écran de chargement en lettres, des cartes qui s'empilent et des pages projet à onglets. Les projets viennent d'une base SQLite lue au moment de la compilation. Le site n'a ni formulaire ni cookie. J'ai donc surtout contrôlé ce qui peut coincer dans ce cas précis : le poids des images, l'accessibilité des animations et des onglets, la navigation sans souris, le référencement et les droits sur les images de tiers.

Mesures faites le 18 novembre 2026, sur la version compilée en local (`astro build` puis `astro preview`). Les temps sont donc meilleurs qu'en ligne : je les referai sur portfolio.enzoh.fr.

## Outils utilisés

- **Lighthouse 12** (Chromium, profil ordinateur) : performance, accessibilité, bonnes pratiques et référencement, sur les dix pages du site, une par une.
- **Navigateur et clavier** : test à la touche Tab, affichage en navigation privée pour éviter le cache.
- **Code et HTML généré** : recherche d'images sans `alt`, des balises de référencement et des règles d'accessibilité dans le dossier `dist`.

## Résultats Lighthouse

| Page | Performance | Accessibilité | Bonnes pratiques | Référencement | Poids transféré | LCP |
| --- | --- | --- | --- | --- | --- | --- |
| Accueil | 99 | 100 | 100 | 100 | 589 Ko | 0,9 s |
| À propos | 98 | 100 | 100 | 100 | 1 201 Ko | 1,2 s |
| Contact | 100 | 100 | 100 | 100 | 94 Ko | 0,3 s |
| Mentions légales | 100 | 100 | 100 | 100 | 181 Ko | 0,5 s |
| TiK•TaK | 100 | 100 | 100 | 100 | 212 Ko | 0,4 s |
| ThermoViz | 100 | 100 | 100 | 100 | 221 Ko | 0,4 s |
| Iris | 100 | 100 | 100 | 100 | 223 Ko | 0,4 s |
| Olyvia | 100 | 100 | 100 | 100 | 230 Ko | 0,4 s |
| Affiches Montbéliard | 100 | 100 | 100 | 100 | 352 Ko | 0,5 s |
| Art contemporain | 100 | 100 | 100 | 100 | 572 Ko | 0,8 s |

## 1. Accessibilité

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Contraste du texte | Audit Lighthouse sur toutes les pages. Les numéros de section des mentions légales étaient à 3,41:1, sous le minimum de 4,5:1. | J'ai assombri ce texte. Lighthouse ne signale plus de contraste faible. J'ai aussi retiré le mode sombre : je n'aimais pas son contraste, et le site est maintenant uniquement en clair. |
| Taille des zones cliquables | Audit Lighthouse (minimum de 24 px). Les points de navigation des cartes À propos faisaient 11 px. | Zone cliquable portée à 24 px, le point visible reste petit (score 96 → 100). |
| Navigation au clavier | Parcours à la touche Tab. 30 règles `:focus-visible`, lien d'évitement « Aller au contenu » en haut de chaque page. | Les onglets des mentions légales se pilotent au clavier (flèches), et un onglet fermé n'est plus atteignable (`inert`). |
| Onglets et boutons à deux états | Les onglets utilisent `aria-expanded` et `aria-controls`. La bascule Galerie / Liste de l'accueil utilise `aria-pressed`. | Rien à corriger. |
| Textes alternatifs | Recherche d'images sans `alt` dans le HTML généré. | Chaque image a un `alt`. Les images de la galerie de la page À propos sont des liens : leur `aria-label` dit « Inspiration N, de @artiste : voir sur Pinterest ». Les images purement décoratives ont un `alt` vide. |
| Langue et titres | `lang="fr"` et un seul `h1` par page, vérifiés dans le HTML. | Rien à corriger. |
| Écran de chargement | Les lettres qui défilent sont cachées aux lecteurs d'écran (`aria-hidden`). | Le vrai texte reste dans la page. |
| Mouvement et effets | Règles `prefers-reduced-motion` (35), `prefers-reduced-transparency` (10) et `prefers-contrast` (7). | Les animations, le chargement et l'effet de verre se simplifient selon les réglages du système. |
| Messages à l'écran | Le message « CV en construction » et « Adresse copiée » apparaît dans une carte blanche pleine. | Il se superposait au pied de page et se lisait mal : corrigé. |

**Pas encore testé :** lecteur d'écran (NVDA), zoom à 200 %, parcours complet au clavier de toutes les pages, vrai téléphone.

## 2. Sobriété et performance

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Format des images | Les images du site étaient en JPEG. | Toutes les images sont maintenant en WebP (64 fichiers, 5,8 → 3,9 Mo au total, qualité 82). Seule `og.png` reste en PNG, car LinkedIn et les réseaux sociaux n'affichent pas toujours le WebP ; le favicon reste en SVG. |
| Poids de la page À propos | Lighthouse : 1 891 Ko. La galerie affichait 24 images en 736 px de large pour des cases de 214 px, et ma photo faisait 315 Ko. | Images de la galerie ramenées à 480 px (1 504 → 897 Ko au total), ma photo à 1 000 px de large (315 → 120 Ko). La page passe à 1 201 Ko. |
| Poids de l'accueil | Poids transféré mesuré par Lighthouse. | 589 Ko pour six covers. |
| Poids des autres pages | Lighthouse. | 94 Ko sans photo, 210 à 570 Ko pour une page projet. |
| Feuille de styles | Compilation du site. | 144 Ko, soit 30 Ko une fois compressée. Un nettoyage avait déjà retiré environ 1 800 lignes de CSS devenues inutiles. |
| Polices | Inspection du dossier compilé. | Une seule famille, Inter, hébergée avec le site (Fontsource), sans Google Fonts. |
| JavaScript | Lecture du code. | Aucune bibliothèque d'animation : seulement de courts scripts. Le temps de blocage est de 0 ms sur toutes les pages. |
| Stabilité de l'affichage | CLS mesuré par Lighthouse. | 0 sur toutes les pages, sauf Contact (0,007). |
| Site statique | Dossier `dist`. | 13 pages HTML générées à l'avance (dont la 404) : le serveur ne calcule rien à chaque visite. |

**Limites assumées :**
- L'écran de chargement est un choix de direction artistique. Il retarde volontairement l'arrivée sur le site d'environ 3 secondes, une seule fois.
- La page À propos reste la plus lourde à cause de la galerie et du portrait.

**À améliorer :** servir plusieurs tailles selon l'écran (`srcset`) ; charger les images de la galerie seulement quand on fait défiler la bande.

## 3. Référencement

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Titres et descriptions | `<title>` et `meta description` relus dans le HTML généré. | Chaque page a les siens. Le titre de l'accueil commence par mon nom, et les descriptions des projets font 155 caractères au maximum. |
| URL canonique | Balise `canonical` sur chaque page. | Présente, construite depuis `https://portfolio.enzoh.fr`. |
| Partage sur les réseaux | Balises Open Graph. | Image de partage (`og.png`), et une image propre à chaque projet. |
| Données structurées | Blocs JSON-LD. | `Person`, `WebSite` et `CreativeWork` pour les projets. |
| Plan du site et robots | `sitemap.xml` et `robots.txt`. | 10 adresses, mises à jour toutes seules à chaque nouveau projet. |
| Page 404 | Elle ne doit pas apparaître dans les résultats de recherche. | J'ai ajouté `noindex`. |
| Google | Fichier de validation de Google Search Console. | Ajouté dans `public/`. |

**Après la mise en ligne :** tester l'aperçu d'un lien partagé sur LinkedIn.

## 4. Conformité juridique

| Critère | Ce que j'ai vérifié et comment | Ce que j'ai corrigé |
| --- | --- | --- |
| Mentions légales | Page liée depuis chaque pied de page, en onglets dépliables. Éditeur, directeur de la publication, contact, hébergement, propriété intellectuelle, intelligence artificielle, données personnelles. | Adresse d'Infomaniak vérifiée sur leur site. |
| Données personnelles | Aucun cookie, aucune statistique, aucun formulaire : on me contacte par e-mail. | Pas de bandeau de consentement nécessaire. La page indique la durée de conservation des e-mails (3 ans), les droits RGPD et la CNIL. |
| Stockage local | Ce que le site enregistre dans le navigateur. | Un seul choix : l'affichage Galerie ou Liste de l'accueil. Il reste sur l'appareil et est décrit dans les mentions légales. |
| Services tiers | Aucune police ni bibliothèque chargée depuis un serveur externe. | Aucune adresse IP n'est envoyée à un tiers. |
| Licences | Astro (MIT) et Inter (SIL Open Font License). | Créditées dans les mentions légales. |
| Mockups | Licences relues sur Pixeden et Mockup Cloud : usage personnel et commercial autorisé. | Crédités quand même. |
| Œuvres de tiers | Mangas et animes des diapos d'Art contemporain, affiches, captures. | Œuvres et auteurs cités dans les légendes et les mentions légales. Retrait sur simple demande. |
| Images d'inspiration | Mon tableau Pinterest « portfolio » (page À propos). | Chaque image renvoie vers son épingle, et le nom de l'artiste s'affiche au survol quand Pinterest l'indique (14 images sur 24). |
| IA | Claude pour la conception, le code et la rédaction, Gemini pour certains visuels de TiK•TaK. | Déclarés dans les mentions légales. Usage détaillé dans `IA.md`. |
| Personnes | Coéquipiers des projets de groupe. | Non nommés (choix assumé). |

## Ce qu'il me reste à faire

1. Vérifier l'hébergement dans les mentions légales : elles disent Infomaniak, mais le site est servi depuis le VPS de la formation (seuls le nom de domaine et la messagerie sont chez Infomaniak).
2. Refaire les mesures Lighthouse sur portfolio.enzoh.fr, en ligne.
3. Tester au clavier, avec un lecteur d'écran (NVDA), en zoom à 200 % et sur un vrai téléphone.
4. Ajouter des tailles d'image adaptées au mobile (`srcset`) et alléger la page À propos.
5. Déposer le vrai CV en PDF, puis revérifier les crédits.
