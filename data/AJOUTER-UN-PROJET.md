# Ajouter ou modifier un projet

Le contenu des projets est dans la base SQLite `data/portfolio.db` (structure : `data/schema.sql`).
Le site reste statique : `npm run projets:exporter` (lancé tout seul avant `npm run dev` et `npm run build`)
convertit la base en `src/data/projets.json`, que le site lit.

Prérequis : Node 22.5 ou plus (module `node:sqlite`).
Pour éditer la base : `npm run admin` (page locale http://127.0.0.1:4500, avec un bouton « Mettre à jour le site »), ou « DB Browser for SQLite ».

## Étapes
1. Ouvrir `data/portfolio.db`.
2. Table `projet` : une ligne. `type` = `web` ou `affiche` (le gabarit change les libellés des onglets), `ordre` = 1 pour être en premier.
3. Tables `role`, `outil`, `lien`, `choix`, `defi` : une ligne par élément, avec `projet_id` et `ordre`.
4. Table `section` : une ligne par bloc de texte, avec l'`onglet` (`contexte`, `role`, `processus`, `choix` ou `resultat`).
   Les paragraphes sont séparés par une ligne vide. Les tables `etape`, `chiffre` et `photo` s'accrochent à une section.
5. Déposer les images dans `public/images/<slug>/` avec le nom prévu dans `photo.fichier`. Tant qu'elles manquent, le site affiche un encart qui dit quoi mettre.
6. `npm run build`, vérifier, puis commit.

## Les quatre onglets de chaque page
| Onglet | Contenu |
|---|---|
| 1. Le projet et ses défis | sections `contexte` + paires de la table `defi` |
| 2. Mon rôle | sections `role` + puces de la table `role` + `projet.equipe` |
| 3. Ma démarche | sections `processus` |
| 4. Les outils et le résultat | table `choix`, sections `choix`, puis `lien` et sections `resultat` |

## Gabarit « affiche »
Même structure, libellés adaptés : « Les choix créatifs et le résultat », « Le rendu final ».
Pour une affiche : `outil` = logiciels, `choix` = typographies, palette, grille, format et support ;
`photo` en `3/4` pour le visuel final et ses déclinaisons.

## Les images (mockups)
`npm run projets:images` liste les images encore manquantes avec leur nom, leur format et ce qu'il faut capturer.
Dépose les fichiers dans `public/images/<slug>/` avec exactement ce nom : ils remplacent les encadrés « Photo à ajouter ».

Les captures d'écran s'affichent automatiquement dans un cadre :
- format 16:9 (ordinateur) : fenêtre de navigateur. Capture en pleine fenêtre, par exemple 1600 × 900 px minimum.
- format 3:4 (mobile) : téléphone. Capture avec la fenêtre étroite (390 px de large) et garde le haut de l'écran, sur un format 3:4 (390 × 520 px, ou plus grand dans les mêmes proportions).
- la photo de couverture n'a pas de cadre.

## Mockups dans « Le résultat »

Une image dont le nom commence par `mockup-` (par exemple `tiktak/mockup-ordinateur.webp`) est affichée en « vitrine » : coins arrondis, sans bord, avec une légende en pastille. La légende est le champ `sujet` de la photo. Mettre deux images au format 4/3 pour qu'elles se placent côte à côte.
