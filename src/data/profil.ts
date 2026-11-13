// Tes informations personnelles : modifie uniquement ce fichier, tout le site se met à jour.
// Les valeurs marquées « À REMPLIR » sont des exemples : remplace-les avant de mettre en ligne.

export const profil = {
  nom: 'Enzo Hillairet',
  prenom: 'Enzo',
  formation: 'BUT MMI, Montbéliard',
  accroche: 'J’imagine des identités visuelles et je les fais vivre dans des sites interactifs, du premier croquis à la mise en ligne.',
  recherche: 'Je cherche un stage en communication et création, idéalement en studio de création digitale.',

  email: 'contact@enzoh.fr',
  linkedin: 'https://www.linkedin.com/in/enzo-hillairet-630baa367/',
  github: 'https://github.com/hillairet-enzo',
  cv: '/cv-enzo-hillairet.pdf', // À REMPLIR : dépose ton CV dans public/ sous ce nom
  ville: 'Montbéliard', // À REMPLIR si besoin
  hebergeur: 'Infomaniak Network SA, Rue Eugène Marziano 25, 1227 Les Acacias (GE), Suisse. Numéro IDE : CHE-103.167.648. Site : infomaniak.com.',
};

// Ce que tu sais faire, regroupé pour que ce soit lisible d’un coup d’œil.
export const competences = [
  {
    titre: 'Concevoir',
    items: ['Définir une direction artistique', 'Maquetter des interfaces sur Figma', 'Concevoir des parcours clairs', 'Écrire pour le web'],
  },
  {
    titre: 'Développer',
    items: ['Intégrer des pages responsives (HTML, CSS, JS)', 'Construire un site en composants (Astro)', 'Concevoir une base de données (SQLite)', 'Animer un modèle 3D (three.js)'],
  },
  {
    titre: 'Mettre en ligne',
    items: ['Héberger un site (Netlify, VPS Apache)', 'Automatiser la mise en ligne (GitHub Actions)', 'Optimiser le référencement'],
  },
];

// Les quatre temps d'un projet, tels que je les ai vécus sur TiK•TaK et ThermoViz.
export const demarche = [
  { titre: 'Cadrer', texte: 'Comprendre le sujet, le public et ce que le site doit permettre de faire. Poser une question ou une promesse claire.' },
  { titre: 'Concevoir', texte: 'Choisir un style, dessiner les écrans, écrire les textes. Les mots font partie du design.' },
  { titre: 'Développer', texte: 'Construire les pages, la base de données et les interactions, en gardant le code lisible.' },
  { titre: 'Mettre en ligne', texte: 'Publier, tester sur ordinateur et téléphone, soigner le référencement et l’accessibilité.' },
];

// Ton parcours, du plus récent au plus ancien. Ajoute ou retire des lignes librement.
export const parcours = [
  {
    periode: '2025 – aujourd’hui',
    titre: 'BUT Métiers du Multimédia et de l’Internet',
    lieu: 'IUT de Montbéliard',
    texte: 'Création web, design, audiovisuel et communication. Projets en équipe et en solo (SAE).',
  },
  // À REMPLIR : stages, jobs, associations, certifications…
];
