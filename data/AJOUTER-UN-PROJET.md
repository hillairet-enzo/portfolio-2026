# Ajouter ou modifier un projet

Le contenu des projets est dans la base SQLite `data/portfolio.db` (structure : `data/schema.sql`).
Le site reste statique : `npm run projets:exporter` (lancé tout seul avant `npm run dev` et `npm run build`)
convertit la base en `src/data/projets.json`, que le site lit.

Prérequis : Node 22.5 ou plus (module `node:sqlite`). Pour éditer la base : « DB Browser for SQLite ».

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
