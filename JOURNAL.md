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
- **20 et 21 octobre** : réalisation de la SAE 303 « ThermoViz » (visualisation de données sur la chaleur en ville) en binôme avec [nom retiré]. Mon rôle : récit et rédaction, intégration, préparation des données, page Méthode et une partie des visualisations. Dates d'après le dépôt du projet.
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

### Lundi 16 novembre 2026

- Mockups ThermoViz refaits comme TiK•TaK : MacBook en main et iPhone Duo, tous deux avec la page d'accueil, et suppression des 3 petites captures mobiles de l'onglet résultat.
- Nouveau projet : Iris (plateforme de vidéo à la demande pour cinéphiles, module R304). Fiche saisie dans la base, vraies captures (accueil, étagères, PocketBase), mockups MacBook et iPhone Duo. Lien du site en ligne à ajouter après le déploiement.
- Nouveau projet : Olyvia (site WordPress et deux vidéos verticales, SAÉ 201-202 et module R210). Fiche saisie, captures Jira, DaVinci et site, mockup MacBook. Mockup téléphone provisoire, à refaire avec une image de la vidéo en bonne qualité.
- projet 5 « Affiches » (campagne Montbéliard), nouveau gabarit affiche avec visionneuse une affiche à la fois.
- Affiches : cartes d'affiches dans l'onglet résultat, couverture simplifiée.
- projet 6 « Art contemporain » (diaporama Canva), visionneuse de diapos ; diapos provisoires en basse définition, à remplacer par les PNG exportés de Canva.
- accueil : cartes « Projet à ajouter » retirées, galerie ajustée à 6 projets.
- accueil, flèches retirées et cartes agrandies (tout tient à l'écran)
- à propos, titre harmonisé avec l'accueil (début gris léger, suite en gras, taille réduite)
- à propos, nouveau titre plus grand, cartes de couleur en verre translucide
- titres tout en noir et en gras (plus de gris), titre À propos remis en grand
- lien du site Iris ajouté (iris-vod.netlify.app), cartes À propos aux couleurs plus vives
- à propos, portrait ajouté
- à propos, patchwork de photos dans le hero (portrait + 3 photos recadrées)
- à propos, petites vignettes du hero prévues pour mes inspirations Pinterest (inspiration-1/2/3.jpg)
- à propos, défilé horizontal de 12 carrés d'inspirations à côté du portrait
- à propos, photo plus fine, le défilé des inspirations bascule en grande mosaïque (bouton retour)
- à propos, défilé d'inspirations plus fluide (3 rangées, vraie mosaïque, inertie, détection automatique des images inspiration-N)
- à propos, hero refait en une seule bande horizontale (texte, portrait, petites cases), défilement natif au trackpad partout dans la section
- à propos, blanc prolongé jusqu'aux cartes (gris seulement derrière elles), 30 cases d'inspiration
- à propos, hero plein écran (cartes plus bas), éléments mis à l'échelle, fondu blanc à gauche
- à propos, titre et boutons agrandis à la hauteur des photos, fondu gauche aligné sur le logo
- à propos, raccord blanc/gris sans couture, cartes en Liquid Glass (réfraction + liseré), photo collée aux cases, animations d'entrée et de survol
- script npm run pinterest (flux RSS du tableau Enzo_Asap/random) pour remplir les inspirations, cases liées aux épingles
- inspirations dans un ordre aléatoire à chaque chargement, doublons retirés, dernière colonne complétée
- crédit du créateur (@) affiché au survol des inspirations, récupéré par npm run pinterest
- crédits des 25 inspirations récupérés (créateurs Pinterest) et liens vers les vraies épingles
- cartes À propos sans liseré blanc ni réfraction SVG, sortie en glissé vers le bas, contenu des cartes de derrière masqué
- cartes À propos, retour de l'ancienne animation (bascule vers l'écran) avec le nouveau style
- mode sombre vérifié sur tout le site ; corrigé : cartes défi/solution, textes secondaires, à propos (fondus, fond des cartes, points), chemins des cadres photo
- clic sur une adresse mail = copie avec pastille « Copié ✓ » ; logo EH retiré (texte « Enzo Hillairet » seul) ; nouveau chargement par lettres.
- page contact, le clic sur l'adresse active le bouton Copier (plus de second avis).
- cartes À propos, plus d'espace en bas ; textes adaptés à la hauteur de la fenêtre.
- cartes À propos plus courtes, « Défiler » sous la carte et non plus dessus.
- textes des cartes À propos refaits à partir des 6 projets (en bref, démarche, compétences, parcours).
- carte « Au quotidien » remplacée par « Skills IA » (piloter, intégrer, vérifier), d'après IA.md.
- Skills IA, Claude et Gemini cités, polyvalence dans le choix des modèles.
- Skills IA avec icônes, sans nommer de projet, prompts et skills adaptés.
- Skills IA, icônes retirées des lignes, pastilles d'application Claude et Gemini (logos à déposer dans public/images/ia).
- vrais logos Claude et Gemini dans les pastilles de la carte Skills IA.
- carte En bref refaite (accroche + 3 chiffres, sans cadre photo vide) ; pastilles de logos retirées de Skills IA.
- carte En bref remplacée par une courte présentation (accroche, paragraphe, encadré stage).
- En bref reformulé, encart photo à droite, phrase stage sans mise en avant.
- carte Démarche simplifiée (quatre étapes, une phrase courte chacune).
- cartes Compétences, Skills IA et Parcours simplifiées (phrases courtes).
- Compétences, rangée de logiciels (Figma, Affinity, DaVinci, Astro, Tailwind, JavaScript) ; autres logos à déposer dans public/images/logiciels.
- Compétences, rangée de logos retirée ; logiciels listés dans chaque rubrique.
- nouvelles covers (Olyvia, Iris, Affiches, Art contemporain) : fond de couleur, titre et visuel.
- nouvelles covers TiK•TaK et ThermoViz, même style (fond de couleur, titre, visuels du site).
- covers refaites en 4/3 (plus de rognage sur les pages projet), TiK•TaK en couverture-carte.webp.
- barres de couleur (progression, pied de page) en verre liquide ; ombres de la galerie d'accueil plus douces, en plusieurs couches.
- barres de progression et de pied de page sur toute la largeur de la page.
- nettoyage du dossier (fichiers inutilisés supprimés), âge centralisé dans profil.ts, IA.md complété (prompts, skills, covers).
- chargement en défilement de lettres (type tableau d'affichage) à la place de la barre ; titres de projet longs passés à la ligne (Art contemporain n'est plus coupé).
- chargement plus lent, lettres noires, lettres plus hautes (plus de coupe), départ une fois la police chargée.
- chargement en afficheur à lettres (chaque case change de lettre d'un coup puis se fixe), plus de morceaux de lettres.
- chargement un peu plus rapide, cases de lettres plus larges (le o n'est plus rogné).
- audit (aucune erreur console, aucun lien cassé), correction ARIA du bouton de thème et des contrastes des légendes ; mentions légales complétées (droits des tiers, IA, RGPD, cookies, stockage local).

### Mardi 17 novembre 2026

- chargement : lettres de passage en noir, plus de superposition (cases à la largeur de la plus large lettre), un peu plus rapide.
- chargement avec la même disposition que la page Contact (nom au centre, adresse et pastille, ligne du bas) ; barre de progression à bords carrés.
- chargement (nom centré, bas = ville · mail · ©) et effet de lettres sur tous les titres.
- effet de lettres retiré des titres, appliqué à tous les éléments du chargement (nom, ville, mail, ©).
- nettoyage du code (composants et page inutilisés, ~1800 lignes de CSS mortes).
- coéquipiers non nommés (ThermoViz : « en binôme » seulement) ; conservation des mails 3 ans et mention « fictif » TiK•TaK confirmées.
- licences des mockups vérifiées (Pixeden et Mockup Cloud : usage perso/commercial autorisé, sans obligation de crédit) ; crédits ajoutés aux mentions légales.
- œuvres des diapos Art contemporain créditées (alt + mentions légales).
- œuvre manga/anime affichée dans la légende des diapos (page Art contemporain).
- texte des mentions légales étendu jusqu'à la marge droite.
- image de partage (og:image) et données structurées Person ; dépendance Hairline inutilisée retirée ; points de la pile À propos agrandis à 24 px de zone cliquable (accessibilité 96 → 100).
- Relu les consignes du projet et comparé le site et les documents : README, QUALITE, IA et POSITIONNEMENT mis à jour ; Behance choisi comme deuxième réseau.

**Ce qui a coincé** : l'écran de chargement a demandé beaucoup d'essais (morceaux de lettres, superpositions, lettres coupées) avant d'avoir un rendu propre.
**Ce que j'ai décidé** : garder les six projets en études de cas, ne pas nommer mes coéquipiers, retirer l'effet de lettres des titres pour le garder sur le chargement seulement.

## Choix des réseaux professionnels (consigne 2.4)

J'ai choisi **LinkedIn** parce que je cherche un stage en communication et création : c'est là que les recruteurs et les studios repèrent les profils, et mon profil reprend le message du portfolio.
J'ai choisi **Behance** comme deuxième réseau parce que je vise des studios de création digitale : c'est la vitrine que les directeurs artistiques consultent pour juger un travail visuel.
Je prévois de l'alimenter avec mes projets les plus graphiques (affiches, covers, interfaces) en grandes images, et d'y faire des posts réguliers : cela complètera les études de cas plus rédigées du portfolio.
Les deux comptes utiliseront mon nom complet, la même photo et la même accroche, et renverront vers enzoh.fr.
Mon code reste visible sur GitHub (dépôt public du portfolio), demandé par la consigne, mais ce n'est pas le réseau que je mets en avant pour un profil communication.

## À faire (suite du projet)

- Ajouter la photo « travail », le vrai CV en PDF et remplacer les images d'inspiration Pinterest (crédits à revérifier).
- Alimenter Behance (projets graphiques, posts réguliers) et mettre à jour LinkedIn avec le lien du portfolio.
- Mettre le site en ligne sur enzoh.fr (hébergement Infomaniak, HTTPS) et refaire les mesures sur le site en ligne.
- Test manuel : clavier, lecteur d'écran, zoom 200 %, téléphone.
- Réviser le code à présenter et préparer la soutenance finale.
- 2026-11-17 : fichier .htaccess (page 404, cache, compression) ; site compilé en zip pour la mise en ligne chez Infomaniak.
- 2026-11-17 : images recompressées (11 → 6,8 Mo) pour tenir dans l'hébergement Starter d'Infomaniak (10 Mo) ; site compilé : 8 Mo.
- 2026-11-17 : l'hébergement Starter d'Infomaniak refuse l'envoi des fichiers ; décision : héberger sur le VPS de la formation (Apache, comme en TP) à l'adresse portfolio.enzoh.fr. Le site est statique : Apache sert directement dist/, sans serveur Node.
- 2026-11-17 : site en ligne sur https://portfolio.enzoh.fr : enregistrement DNS A chez Infomaniak vers le VPS, clone du dépôt et build avec Bun sur le serveur, VirtualHost Apache dédié (portfolio.conf, redirection HTTP → HTTPS), certificat Let's Encrypt avec certbot. Le site étant statique, Apache sert directement dist/ (pas de serveur Node ni de reverse proxy, contrairement au TP en SSR).
- 2026-11-17 : cartes de l'accueil : « Projet universitaire · année » à la place du code de module ; section contact dans un panneau sombre distinct (liseré arc-en-ciel) ; onglets des pages projet : l'onglet ouvert se place sous l'en-tête, sans saut de page ; mode sombre : menu mobile opaque et bouton Menu sans rectangle gris.
- 2026-11-17 : Art contemporain indiqué comme projet personnel ; bouton du notebook Observable retiré de ThermoViz ; section contact sans liseré, panneau gris clair en mode clair ; schéma des affiches en version sombre ; galerie d'accueil en mode sombre avec sol éclairé, reflet et ombres visibles.
- 2026-11-17 : mode sombre, titre de l'accueil « Curieux de voir ce que j'ai créé ? » passé en blanc (il était noir sur noir).
- 2026-11-17 : mise en ligne automatique avec GitHub Actions (.github/workflows/deploy.yml) : à chaque push, connexion SSH au VPS, git pull et build.
- 2026-11-17 : référencement : titre de l'accueil commençant par mon nom, descriptions des projets raccourcies (≤ 155 caractères), image de partage propre à chaque projet, données structurées (Person, WebSite, CreativeWork), 404 en noindex, plan du site aligné sur les adresses canoniques avec date de mise à jour.
- 2026-11-17 : fichier de validation Google Search Console ajouté (public/google43e9fe2dcda5c1e9.html).
- 2026-11-17 : lien Behance (behance.net/enzohillairet) ajouté dans la section et la page contact, le pied de page, le menu mobile, les données structurées pour Google, les mentions légales et le README.
- 2026-11-18 : CV en cours de refonte : tous les boutons « CV » (en-tête, accueil, à propos, contact, pied de page) affichent un message « CV en construction » au lieu de télécharger le PDF. Pied de page rendu plus compact, avec « Mentions légales » alignées sur la colonne « Me retrouver ».
- 2026-11-18 : page À propos : fond uni derrière la section « Un stage, un projet… » (suppression des lueurs colorées de la pile de cartes qui passaient derrière).
- 2026-11-18 : mode sombre supprimé (bouton retiré de l'en-tête et du menu, site uniquement en clair) ; page À propos : fond #f8f8f8 derrière la section « Un stage, un projet… », comme l'accueil ; mentions légales en onglets dépliables, comme les pages projet ; accueil en version liste : descriptions et technologies retirées (titre, nature et année seulement).
- 2026-11-18 : message « CV en construction » / « Adresse copiée » : carte blanche pleine (fond, bordure, ombre) au lieu d'un texte posé directement sur la page, qui se superposait au pied de page et se lisait mal.
