# Journal de bord – Portfolio

Ce journal raconte l'avancée de mon portfolio, semaine par semaine : ce que j'ai fait, ce qui a coincé et ce que j'ai changé en cours de route. Projet individuel du semestre 3 (BUT MMI), en ligne sur https://portfolio.enzoh.fr.

## Septembre et octobre 2026 : conception

### Positionnement

- J'ai rédigé ma note de positionnement (`POSITIONNEMENT.md`). Ma cible : les studios de création digitale, avec un profil volontairement polyvalent.
- Le message : un profil multimédia complet, capable d'imaginer une identité visuelle forte et de la décliner en une expérience web fluide. La navigation doit le prouver dès les 30 premières secondes.

### Pistes écartées

- J'ai exploré deux directions graphiques, puis j'ai écarté les deux.
- Le minimalisme : trop générique, les studios en reçoivent beaucoup, et il limitait mon univers.
- Le style « corporate » : sans âme pour un profil créatif, il écrasait mon identité.

### Maquette Figma

- J'ai construit la maquette Figma, desktop et mobile : accueil, menu, projets et affiches, avec un guide de style, un moodboard et un dossier.
- Direction artistique : un ciel bleu et de l'herbe, des panneaux en verre translucide, un avatar 3D de moi et un menu façon interface de jeu vidéo.
- J'ai défendu cette maquette lors de la soutenance.

### Remarques des enseignants

- L'accueil ne présente pas assez d'informations ni de profil clair.
- Mon nom n'apparaît que sur l'accueil et dans le pied de page.
- L'image de fond est la même sur toutes les pages.
- Les contenus sont trop souvent enfermés dans des blocs.
- Il manque un logo ou un monogramme.
- Il faut parler de compétences plutôt que de technologies, ajouter des détails dans les fiches projet, faire attention à l'adresse e-mail et à la densité de l'information.
- L'avatar 3D reste intéressant, mais je l'ai abandonné : il appartenait à l'univers de jeu vidéo de la maquette.

## Vacances de la Toussaint 2026 : début du code

- J'ai commencé à coder le portfolio avec Astro, à partir de ma maquette.
- Les 20 et 21 octobre, j'ai réalisé la SAE 303 « ThermoViz », une visualisation de données sur la chaleur en ville, en binôme. Mon rôle : le récit, la rédaction, l'intégration, la préparation des données, la page Méthode et une partie des visualisations.
- Le rendu de cette première version ne me plaisait pas : police (Bricolage Grotesque), couleur jaune dominante, animations et textes.
- J'ai décidé de refaire le design, les animations et le code, en gardant le fond : les projets et les consignes de l'école.

## Semaine du 2 au 8 novembre 2026

- Du 2 au 5 novembre, j'ai réalisé seul la SAE 301 « TiK•TaK », un configurateur de montres personnalisées (Astro, Bun, SQLite) : direction artistique, interface, développement, base de données et mise en ligne.
- J'ai décidé de présenter en priorité TiK•TaK et ThermoViz, mes deux projets les plus aboutis, comme études de cas.

## Semaine du 9 au 15 novembre 2026

### Nouveau design

- Je suis reparti sur une nouvelle direction : noir et blanc, police Inter, effet « verre » inspiré d'Apple, quelques rappels de couleur arc-en-ciel.
- J'ai supprimé la page « Inspirations » et la landing page : l'accueil est directement la galerie des projets, en arc, avec une vue liste.
- J'ai construit les pages : accueil, À propos avec des cartes qui s'empilent, page projet avec des onglets, Contact avec une adresse à copier, mentions légales et page 404.
- J'ai ajouté un écran de chargement.

### Réponses aux remarques des enseignants

- Un profil clair sur l'accueil : mon nom, ma formation, ce que je fais et ce que je cherche.
- Mon nom dans l'en-tête de toutes les pages, et chaque page a sa propre structure au lieu d'un décor commun.
- Les compétences sont écrites en savoir-faire, avec les outils entre parenthèses.
- Une adresse professionnelle sur mon domaine, créée chez Infomaniak : contact@enzoh.fr.
- J'ai mis à jour la note de positionnement.

