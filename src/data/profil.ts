// Tes informations personnelles : modifie uniquement ce fichier, tout le site se met à jour.
// Les valeurs marquées « À REMPLIR » sont des exemples : remplace-les avant de mettre en ligne.

export const profil = {
  nom: 'Enzo Hillairet',
  prenom: 'Enzo',
  formation: 'BUT MMI, Montbéliard',
  accroche: 'Je conçois des sites et des interfaces, du premier croquis à la mise en ligne.',
  recherche: 'À la recherche d’un stage en communication et création.',

  email: 'enzoh13600@gmail.com',
  linkedin: 'https://www.linkedin.com/in/enzo-hillairet-630baa367/',
  github: 'https://github.com/hillairet-enzo',
  cv: '/cv-enzo-hillairet.pdf', // À REMPLIR : dépose ton CV dans public/ sous ce nom
  ville: 'Montbéliard', // À REMPLIR si besoin
  hebergeur: 'Infomaniak Network SA, Rue Eugène-Marziano 25, 1227 Les Acacias, Genève, Suisse. Site : infomaniak.com.', // à vérifier avec ton contrat d’hébergement
};

// Ce que tu sais faire, regroupé pour que ce soit lisible d’un coup d’œil.
export const competences = [
  {
    titre: 'Concevoir',
    items: ['Maquettes Figma', 'Design d’interface', 'Direction artistique', 'Rédaction web'],
  },
  {
    titre: 'Développer',
    items: ['Astro', 'HTML, CSS, JavaScript', 'Tailwind CSS', 'SQL et SQLite', 'three.js'],
  },
  {
    titre: 'Mettre en ligne',
    items: ['Netlify', 'Serveur VPS, Apache', 'GitHub Actions', 'Référencement (SEO)'],
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
