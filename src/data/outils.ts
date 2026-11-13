// Matrice « ce que j'ai utilisé, projet par projet ». Données tirées des dépôts des deux projets.
export const projetsColonnes = [
  { slug: 'tiktak', nom: 'TiK•TaK' },
  { slug: 'thermo-viz', nom: 'ThermoViz' },
];

export const groupesOutils = [
  {
    groupe: 'Interface',
    outils: [
      { nom: 'Astro', projets: ['tiktak', 'thermo-viz'] },
      { nom: 'Tailwind CSS', projets: ['tiktak', 'thermo-viz'] },
      { nom: 'Défilement fluide (Lenis)', projets: ['tiktak', 'thermo-viz'] },
      { nom: 'Modèle 3D (three.js)', projets: ['tiktak'] },
      { nom: 'Graphiques (Observable Plot)', projets: ['thermo-viz'] },
      { nom: 'Accessibilité (ARIA, clavier)', projets: ['thermo-viz'] },
    ],
  },
  {
    groupe: 'Données',
    outils: [
      { nom: 'Base de données SQLite', projets: ['tiktak'] },
      { nom: 'Connexion (Better Auth)', projets: ['tiktak'] },
      { nom: 'Assistant IA (OpenRouter)', projets: ['tiktak'] },
      { nom: 'Préparation de données (script)', projets: ['thermo-viz'] },
    ],
  },
  {
    groupe: 'Mise en ligne',
    outils: [
      { nom: 'Serveur VPS (Apache, systemd)', projets: ['tiktak'] },
      { nom: 'Déploiement automatique (GitHub Actions)', projets: ['tiktak'] },
      { nom: 'Netlify', projets: ['thermo-viz'] },
      { nom: 'Référencement (Open Graph, schema.org)', projets: ['tiktak'] },
    ],
  },
];
