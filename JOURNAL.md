# JOURNAL.md — Journal de bord du portfolio

Projet individuel du semestre 3 (BUT MMI) : concevoir, réaliser et mettre en ligne mon portfolio professionnel sur enzoh.fr.

## Septembre et octobre 2026 : conception

**Ce que j'ai fait**
- Rédigé la note de positionnement. Cible : les studios de création digitale, avec un profil volontairement polyvalent. Message : un profil multimédia complet, capable d'imaginer une identité visuelle forte et de la décliner en une expérience web interactive et fluide, que la navigation du site doit prouver dès les 30 premières secondes.
- Exploré deux directions graphiques, puis écarté les deux :
  - **Le minimalisme** (interface monochrome aérée, typographie et grilles strictes) : trop générique, les studios en reçoivent beaucoup, et elle limitait mon univers (avatar 3D) comme mes interactions dynamiques avec Astro ou Tailwind CSS.
  - **Le style « corporate »** (design institutionnel, conventions classiques de l'UX/UI) : sans âme pour un profil créatif, il écrasait mon identité, plus proche des interfaces de jeux vidéo.
- Construit la maquette Figma, desktop et mobile : écrans d'accueil, de menu, de projets et d'affiches. Elle comprend aussi un guide de style, un moodboard et un dossier. Direction artistique : un ciel bleu et de l'herbe, des panneaux en verre translucide, un avatar 3D de moi et un menu façon interface de jeu vidéo. Projets présentés : Olyvia! et une affiche pour Montbéliard, tous deux de l'an dernier.
- Défendu cette maquette lors de la soutenance maquette.

**Remarques des enseignants à la soutenance maquette**
- La page d'accueil ne présente pas assez d'informations ni de profil clair.
- Le nom n'apparaît que sur l'accueil et dans le pied de page : on perd l'identité sur les autres pages.
- L'image de fond est identique sur toutes les pages, ce qui est peu pertinent.
- Les contenus sont trop systématiquement « enfermés » dans des blocs.
- L'avatar 3D reste intéressant, à utiliser ailleurs sur le site, dans différentes poses.
- Pas de logo ni de monogramme.
- « Hello ? » ; compétences plutôt que technologies ; il faut plus de détails dans les fiches projet ; attention à l'adresse e-mail ; densité de l'information.

**[À COMPLÉTER]** : le détail semaine par semaine (ce que j'ai fait, ce qui a coincé, ce que j'ai décidé), notamment le temps passé sur le moodboard et la maquette.

## Changement de direction artistique

La maquette (ciel bleu, avatar 3D, interface de jeu vidéo) et le site actuel (noir et blanc, effet de verre, police Inter) n'ont pas la même direction artistique, et le site présente d'autres projets que la maquette.

**Pourquoi j'ai changé**
- Les remarques du jury pointaient le décor identique sur toutes les pages, les contenus enfermés dans des blocs, une identité peu lisible et l'absence de logo.
- Une fois codée, la première version ne me plaisait pas : la police, la couleur jaune dominante, les animations et les textes.
- Je voulais un rendu plus éditorial, qui mette en avant mes projets plutôt qu'un décor.

**Ce que chaque remarque a changé**

| Remarque | Réponse dans le site |
| --- | --- |
| Accueil sans profil clair | L'accueil affiche mon nom, ma formation, ce que je fais et ce que je cherche, puis les projets |
| Identité perdue hors de l'accueil | Monogramme « EH » et nom dans l'en-tête de toutes les pages, ainsi que dans le pied de page |
| Même image de fond partout | Plus de décor commun : chaque page a sa structure (galerie en arc, cartes empilées, contact en machine à écrire, mentions légales en liste) |
| Contenus enfermés dans des blocs | Mise en page plus libre : grands titres, texte, filets fins |
| Pas de logo | Monogramme « EH », aussi sur l'écran de chargement |
| Compétences plutôt que technologies | Les compétences sont formulées en savoir-faire, avec les outils entre parenthèses |
| Plus de détails dans les fiches projet | Chaque page projet détaille le contexte, mon rôle, le processus, les choix techniques et le résultat |
| Densité de l'information | Détails des projets rangés en onglets et en accordéons |
| Attention à l'adresse e-mail | Adresse professionnelle sur mon nom de domaine, créée chez Infomaniak : contact@enzoh.fr |
| Avatar 3D à réutiliser | Abandonné : il appartenait à l'univers de la maquette (décor de jeu vidéo) et aurait détonné dans une direction éditoriale centrée sur les projets |
| « Hello ? » (ma page À propos de la maquette commençait par « Hello ») | La page À propos commence par une présentation directe : « Étudiant en MMI, je conçois des sites qui se voient et qui fonctionnent. » |

La note de positionnement a été mise à jour en conséquence (`POSITIONNEMENT.md`).

## Vacances de la Toussaint 2026 : début du code

**Ce que j'ai fait**
- Commencé à coder le portfolio à partir de la maquette, avec Astro : première version du site.
- **20 et 21 octobre** : réalisation de la SAE 303 « ThermoViz » (visualisation de données sur la chaleur en ville) en binôme avec Matthis Carnicer. Mon rôle : récit et rédaction, intégration, préparation des données, page Méthode et une partie des visualisations. Dates d'après le dépôt du projet.
- **2 au 5 novembre** : réalisation seul de la SAE 301 « TiK•TaK », un configurateur de montres personnalisées (Astro, Bun, SQLite) : direction artistique, interface, développement, base de données et mise en ligne. Le dépôt compte 83 commits.

**Ce qui a coincé**
- Le rendu de cette première version ne correspondait pas à ce que je voulais montrer à un recruteur : police (Bricolage Grotesque), couleur jaune dominante, animations et textes.

**Ce que j'ai décidé**
- Refaire le design, les animations et le code, en gardant le fond : les projets et les consignes de l'école.
- Présenter en priorité ces deux projets, les plus aboutis, comme études de cas. Il m'en faut un troisième, de préférence un travail personnel.

## Semaine du 9 au 15 novembre 2026

**Ce que j'ai fait**
- Décidé de repartir sur un nouveau design en gardant le fond (projets, consignes) : le rendu précédent ne me plaisait pas (police, animations, textes).
- Choisi une direction : noir et blanc, police Inter, effet « verre » inspiré d'Apple, rappels de couleur arc-en-ciel discrets, pas de couleur dominante.
- Supprimé la page « Inspirations » et la landing page : l'accueil est directement la galerie des projets (arc, avec vue liste).
- Construit les pages : accueil, À propos (cartes qui s'empilent), page projet en détail (onglets), Contact (titre en machine à écrire, adresse à copier), mentions légales.
- Ajouté la version claire / sombre, avec un vrai noir en sombre, un widget de thème, un logo « EH » et un écran de chargement.
- Créé le dépôt Git et le dépôt GitHub public le 13 novembre ; mis mes coordonnées dans `profil.ts`.
- Rédigé les mentions légales (éditeur, hébergeur Infomaniak, crédits) et simplifié le pied de page.
- Ajouté `sitemap.xml`, `robots.txt` ; converti la couverture de TiK•TaK en WebP ; mesuré le site avec Lighthouse.

**Ce qui a coincé**
- Plusieurs détails visuels à reprendre : en-tête (rectangle derrière l'onglet, lignes blanches, décalage de couleur avec la page Contact), gris-bleu en mode sombre, survol de la liste, flèche du pied de page, écran de chargement qui scintillait.
- Un contraste insuffisant sur les mentions légales, détecté par Lighthouse et corrigé.
- Le dépôt Git a été créé tard : l'historique ne montre pas les semaines précédentes.

**Ce que j'ai décidé**
- Garder deux études de cas solides (TiK•TaK, ThermoViz) et en ajouter une troisième, comme l'exige la consigne.
- Héberger chez Infomaniak, où se trouve déjà mon nom de domaine.
- Déclarer honnêtement l'usage de l'IA dans `IA.md`.

## Journal des séances

### Vendredi 13 novembre 2026
- Créé le dépôt Git et le dépôt GitHub public, puis mis mes coordonnées (e-mail, LinkedIn, GitHub) dans `profil.ts`.
- Refait les mentions légales dans le style du site (titre « En toute transparence »), avec l'hébergeur Infomaniak dont j'ai vérifié l'adresse sur leur site, et une section de crédits.
- Simplifié le pied de page : identité et e-mail, pages, liens. Corrigé la flèche de retour en haut, qui devenait invisible au survol.
- Corrigé l'en-tête : plus de lignes ni d'ombre, et un fond transparent en haut des pages claires pour qu'il suive la couleur de la page (page Contact comprise).
- Ajouté `sitemap.xml` et `robots.txt`, converti la couverture de TiK•TaK en WebP et supprimé une image inutilisée.
- Mesuré le site avec Lighthouse (accessibilité 100 partout) et corrigé un contraste trop faible sur les mentions légales.
- Rédigé `IA.md`, `JOURNAL.md` et `QUALITE.md`. Les parties à compléter sont repérées par `[À COMPLÉTER]`.
- Repris les remarques de la soutenance maquette. Ajouté un profil clair sur l'accueil, reformulé les compétences en savoir-faire, aligné la cible du site sur ma note de positionnement (studios de création digitale) et mis à jour la note (`POSITIONNEMENT.md`).
- Créé l'adresse professionnelle contact@enzoh.fr chez Infomaniak (service mail gratuit lié au domaine) et remplacé mon adresse Gmail sur tout le site.
- Ajouté les boutons pour télécharger mon CV : en-tête, page À propos, page Contact, section contact et pied de page. Ils s'affichent dès que le PDF est déposé dans `public/`. Un CV fictif est en place pour les tester, à remplacer par le vrai avant la mise en ligne.

### Dimanche 15 novembre 2026

- Réorganisation des pages projet en quatre onglets : « Contexte, défis et solutions », « Rôle », « Processus », « Choix techniques et résultat ». Chaque projet a maintenant des paires défi → solution et une section sur mon rôle.
- Les projets ne sont plus dans un gros fichier de code mais dans une base SQLite (`data/portfolio.db`), parce que c'est ce que nous apprenons en cours et que cela rend l'ajout d'un projet plus simple. Le site reste statique : un script exporte la base en JSON avant chaque build.
- Deux gabarits prévus, « site web » et « affiche », qui changent les libellés des onglets. TiK•TaK et ThermoViz ont été migrés en premier ; les autres projets suivent.
- Textes des deux projets réécrits en phrases courtes et simples, et onglets renommés pour être plus parlants : « Le projet et ses défis », « Mon rôle », « Ma démarche », « Les outils et le résultat ».
- Mise en page des onglets revue : espaces resserrés, bulles du rôle supprimées, démarche avec le schéma en grand sous un court texte d'introduction, outils présentés en cartes avec une icône et une phrase simple, schémas techniques retirés.
- Onglets adoucis : fond en dégradés pastel très légers à la place du gris, cartes blanches pour les défis, les outils et les schémas. Texte et section jugés inutiles retirés sur TiK•TaK (le schéma de la démarche se suffit à lui-même). Les sections à plusieurs photos passent en texte au-dessus et photos en dessous.
- Mockups : les captures d'écran des projets s'affichent maintenant dans une fenêtre de navigateur (format ordinateur) ou dans un téléphone (format mobile). Commande `npm run projets:images` pour lister les captures encore à faire.
- Mode d'emploi pour ajouter un projet : `data/AJOUTER-UN-PROJET.md`.
- Vraies captures de TiK•TaK (accueil, configurateur, modèle 3D, assistant IA) prises sur le site en ligne et placées dans les cadres navigateur, au format large 21:9. Restent les captures mobile et celles de ThermoViz.
- Retouches : fond des onglets en gris uni un peu plus foncé (plus de couleurs dans les coins), captures affichées sans fenêtre ni points de couleur mais détachées du fond (bord fin et ombre), clic sur une image pour l'ouvrir en grand (touche Échap ou clic pour fermer).
- Onglet « Les outils et le résultat » de TiK•TaK : le résultat présente maintenant deux mockups côte à côte (MacBook et téléphone tenus en main, avec l'accueil du site), faits à partir de mockups PSD gratuits et de mes captures. Les images dont le nom commence par `mockup-` s'affichent en vitrine, avec une légende.
- Réglages : textes étendus sur toute la largeur quand rien ne les accompagne, capture d'accueil retirée du premier onglet de TiK•TaK, visionneuse d'image refaite (plein écran, image centrée, légende, flèches et clavier pour passer d'une image à l'autre).
- Photo d'ouverture des pages projet : ombre douce et fin liseré pour qu'elle se détache du fond.
- ThermoViz : titre de la page projet corrigé (il était coupé sur les grands écrans, sa taille suit maintenant la largeur de sa colonne). Vraies captures du site (carte, écarts, ma commune, méthode, trois écrans mobile) et mockups MacBook et téléphone dans le résultat. Lien ajouté vers la page du projet sur data.gouv.fr (réutilisation publiée le 21 octobre 2026).

## Choix des réseaux professionnels (consigne 2.4)

**[À AJUSTER avec tes mots]**
J'ai choisi **LinkedIn** parce que je cherche un stage en communication et création : c'est là que les recruteurs et les agences repèrent les profils. Mon profil reprend le même message que le portfolio.
J'ai choisi **GitHub** parce que mon portfolio est du code : le dépôt public prouve mon travail et mon historique de commits.
Les deux sont liés depuis le site et utilisent le même nom, pour qu'on me retrouve facilement.
Je n'ai pas choisi Instagram ni Behance, car je n'y publie pas assez de contenu pour y être cohérent.

## À faire (suite du projet)

- Ajouter la troisième étude de cas.
- Ajouter mon CV en PDF et compléter mon parcours.
- Remplir `QUALITE.md` : audit d'accessibilité manuel et test sur mobile.
- Nettoyer et découper la feuille de styles (160 Ko).
- Mettre le site en ligne sur enzoh.fr (hébergement, HTTPS) et refaire les mesures sur le site en ligne.
- Mettre à jour LinkedIn, préparer les deux soutenances.
- Mockups ThermoViz refaits comme TiK•TaK : MacBook en main et iPhone Duo, tous deux avec la page d'accueil, et suppression des 3 petites captures mobiles de l'onglet résultat.
- Nouveau projet : Iris (plateforme de vidéo à la demande pour cinéphiles, module R304). Fiche saisie dans la base, vraies captures (accueil, étagères, PocketBase), mockups MacBook et iPhone Duo. Lien du site en ligne à ajouter après le déploiement.
- Nouveau projet : Olyvia (site WordPress et deux vidéos verticales, SAÉ 201-202 et module R210). Fiche saisie, captures Jira, DaVinci et site, mockup MacBook. Mockup téléphone provisoire, à refaire avec une image de la vidéo en bonne qualité.
- 2026-11-16 : projet 5 « Affiches » (campagne Montbéliard), nouveau gabarit affiche avec visionneuse une affiche à la fois.
- 2026-11-16 : Affiches : cartes d'affiches dans l'onglet résultat, couverture simplifiée.
- 2026-11-16 : projet 6 « Art contemporain » (diaporama Canva), visionneuse de diapos ; diapos provisoires en basse définition, à remplacer par les PNG exportés de Canva.
- 2026-11-16 : accueil : cartes « Projet à ajouter » retirées, galerie ajustée à 6 projets.
- 2026-11-16 : accueil, flèches retirées et cartes agrandies (tout tient à l'écran)
- 2026-11-16 : à propos, titre harmonisé avec l'accueil (début gris léger, suite en gras, taille réduite)
- 2026-11-16 : à propos, nouveau titre plus grand, cartes de couleur en verre translucide
- 2026-11-16 : titres tout en noir et en gras (plus de gris), titre À propos remis en grand
- 2026-11-16 : lien du site Iris ajouté (iris-vod.netlify.app), cartes À propos aux couleurs plus vives
- 2026-11-16 : à propos, portrait ajouté
- 2026-11-16 : à propos, patchwork de photos dans le hero (portrait + 3 photos recadrées)
- 2026-11-16 : à propos, petites vignettes du hero prévues pour mes inspirations Pinterest (inspiration-1/2/3.jpg)
- 2026-11-16 : à propos, défilé horizontal de 12 carrés d'inspirations à côté du portrait
- 2026-11-16 : à propos, photo plus fine, le défilé des inspirations bascule en grande mosaïque (bouton retour)
- 2026-11-16 : à propos, défilé d'inspirations plus fluide (3 rangées, vraie mosaïque, inertie, détection automatique des images inspiration-N)
- 2026-11-16 : à propos, hero refait en une seule bande horizontale (texte, portrait, petites cases), défilement natif au trackpad partout dans la section
- 2026-11-16 : à propos, blanc prolongé jusqu'aux cartes (gris seulement derrière elles), 30 cases d'inspiration
- 2026-11-16 : à propos, hero plein écran (cartes plus bas), éléments mis à l'échelle, fondu blanc à gauche
- 2026-11-16 : à propos, titre et boutons agrandis à la hauteur des photos, fondu gauche aligné sur le logo
- 2026-11-16 : à propos, raccord blanc/gris sans couture, cartes en Liquid Glass (réfraction + liseré), photo collée aux cases, animations d'entrée et de survol
- 2026-11-16 : script npm run pinterest (flux RSS du tableau Enzo_Asap/random) pour remplir les inspirations, cases liées aux épingles
- 2026-11-16 : inspirations dans un ordre aléatoire à chaque chargement, doublons retirés, dernière colonne complétée
- 2026-11-16 : crédit du créateur (@) affiché au survol des inspirations, récupéré par npm run pinterest
- 2026-11-16 : crédits des 25 inspirations récupérés (créateurs Pinterest) et liens vers les vraies épingles
- 2026-11-16 : cartes À propos sans liseré blanc ni réfraction SVG, sortie en glissé vers le bas, contenu des cartes de derrière masqué
- 2026-11-16 : cartes À propos, retour de l'ancienne animation (bascule vers l'écran) avec le nouveau style
