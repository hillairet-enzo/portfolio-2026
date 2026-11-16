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

// Ce que je sais faire, tiré des six projets du portfolio.
export const competences = [
  {
    titre: 'Concevoir',
    items: ['Direction artistique (affiches, interfaces)', 'Maquettes sur Figma', 'Illustration vectorielle (Affinity Designer)', 'Écriture et récit pour le web'],
  },
  {
    titre: 'Développer',
    items: ['Sites en composants (Astro, Tailwind CSS)', 'Bases de données (SQLite, PocketBase)', 'Visualisation de données (Observable Plot)', 'Modèle 3D interactif (three.js)'],
  },
  {
    titre: 'Produire et publier',
    items: ['Tournage, prise de son et montage (DaVinci Resolve)', 'Gestion de projet d’équipe (Jira)', 'Mise en ligne (Netlify, serveur perso)', 'Référencement et accessibilité'],
  },
];

// Ce que je sais faire avec l'IA, d'après la déclaration d'usage (IA.md) et le projet TiK•TaK.
export const skillsIA = [
  {
    titre: 'Piloter',
    items: ['Rédiger des prompts clairs et précis', 'Donner contexte, format et exemples', 'Affiner par retours successifs', 'Garder, corriger ou rejeter'],
  },
  {
    titre: 'Utiliser',
    items: ['Claude, Gemini : le bon modèle selon la tâche', 'Des skills adaptés à chaque tâche', 'Code, maquettes et visuels générés', 'Des assistants IA intégrés à un site'],
  },
  {
    titre: 'Vérifier',
    items: ['Relire et reprendre les textes', 'Contrôler les informations et les sources', 'Mesurer la qualité (Lighthouse)', 'Déclarer chaque usage (IA.md)'],
  },
];

// Les quatre temps d'un projet, tels que je les ai vécus sur TiK•TaK, ThermoViz, Iris et les affiches.
export const demarche = [
  { titre: 'Cadrer', texte: 'Comprendre le sujet et le public.' },
  { titre: 'Concevoir', texte: 'Choisir un style, dessiner, écrire.' },
  { titre: 'Développer', texte: 'Construire les pages et les interactions.' },
  { titre: 'Mettre en ligne', texte: 'Publier, tester, soigner les détails.' },
];

// Mon parcours, du plus récent au plus ancien.
export const parcours = [
  {
    periode: '2026 – aujourd’hui',
    titre: 'BUT MMI, 2e année',
    lieu: 'IUT de Montbéliard',
    texte: 'TiK•TaK (SAE 301, seul), ThermoViz (SAE 303, en binôme) et Iris (R304, en trio).',
  },
  {
    periode: '2025 – 2026',
    titre: 'BUT MMI, 1re année',
    lieu: 'IUT de Montbéliard',
    texte: 'Olyvia (site et vidéos), les affiches du Pays de Montbéliard et le diaporama Art contemporain.',
  },
];
