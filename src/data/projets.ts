// Contenu des projets. Pour ajouter un projet : copie un bloc, change le `slug`, les textes
// et les photos. La page et la carte de l’accueil se créent toutes seules.
//
// Chaque photo est un « encart » : tant que le fichier n’existe pas dans public/images/,
// le site affiche un cadre qui explique quoi mettre. Dès que tu déposes le fichier
// avec le bon nom, la photo remplace le cadre.

export type Format = '21/9' | '16/9' | '3/2' | '4/3' | '1/1' | '3/4';

export interface Photo {
  fichier: string; // chemin dans public/images/
  alt: string; // description pour les lecteurs d’écran
  sujet: string; // ce qu’il faut mettre comme photo
  format: Format;
  taille: string; // taille conseillée
}

export type Schema = 'architecture' | 'base' | 'pipeline' | 'chaleur';

// Chaque projet est raconté en quatre blocs, toujours dans le même ordre :
// L’objectif, Processus créatif, Choix techniques, Le résultat. Chaque section appartient à l’un d’eux (`phase`).
export type Phase = 'objectif' | 'processus' | 'choix' | 'resultat';

export interface Choix {
  nom: string; // l’outil
  raison: string; // à quoi il a servi, en une phrase
}

export interface Section {
  phase: Phase;
  titre: string; // repère pour toi : il n’est pas affiché sur la page
  paragraphes: string[];
  flux?: { etiquette: string; etapes: { titre: string; texte: string }[] }; // étapes reliées
  schemas?: Schema[]; // schémas dessinés en code, affichés après le texte
  photos?: Photo[]; // 1 photo = pleine largeur, 2 ou 3 = côte à côte
  visuel?: Visuel; // illustration animée dessinée en code (voir src/components/pj)
  chiffres?: { valeur: number; suffixe?: string; label: string }[]; // chiffres clés qui défilent
}

// « montre » et « chat » s’affichent à côté du texte ; les autres en pleine largeur.
export type Visuel = 'montre' | 'configurateur' | 'chat' | 'telephones';

export interface Projet {
  slug: string;
  titre: string;
  accroche: string;
  resume: string;
  annee: string;
  cadre: string;
  equipe: string;
  role: string[];
  outils: string[];
  choix: Choix[]; // les outils mis en avant dans « Choix techniques »
  liens: { label: string; url: string }[];
  couverture: Photo; // image de la carte sur l’accueil
  sections: Section[];
}

