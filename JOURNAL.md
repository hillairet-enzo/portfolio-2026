# JOURNAL.md — Journal de bord du portfolio

Projet individuel du semestre 3 (BUT MMI) : concevoir, réaliser et mettre en ligne mon portfolio professionnel sur enzoh.fr.

## Septembre et octobre 2026 : conception

**Ce que j'ai fait**
- Rédigé la note de positionnement : à qui je m'adresse, le message à retenir, ce qui me distingue.
- Réalisé la maquette Figma du portfolio.

**[À COMPLÉTER]** : le détail de ces deux mois, semaine par semaine. Pour chacune : ce que j'ai fait, ce qui a coincé, ce que j'ai décidé. Pense au moodboard, aux deux pistes graphiques écartées et à leurs raisons, et au choix de mes projets.

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