### Dépôt et qualité

- J'ai créé le dépôt Git et le dépôt GitHub public le 13 novembre. L'historique ne montre donc pas les semaines d'avant.
- J'ai écrit les mentions légales avec l'hébergeur Infomaniak, dont j'ai vérifié l'adresse sur leur site.
- J'ai ajouté `sitemap.xml` et `robots.txt`, converti des images en WebP et mesuré le site avec Lighthouse.
- Un contraste trop faible sur les mentions légales a été corrigé.
- J'ai rédigé `IA.md`, `JOURNAL.md` et `QUALITE.md`.

### Pages projets

- Les pages projet ont maintenant quatre onglets : le projet et ses défis, mon rôle, ma démarche, les outils et le résultat.
- Les projets sont dans une base SQLite (`data/portfolio.db`), exportée en JSON avant chaque build. Le site reste statique, et ajouter un projet est plus simple.
- Les captures s'affichent dans une fenêtre de navigateur ou un téléphone, et un clic les ouvre en grand.
- J'ai refait les textes de TiK•TaK et ThermoViz en phrases courtes, avec de vraies captures et des mockups (MacBook et iPhone).

## Semaine du 16 au 22 novembre 2026

### Nouveaux projets

- J'ai ajouté Iris, une plateforme de vidéo à la demande pour cinéphiles, avec ses captures et son lien en ligne.
- J'ai ajouté Olyvia, un site WordPress et deux vidéos verticales.
- J'ai ajouté une série d'affiches pour Montbéliard et un diaporama d'art contemporain, tous deux avec une visionneuse.
- J'ai refait les covers de tous les projets au même style, en 4/3 pour qu'elles ne soient plus rognées.
- L'accueil montre maintenant six projets, avec des cartes plus grandes et sans flèches.

### Page À propos

- J'ai mis un portrait et une bande horizontale d'inspirations à côté du titre.
- J'ai refait les textes des cartes à partir de mes six projets : en bref, démarche, compétences, Skills IA et parcours.
- Les cartes ont un style en verre translucide et s'empilent au défilement.
- J'ai ajouté une photo de moi au travail dans la carte verte « En bref ».
- J'ai réglé le fond derrière la section « Un stage, un projet, une question ? » : le même gris clair que l'accueil, sans lueurs colorées.

### Galerie Pinterest

- Ma galerie d'inspirations vient de mon tableau Pinterest « portfolio ».
- La première version importait mal le tableau : mauvaises images, doublons, clics qui ne marchaient pas.
- J'ai tout refait de zéro, en version simple : une liste fixe de 24 images dans `src/data/galerie.json`.
- Au survol d'une image, le nom de l'artiste s'affiche, et un clic ouvre l'épingle sur Pinterest.
- J'ai retiré la grande photo verticale de la fin de la bande.

### Écran de chargement

- Il a demandé beaucoup d'essais : morceaux de lettres, superpositions, lettres coupées, effet trop brutal.
- J'ai gardé un afficheur à lettres sur mon nom, ma ville, mon adresse et l'année, plus lent et plus lisible.
- J'ai essayé l'effet de lettres sur tous les titres, puis je l'ai retiré : je le garde seulement pour le chargement.

### Mise en ligne

- Le 17 novembre, l'hébergement Starter d'Infomaniak a refusé l'envoi des fichiers. J'ai donc mis le site sur le VPS de la formation (Apache), à l'adresse portfolio.enzoh.fr, avec un certificat Let's Encrypt.
- Le site est statique : Apache sert directement le dossier `dist/`.
- À chaque push, GitHub Actions met le site à jour sur le VPS.
- J'ai amélioré le référencement : titres, descriptions, image de partage, données structurées, et validation dans Google Search Console.
- J'ai ajouté Behance comme deuxième réseau professionnel.

### Corrections et finitions

