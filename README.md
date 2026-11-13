# Portfolio d'Enzo Hillairet

Site Astro, statique, moderne et épuré. Pas de base de données : tout le contenu est dans trois fichiers.

## Lancer le site

```bash
npm install     # ou : bun install
npm run dev     # http://localhost:4321
npm run build   # génère le dossier dist/ à mettre en ligne
```

## Où modifier quoi

| Je veux changer…                                        | Fichier                  |
| ------------------------------------------------------- | ------------------------ |
| Mon e-mail, LinkedIn, GitHub, CV, accroche, compétences | `src/data/profil.ts`     |
| Les textes et photos d'un projet, ajouter un projet     | `src/data/projets.ts`    |
| Les couleurs, polices, espacements                      | `src/styles/global.css`  |

## Ajouter les photos

Chaque cadre gris « Photo à ajouter » indique ce qu'il faut mettre, le nom exact du fichier et le format.
Dépose l'image à cet endroit dans `public/images/` (par exemple `public/images/tiktak/hero.jpg`) :
le cadre est remplacé par la photo, sans rien d'autre à modifier.

## Ajouter un projet

Dans `src/data/projets.ts`, copie un bloc du tableau `projets`, place-le **en haut** du tableau (les plus récents d'abord), change le `slug`, les textes et les photos.
La carte sur l'accueil, la page `/projets/<slug>`, le pied de page et le lien « Projet suivant » se créent seuls.
## Couleur dominante de chaque page

Chaque page prend la couleur de l'image de son hero, automatiquement (`src/lib/theme.ts`) :

- **Accueil, À propos, Contact** : couleur de `public/images/hero-accueil.jpg`. Remplace cette image et toute la partie « personnelle » du site change de couleur.
- **Page d'un projet** : couleur de la photo de couverture du projet.
- **/projets** : couleur de la couverture du projet le plus récent (le premier de la liste).
- Si une image est absente, une couleur chaude par défaut est utilisée.

L'accueil affiche les `NB_ACCUEIL` premiers projets (3 par défaut, réglable dans le même fichier) et une tuile « Voir tous les projets » ; la page `/projets` les liste tous.

## À remplir avant la mise en ligne

- `email`, `linkedin`, `github`, `cv` dans `src/data/profil.ts` (valeurs d'exemple pour l'instant)
- Ton CV en PDF dans `public/cv-enzo-hillairet.pdf`
- Le parcours (stages, jobs, associations) dans `src/data/profil.ts`

## Pages

Accueil, Projets, une page par projet (`/projets/tiktak`, `/projets/thermo-viz`), À propos, Contact, Mentions légales et une page 404.

## Image du grand hero

Le hero de l'accueil utilise `public/images/hero-accueil.jpg` (2400 × 1350 px conseillé). Remplace ce fichier par ta propre image : le texte reste lisible grâce à un voile sombre à gauche. Les boutons « Mon CV » n'apparaissent qu'une fois `public/cv-enzo-hillairet.pdf` ajouté.