export const projets: Projet[] = [
  {
    slug: 'tiktak',
    titre: 'TiK•TaK',
    accroche: 'Composer sa montre de course pièce par pièce, et la voir tourner en 3D.',
    resume:
      'Un site de vente de montres de trail à composer soi-même : forme, bracelet, boîtier, cadran. Un assistant IA propose une montre à partir d’une phrase. Conçu, développé et mis en ligne seul.',
    annee: 'Novembre 2026',
    cadre: 'SAE 301, BUT MMI',
    equipe: 'Projet individuel',
    role: ['Direction artistique', 'Design de l’interface', 'Développement', 'Base de données', 'Mise en ligne'],
    outils: ['Astro', 'Bun', 'Tailwind CSS 4', 'DaisyUI 5', 'SQLite', 'Better Auth', 'three.js', 'OpenRouter'],
    choix: [
      { nom: 'Astro', raison: 'Les pages du site, avec titres, balises Open Graph, URL canonique et sitemap générés pour chacune.' },
      { nom: 'Bun', raison: 'Fait tourner l’application côté serveur.' },
      { nom: 'SQLite', raison: 'La base de six tables, créée toute seule au premier lancement à partir de deux fichiers SQL.' },
      { nom: 'Better Auth', raison: 'La connexion par e-mail et mot de passe, ou avec un compte Google.' },
      { nom: 'three.js', raison: 'Le modèle 3D de la montre, qu’on fait tourner à la souris.' },
      { nom: 'OpenRouter', raison: 'L’assistant qui compose une montre à partir d’une phrase, avec un modèle gratuit.' },
    ],
    liens: [{ label: 'Voir le site en ligne', url: 'https://tiktak.enzoh.fr' }],
    couverture: {
      fichier: 'tiktak/couverture.jpg',
      alt: 'Cinq montres TiK•TaK, carrées et rondes, de couleurs différentes, posées sur un rocher',
      sujet:
        'Les cinq montres alignées sur le rocher (bleu, jaune, noir, orange, vert). C’est le fichier hero-montres.jpg de ton projet TiK•TaK, dans public/images.',
      format: '3/2',
      taille: '2400 × 1600 px',
    },
    sections: [
      {
        phase: 'objectif',
        titre: 'Le point de départ',
        paragraphes: [
          'La SAE 301 demandait un site dynamique relié à une base de données. J’ai choisi un produit qui se compose naturellement par pièces : une montre de course.',
          'Les montres de sport se ressemblent presque toutes, alors que chaque coureur a son terrain, son rythme et ses couleurs. TiK•TaK part de l’idée inverse : celle que vous portez, c’est vous qui l’avez imaginée. La marque est fictive, mais le parcours d’achat est complet, de l’aperçu à la commande.',
        ],
        photos: [
          {
            fichier: 'tiktak/accueil.jpg',
            alt: 'La page d’accueil du site TiK•TaK',
            sujet: 'Capture de la page d’accueil de TiK•TaK (hero avec les montres), en plein écran sur ordinateur.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
        ],
      },
      {
        phase: 'processus',
        titre: 'Composer sa montre',
        flux: {
          etiquette: 'Parcours d’achat sur TiK•TaK',
          etapes: [
            { titre: 'Choisir la forme', texte: 'Carrée ou ronde.' },
            { titre: 'Composer', texte: 'Bracelet, deux boîtiers et cadran, chacun avec sa matière et sa couleur.' },
            { titre: 'Voir le résultat', texte: 'Aperçu en direct, en 2D puis en 3D.' },
            { titre: 'Enregistrer', texte: 'La montre rejoint « Mes montres ».' },
            { titre: 'Commander', texte: 'Quantité, livraison à 10 € et historique.' },
          ],
        },
        paragraphes: [
          'On commence par la forme, carrée ou ronde. On choisit ensuite le bracelet, le boîtier extérieur, le boîtier intérieur et le cadran, chacun avec sa matière et sa couleur. Le prix se met à jour à chaque choix.',
          'L’aperçu change en direct. En 2D, c’est un SVG que je génère à partir des choix ; en 3D, c’est un modèle three.js qu’on fait tourner à la souris. Le SVG de chaque montre est enregistré en base, ce qui permet de la retrouver à l’identique dans « Mes montres ».',
        ],
        photos: [
          {
            fichier: 'tiktak/configurateur.jpg',
            alt: 'Le configurateur TiK•TaK avec une montre carrée et le panneau de choix des pièces',
            sujet:
              'Capture du configurateur (page /configurateur) : la montre carrée à bracelet gris pierre au centre, le panneau des pièces à côté (bracelet, boîtier, cadran) et le prix en bas.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
          {
            fichier: 'tiktak/modele-3d.jpg',
            alt: 'Le modèle 3D de la montre dans le configurateur',
            sujet:
              'Capture du modèle 3D de la montre ronde orange, légèrement tournée, sur fond clair. Zoomer pour que la montre remplisse l’image.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
        ],
      },
      {
        phase: 'processus',
        titre: 'Décrire sa montre à l’IA',
        paragraphes: [
          'Pour ceux qui ne veulent pas tout choisir, un assistant compose la montre à partir d’une phrase en français, par exemple « une montre orange pour le trail, ronde ». Il passe par OpenRouter, avec un modèle gratuit.',
          'La conversation continue ensuite : on peut lui demander de changer le bracelet ou le cadran, puis ajuster à la main chaque pièce. L’IA propose, l’utilisateur garde la main.',
        ],
        photos: [
          {
            fichier: 'tiktak/assistant-ia.jpg',
            alt: 'Conversation avec l’assistant IA qui compose une montre orange',
            sujet:
              'Capture de l’assistant IA : ta phrase « Une montre orange pour le trail, ronde », la réponse de l’assistant et la montre orange obtenue à côté.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
        ],
      },
      {
        phase: 'choix',
        titre: 'Sous le capot',
        paragraphes: [
          'La base SQLite compte six tables : utilisateur, composant, montre, commande, composer et contenir. Elle se crée toute seule au premier lancement à partir de deux fichiers SQL, et j’ai écrit les 17 requêtes du sujet. Le rendu back-end (modèle conceptuel et physique des données) est dans un PDF du dépôt.',
          'La connexion se fait par e-mail et mot de passe ou avec un compte Google, grâce à Better Auth. Chaque personne retrouve ses montres, ses commandes et leurs compteurs dans la navigation.',
          'Le site tourne sur un serveur VPS : un service systemd lance l’application, Apache sert de relais en HTTPS, et une action GitHub la redéploie à chaque envoi de code. Chaque page a son titre, sa description, ses balises Open Graph, une URL canonique et des données structurées schema.org, avec un sitemap généré automatiquement.',
        ],
        schemas: ['architecture', 'base'],
      },
      {
        phase: 'resultat',
        titre: 'Sur téléphone',
        paragraphes: [
          'Le site est pensé d’abord pour des gestes simples : choisir une pièce, voir la montre changer, commander. Le configurateur, « Mes montres » et les commandes s’adaptent à l’écran d’un téléphone.',
        ],
        photos: [
          {
            fichier: 'tiktak/mobile-1.jpg',
            alt: 'Le configurateur TiK•TaK sur téléphone',
            sujet: 'Capture du configurateur sur téléphone (390 px de large), montre visible en haut.',
            format: '3/4',
            taille: '1500 × 2000 px',
          },
          {
            fichier: 'tiktak/mobile-2.jpg',
            alt: 'La page Mes montres sur téléphone',
            sujet: 'Capture de la page « Mes montres » sur téléphone avec au moins trois montres enregistrées.',
            format: '3/4',
            taille: '1500 × 2000 px',
          },
          {
            fichier: 'tiktak/mobile-3.jpg',
            alt: 'La page de commande sur téléphone',
            sujet: 'Capture de la commande sur téléphone : quantité, frais de livraison de 10 € et total.',
            format: '3/4',
            taille: '1500 × 2000 px',
          },
        ],
      },
    ],
  },

  {
    slug: 'thermo-viz',
    titre: 'ThermoViz',
    accroche: 'Les plus pauvres vivent-ils aux endroits les plus chauds de Bordeaux ?',
    resume:
      'Un site de data-visualisation qui croise la chaleur du sol, mesurée par satellite, et la pauvreté des ménages de la métropole de Bordeaux. Cinq visualisations, une conclusion et une page Méthode pour tout vérifier.',
    annee: 'Octobre 2026',
    cadre: 'SAE 303, BUT MMI',
    equipe: 'En binôme avec Matthis Carnicer',
    role: ['Récit et rédaction', 'Intégration', 'Préparation des données', 'Page Méthode', 'Visualisations (en partie)'],
    outils: ['Astro', 'Tailwind CSS 4', 'Observable Plot', 'Lenis', 'Netlify', 'Observable'],
    choix: [
      { nom: 'Astro', raison: 'Les pages du site et le parcours en quatre temps.' },
      { nom: 'Observable Plot', raison: 'Les cinq visualisations interactives.' },
      { nom: 'Observable', raison: 'Le notebook qui permet de refaire tous les calculs.' },
      { nom: 'Lenis', raison: 'Le défilement fluide de toute la page.' },
      { nom: 'Tailwind CSS 4', raison: 'Le style de l’interface, avec son effet de verre dépoli.' },
      { nom: 'Netlify', raison: 'La mise en ligne du site, à chaque nouvelle version.' },
    ],
    liens: [
      { label: 'Voir le site en ligne', url: 'https://thermo-viz.netlify.app' },
      { label: 'Ouvrir le notebook Observable', url: 'https://observablehq.com/@mmi-montbeliard/sae-303-gr-13' },
    ],
    couverture: {
      fichier: 'thermo-viz/couverture.webp',
      alt: 'Les toits de Bordeaux et la flèche d’une église sous un ciel d’été',
      sujet:
        'La photo des toits de Bordeaux avec la flèche gothique, celle du haut de ton site. C’est le fichier hero.webp du projet SAE 303, dans public/images : convertis-le en JPG.',
      format: '3/2',
      taille: '2400 × 1600 px',
    },
    sections: [
      {
        phase: 'objectif',
        titre: 'La question',
        paragraphes: [
          'Le 17 juin 2022, un satellite a mesuré la température du sol dans toute la métropole de Bordeaux. Nous avons découpé le territoire en zones de 200 m sur 200 m, puis croisé ces mesures avec les données de l’Insee sur les ménages et leurs revenus.',
          'La question tient en une phrase : les ménages pauvres de Bordeaux vivent-ils dans les zones les plus chaudes ? Elle est affichée en grand dès l’arrivée, et tout le site sert à y répondre honnêtement.',
        ],
      },
      {
        phase: 'processus',
        titre: 'Un récit plutôt qu’un tableau de bord',
        flux: {
          etiquette: 'Les cinq visualisations de ThermoViz',
          etapes: [
            { titre: 'La carte', texte: 'Où fait-il le plus chaud ?' },
            { titre: 'La chaleur', texte: 'Combien d’habitants vivent à 40 °C ?' },
            { titre: 'Les écarts', texte: 'Les plus pauvres ont-ils plus chaud ?' },
            { titre: 'Le seuil', texte: 'Et si je choisis la température ?' },
            { titre: 'Ma commune', texte: 'Et chez moi, il fait chaud ?' },
          ],
        },
        paragraphes: [
          'Au lieu d’aligner des graphiques, nous avons construit un parcours en quatre temps : le contexte, l’exploration, la réponse, puis la conclusion. Le contexte rappelle trois choses avant de regarder les chiffres : on parle de la température du sol et pas de l’air, pourquoi la pauvreté compte face à la chaleur, et comment lire les graphiques.',
          'Les cinq visualisations vont du plus large au plus proche. La carte montre où il fait le plus chaud, puis on découvre que plus de la moitié des ménages vivent à 40 °C ou plus, on compare les ménages pauvres aux autres, on choisit soi-même le seuil de chaleur, et on finit par sa propre commune.',
        ],
        photos: [
          {
            fichier: 'thermo-viz/carte.jpg',
            alt: 'La carte des zones de chaleur de la métropole de Bordeaux',
            sujet:
              'Capture de la première visualisation, « La carte » : la carte de la métropole avec les zones colorées, le titre « Les zones les plus chaudes forment un bloc autour du centre » visible au-dessus.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
          {
            fichier: 'thermo-viz/comparaison.jpg',
            alt: 'Graphique comparant la part de ménages pauvres et des autres ménages selon la chaleur',
            sujet:
              'Capture de la visualisation « Les écarts » : le graphique qui compare ménages pauvres et autres ménages, avec son titre « Oui, les ménages pauvres vivent un peu plus souvent dans les zones chaudes ».',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
        ],
      },
      {
        phase: 'processus',
        titre: 'Et chez moi ?',
        paragraphes: [
          'Le visiteur peut choisir sa commune dès l’accueil, et la dernière visualisation s’ouvre directement sur elle. Ce détail change le rapport au sujet : on ne lit plus des chiffres sur Bordeaux, on regarde où se place sa propre ville.',
          'Le menu de choix est un composant que j’ai refait à la main plutôt qu’un simple menu du navigateur, pour qu’il garde l’effet de verre du reste du site tout en restant utilisable au clavier.',
        ],
        photos: [
          {
            fichier: 'thermo-viz/ma-commune.jpg',
            alt: 'Le menu de choix de commune ouvert, sur fond de photo de Bordeaux',
            sujet:
              'Capture du champ « Et chez moi ? » avec la liste des communes ouverte (effet verre sur la photo). Cadre serré sur le haut de la page.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
        ],
      },
      {
        phase: 'choix',
        titre: 'Des chiffres qu’on peut vérifier',
        schemas: ['pipeline'],
        paragraphes: [
          'Les chiffres viennent de quatre sources publiques : l’Insee pour les ménages et la pauvreté (revenus 2019), le Cerema pour les types de zones urbaines, et Bordeaux Métropole pour les contours des communes et les températures de surface. J’ai écrit le script qui les assemble, change les systèmes de coordonnées et ne garde que les colonnes utiles ; aucun fichier brut n’est dans le dépôt.',
          'La page Méthode détaille chaque étape, ce qui a pu se perdre en route et les limites : une seule journée mesurée, la chaleur du sol et non celle de l’air, et des chiffres qui montrent une coïncidence mais pas une cause. Le notebook Observable permet de tout refaire.',
        ],
        photos: [
          {
            fichier: 'thermo-viz/methode.jpg',
            alt: 'La page Méthode du site, avec le tableau des sources',
            sujet:
              'Capture de la page /methode : le tableau des quatre sources (producteur, date, licence) avec les onglets en haut.',
            format: '16/9',
            taille: '2400 × 1350 px',
          },
        ],
      },
      {
        phase: 'resultat',
        titre: 'Le résultat',
        schemas: ['chaleur'],
        paragraphes: [
          'Oui, les ménages pauvres vivent un peu plus souvent dans les zones les plus chaudes. Mais la chaleur concerne presque tout le monde : elle se concentre autour du centre de Bordeaux. Notre conclusion dit les deux à la fois, avec les deux barres côte à côte, plutôt qu’une phrase choc.',
        ],
      },
      {
        phase: 'resultat',
        titre: 'Design et accessibilité',
        paragraphes: [
          'L’interface adopte un style de verre dépoli sur la navigation, l’en-tête et le pied de page, avec un défilement fluide grâce à Lenis. Les visualisations s’ouvrent en onglets synchronisés avec l’adresse (/#v1 à /#v5), qu’on peut partager et parcourir au clavier avec les flèches.',
          'Le site propose un lien d’évitement, des rôles ARIA complets, des contrastes vérifiés, il respecte la préférence « réduire les animations » et s’adapte aux petits écrans.',
        ],
        photos: [
          {
            fichier: 'thermo-viz/mobile-1.jpg',
            alt: 'L’accueil de ThermoViz sur téléphone',
            sujet: 'Capture de l’accueil sur téléphone (390 px de large) avec le titre « Bordeaux ».',
            format: '3/4',
            taille: '1500 × 2000 px',
          },
          {
            fichier: 'thermo-viz/mobile-2.jpg',
            alt: 'Une visualisation de ThermoViz sur téléphone',
            sujet: 'Capture d’une visualisation sur téléphone, avec la barre d’onglets visible.',
            format: '3/4',
            taille: '1500 × 2000 px',
          },
          {
            fichier: 'thermo-viz/mobile-3.jpg',
            alt: 'La page Ma commune sur téléphone',
            sujet: 'Capture de la visualisation « Ma commune » sur téléphone, avec une commune choisie.',
            format: '3/4',
            taille: '1500 × 2000 px',
          },
        ],
      },
    ],
  },
];

// Nombre de projets affichés sur l'accueil et dans le hero (les premiers du tableau, donc les plus récents).
// Ajoute chaque nouveau projet EN HAUT du tableau `projets`. Les autres restent sur la page /projets.
export const NB_ACCUEIL = 3;

export const trouverProjet = (slug: string) => projets.find((p) => p.slug === slug);