- J'ai supprimé le mode sombre : je n'aimais pas le contraste en noir.
- J'ai mis les mentions légales en onglets dépliables, comme les pages projet, et aligné « Mentions légales » sur la colonne « Me retrouver » du pied de page, que j'ai rendu plus compact.
- J'ai retiré les descriptions et les technologies de la vue liste de l'accueil.
- Le bouton CV affiche « CV en construction », parce que je refais mon CV. Le message est une carte blanche, lisible sur le pied de page.
- J'ai vérifié les licences des mockups et crédité les œuvres citées. Mes coéquipiers ne sont pas nommés.
- J'ai nettoyé le code : composants inutilisés et environ 1 800 lignes de CSS mortes retirées.
- J'ai refait ma maquette Figma pour qu'elle suive le site : accueil, cartes de la page À propos, photo et galerie, mentions légales en onglets.
- J'ai relu les consignes du projet et mis à jour `README.md`, `QUALITE.md`, `IA.md` et `POSITIONNEMENT.md`. `IA.md` dit honnêtement comment j'ai utilisé Claude.

## Choix des réseaux professionnels

- **LinkedIn** : je cherche un stage en communication et création, et c'est là que les recruteurs et les studios repèrent les profils.
- **Behance** : je vise les studios de création digitale, et les directeurs artistiques y jugent un travail visuel. Je veux l'alimenter avec mes projets les plus graphiques (affiches, covers, interfaces) et y faire des posts réguliers.
- Les deux comptes utilisent mon nom complet, la même photo et la même accroche, et renvoient vers le portfolio.
- Mon code reste visible sur GitHub, comme le demande la consigne, mais ce n'est pas le réseau que je mets en avant.

## Ce qu'il me reste à faire

- Déposer mon vrai CV en PDF, puis réactiver le bouton de téléchargement.
- Alimenter Behance et publier les posts LinkedIn et Behance (ce weekend).
- Continuer ma recherche de stage en communication et création.
- Refaire les mesures Lighthouse sur le site en ligne.
- Tester le site au clavier, avec un lecteur d'écran, en zoom 200 % et sur téléphone.
- Réviser le code à présenter et préparer la soutenance finale.
- 2026-11-18 — À propos : images de la galerie ramenées à 480 px et photo « travail » à 1 000 px (page 1 891 → 1 201 Ko) ; QUALITE.md refait avec de nouvelles mesures Lighthouse.
- 2026-11-18 — README.md raccourci (84 → 53 lignes) : niveau technique, technologies, lancement, où modifier quoi, mise en ligne.
- 2026-11-18 — Toutes les images du site converties en WebP (64 JPG → WebP, 5,8 → 3,9 Mo) ; `og.png` reste en PNG pour le partage sur les réseaux, le favicon en SVG.
- 2026-11-18 — Mesures Lighthouse refaites après le passage en WebP : 99 à 100 partout, page À propos 1 201 → 908 Ko ; QUALITE.md mis à jour.
- 2026-11-21 — Retours de la soutenance (15/20) : j'ai cherché un secret ou un fichier sensible dans le dépôt et tout son historique, sans en trouver ; la clé SSH du déploiement est dans les « secrets » GitHub. Le `.gitignore` refuse maintenant les fichiers `.env`, les clés et les fichiers temporaires de la base.
- 2026-11-21 — Les cartes de couleur de la page À propos viennent maintenant de la base (tables `carte`, `carte_bloc`, `carte_item`) au lieu d'être écrites dans le code : c'est le côté « dynamique » demandé.
- 2026-11-21 — Back-office local (`npm run admin`) : une page pour ajouter, modifier et supprimer les lignes de la base, avec un bouton « Mettre à jour le site ». Il n'écoute que sur mon ordinateur et n'est pas mis en ligne.
- 2026-11-21 — Page À propos plus légère : portrait 264 → 85 Ko, photo « travail » 65 → 28 Ko, deux inspirations allégées, 4 images chargées d'emblée au lieu de 9.
