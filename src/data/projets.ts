// Les projets vivent dans une base SQLite (data/portfolio.db). `npm run projets:exporter`
// (lancé tout seul avant dev et build) la convertit en src/data/projets.json, lu ici.
// Pour ajouter un projet : ouvre data/portfolio.db, copie les lignes d’un projet existant
// (voir data/AJOUTER-UN-PROJET.md). La page et la carte de l’accueil se créent toutes seules.
//
// Chaque photo est un « encart » : tant que le fichier n’existe pas dans public/images/,
// le site affiche un cadre qui explique quoi mettre.
import donnees from './projets.json';

export type Format = '21/9' | '16/9' | '3/2' | '4/3' | '1/1' | '3/4';

export interface Photo {
  fichier: string; // chemin dans public/images/
  alt: string; // description pour les lecteurs d’écran
  sujet: string; // ce qu’il faut mettre comme photo
  format: Format;
  taille: string; // taille conseillée
}

export type Schema = 'architecture' | 'base' | 'pipeline' | 'chaleur';
export type Visuel = 'montre' | 'configurateur' | 'chat' | 'telephones';

// Un projet est raconté en quatre onglets, toujours dans cet ordre.
// L’onglet « choix » regroupe les sections `choix` puis `resultat`.
export type Onglet = 'contexte' | 'role' | 'processus' | 'choix' | 'resultat';
export type TypeProjet = 'web' | 'affiche';

export interface Choix {
  nom: string;
  raison: string;
  icone?: string | null; // voir src/components/pj/Icone.astro
}

export interface Defi {
  defi: string;
  solution: string;
}

export interface Section {
  onglet: Onglet;
  titre: string; // repère pour toi : il n’est pas affiché sur la page
  paragraphes: string[];
  flux?: { etiquette: string; etapes: { titre: string; texte: string }[] };
  schemas?: Schema[];
  photos?: Photo[];
  visuel?: Visuel;
  chiffres?: { valeur: number; suffixe?: string; label: string }[];
}

export interface Projet {
  slug: string;
  type: TypeProjet;
  titre: string;
  accroche: string;
  resume: string;
  annee: string;
  cadre: string;
  equipe: string;
  role: string[];
  outils: string[];
  choix: Choix[];
  defis: Defi[];
  liens: { label: string; url: string }[];
  couverture: Photo;
  sections: Section[];
}

// Les libellés changent selon le type de projet : le gabarit s’adapte.
export const gabarits: Record<TypeProjet, { onglets: [string, string, string, string]; choix: string; resultat: string }> = {
  web: {
    onglets: ['Le projet et ses défis', 'Mon rôle', 'Ma démarche', 'Les outils et le résultat'],
    choix: 'Les outils',
    resultat: 'Le résultat',
  },
  affiche: {
    onglets: ['Le projet et ses défis', 'Mon rôle', 'Ma démarche', 'Les choix créatifs et le résultat'],
    choix: 'Les choix créatifs',
    resultat: 'Le rendu final',
  },
};

export const projets = donnees as unknown as Projet[];

// Nombre de projets affichés sur l’accueil et dans le hero (les premiers, donc ceux qui ont le plus petit `ordre`).
export const NB_ACCUEIL = 3;

export const trouverProjet = (slug: string) => projets.find((p) => p.slug === slug);
