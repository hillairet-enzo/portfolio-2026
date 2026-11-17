# QUALITE.md — Contrôle qualité du portfolio

Grille propre à ce site : portfolio statique (Astro), sans base de données, sans formulaire, sans cookie, avec peu d'images et beaucoup d'effets visuels (verre, animations, écran de chargement). Les critères retenus sont ceux qui comptent dans ce cas.

**Méthode générale.** Mesures avec Lighthouse 12 (Chromium, ordinateur) sur les six pages du site, lancées une par une sur la version compilée en local (`astro build` puis `astro preview`). Les chiffres de performance sont donc des mesures locales : **à refaire sur enzoh.fr une fois en ligne**. Contrôles manuels dans le code et dans le navigateur pour le reste.

## Résultats Lighthouse (13 novembre 2026)

| Page | Perf. | Accessibilité | Bonnes pratiques | SEO | Poids transféré |
| --- | --- | --- | --- | --- | --- |
| Accueil (`/`) | 95 | 100 | 100 | 100 | 497 Ko |
| À propos | 100 | 100 | 100 | 100 | 97 Ko |
| Contact | 100 | 100 | 100 | 100 | 94 Ko |
| Mentions légales | 100 | 100 (95 avant correction) | 100 | 100 | 95 Ko |
| TiK•TaK | 95 | 100 | 100 | 100 | 500 Ko |
| ThermoViz | 93 | 100 | 100 | 100 | 499 Ko |

## 1. Accessibilité

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Contraste des textes | Audit Lighthouse sur les six pages | Les numéros de section des mentions légales étaient à 3,41:1 (minimum 4,5:1) : texte foncé, score passé de 95 à 100 |
| Langue et structure | `lang="fr"` dans le gabarit ; un seul `h1` par page, vérifié dans le HTML généré | Conforme |
| Alternatives textuelles | Recherche d'images sans `alt` dans le code | Aucune. Un texte alternatif contenait une note de travail : remplacé par une vraie description |
| Navigation au clavier | 31 règles `:focus-visible` dans la feuille de styles, lien d'évitement présent dans le gabarit | Contrôle complet à la main **à faire** |
| Boutons à deux états | Bascule Galerie/Liste : `aria-pressed` ; widget de thème : `role="switch"` et `aria-checked` mis à jour par script | Conforme |
| Mouvement et effets | Règles `prefers-reduced-motion` (35), `prefers-reduced-transparency` (7) et `prefers-contrast` (6) | Les animations, l'écran de chargement et le verre se simplifient selon les préférences du système |

**Non encore testé** : lecteur d'écran (NVDA), zoom à 200 %, taille des zones tactiles sur mobile.

## 2. Sobriété et performance

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Poids des pages | Poids transféré mesuré par Lighthouse | 94 à 97 Ko pour les pages sans photo ; environ 500 Ko pour l'accueil et les pages projet (une image de couverture) |
| Images | Poids et format de chaque fichier de `public/images` | Couverture TiK•TaK : JPG 424 Ko → WebP 185 Ko. Image d'accueil de 336 Ko supprimée car plus utilisée. Total divisé par plus de deux |
| Polices | Inspection de `dist/_astro` | Inter hébergée avec le site (aucune requête vers un service tiers) ; seule la partie latine (48 Ko) est téléchargée |
| JavaScript | Aucun fichier JavaScript externe : scripts courts intégrés aux pages, pas de bibliothèque lourde | Temps de blocage : 0 ms sauf l'accueil (160 ms) |
| Stabilité de l'affichage | Décalage de mise en page (CLS) | 0, sauf Contact (0,011) : négligeable |
| Temps d'affichage | LCP mesuré | 1,4 à 1,7 s sur les pages sans photo ; 2,5 à 3,2 s sur celles avec une grande photo |

**Limites assumées.** L'écran de chargement du logo est un choix de direction artistique : il retarde volontairement l'affichage de l'accueil (environ 3 secondes), il n'apparaît qu'à l'arrivée sur le site et au rechargement, et il disparaît avec `prefers-reduced-motion`.
**À améliorer.** La feuille de styles fait environ 160 Ko non compressés, avec des règles qui se recouvrent : la découper par composant et supprimer les règles mortes. Redimensionner l'image de ThermoViz (219 Ko).

## 3. Référencement

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Titres | Un `<title>` différent par page, relu dans le HTML généré | « Projets », « À propos », « Contact », « Mentions légales » suivis du nom |
| Descriptions | Balise `meta description` sur chaque page | Présentes |
| URL canonique et Open Graph | Balises `canonical`, `og:title`, `og:description`, `og:url` | Présentes |
| Plan du site | `sitemap.xml` généré automatiquement depuis la liste des projets ; `robots.txt` qui y renvoie | 6 adresses listées, mises à jour toutes seules à chaque nouveau projet |
| Structure | Un `h1` par page, hiérarchie des titres, liens avec texte explicite | Score SEO Lighthouse 100 partout |

**À faire.** Ajouter une image de partage (`og:image`) pour les aperçus LinkedIn, et des données structurées « Person ». Après la mise en ligne : tester l'aperçu LinkedIn et soumettre le plan du site.

## 4. Conformité juridique

| Critère | Ce que j'ai vérifié, et comment | Correction / résultat |
| --- | --- | --- |
| Mentions légales | Page `/mentions-legales`, liée depuis chaque pied de page | Éditeur, directeur de la publication, contact, hébergeur (Infomaniak Network SA, adresse et numéro d'entreprise vérifiés sur infomaniak.com) |
| Données personnelles et cookies | Aucun cookie, aucun outil de mesure d'audience, aucun formulaire : le contact passe par un simple lien e-mail | Aucune bannière nécessaire. Le texte de la page l'explique ; j'y ai retiré une phrase sur un formulaire qui n'existe pas |
| Services tiers | Aucune police ni bibliothèque chargée depuis un serveur externe | Pas de transfert d'adresse IP vers un tiers |
| Licences | Astro (MIT), Inter (SIL OFL 1.1), Hairline (MIT) | Citées avec leurs auteurs dans les crédits |
| Droits sur les contenus | Visuels et captures des projets | Origine déclarée ; certains visuels de TiK•TaK générés par IA sont signalés |

**À vérifier avant la mise en ligne.** Les coéquipiers ne sont pas nommés (choix assumé). Confirmer que j'ai le droit d'utiliser chaque capture et visuel. Le CV et mon adresse e-mail seront publics.

## Résumé : ce qui reste à faire

1. Test manuel complet au clavier et au lecteur d'écran, puis sur mobile.
2. Refaire toutes les mesures sur enzoh.fr, en ligne.
3. Découper et alléger la feuille de styles.
4. Ajouter `og:image` et les données structurées.
5. Vérifier les droits des contenus et nommer les co-auteurs.
