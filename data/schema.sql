-- Base des projets du portfolio (SQLite).
-- On édite data/portfolio.db (avec « DB Browser for SQLite » par exemple),
-- puis `npm run projets:exporter` génère src/data/projets.json que le site lit.
-- Le site reste statique : la base ne sert qu'à saisir et ranger le contenu.

PRAGMA foreign_keys = ON;

CREATE TABLE projet (
  id            INTEGER PRIMARY KEY,
  slug          TEXT NOT NULL UNIQUE,              -- adresse de la page : /projets/<slug>
  type          TEXT NOT NULL CHECK (type IN ('web', 'affiche')),  -- choisit le gabarit
  titre         TEXT NOT NULL,
  accroche      TEXT NOT NULL,                     -- une phrase, sous le titre
  resume        TEXT NOT NULL,                     -- description (référencement, cartes)
  annee         TEXT NOT NULL,
  cadre         TEXT NOT NULL,                     -- SAE, projet perso, stage…
  equipe        TEXT NOT NULL,
  ordre         INTEGER NOT NULL DEFAULT 0,        -- 1 = affiché en premier
  couv_fichier  TEXT NOT NULL,                     -- chemin dans public/images/
  couv_alt      TEXT NOT NULL,
  couv_sujet    TEXT NOT NULL,                     -- ce qu'il faut mettre comme photo
  couv_format   TEXT NOT NULL DEFAULT '3/2',
  couv_taille   TEXT NOT NULL DEFAULT '2400 × 1600 px'
);

CREATE TABLE role   (projet_id INTEGER NOT NULL REFERENCES projet(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, libelle TEXT NOT NULL, PRIMARY KEY (projet_id, ordre));
CREATE TABLE outil  (projet_id INTEGER NOT NULL REFERENCES projet(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, nom TEXT NOT NULL, PRIMARY KEY (projet_id, ordre));
CREATE TABLE lien   (projet_id INTEGER NOT NULL REFERENCES projet(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, label TEXT NOT NULL, url TEXT NOT NULL, PRIMARY KEY (projet_id, ordre));
-- Onglet « Choix » : un outil (site) ou un choix créatif (affiche) et sa raison.
-- `icone` : pages, eclair, base, cle, cube, bulle, palette, graphique, carnet, defilement, nuage, serveur (voir src/components/pj/Icone.astro).
CREATE TABLE choix  (projet_id INTEGER NOT NULL REFERENCES projet(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, nom TEXT NOT NULL, raison TEXT NOT NULL, icone TEXT, PRIMARY KEY (projet_id, ordre));
-- Onglet « Contexte » : les paires défi → solution.
CREATE TABLE defi   (projet_id INTEGER NOT NULL REFERENCES projet(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, defi TEXT NOT NULL, solution TEXT NOT NULL, PRIMARY KEY (projet_id, ordre));

CREATE TABLE section (
  id           INTEGER PRIMARY KEY,
  projet_id    INTEGER NOT NULL REFERENCES projet(id) ON DELETE CASCADE,
  ordre        INTEGER NOT NULL,
  onglet       TEXT NOT NULL CHECK (onglet IN ('contexte', 'role', 'processus', 'choix', 'resultat')),
  titre        TEXT NOT NULL,                      -- repère pour toi, non affiché
  paragraphes  TEXT NOT NULL,                      -- séparés par une ligne vide
  visuel       TEXT CHECK (visuel IN ('montre', 'configurateur', 'chat', 'telephones')),
  schemas      TEXT,                               -- ex. « architecture,base »
  flux_titre   TEXT                                -- si renseigné, les étapes ci-dessous s'affichent reliées
);

CREATE TABLE etape   (section_id INTEGER NOT NULL REFERENCES section(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, titre TEXT NOT NULL, texte TEXT NOT NULL, PRIMARY KEY (section_id, ordre));
CREATE TABLE chiffre (section_id INTEGER NOT NULL REFERENCES section(id) ON DELETE CASCADE, ordre INTEGER NOT NULL, valeur REAL NOT NULL, suffixe TEXT, label TEXT NOT NULL, PRIMARY KEY (section_id, ordre));
CREATE TABLE photo   (
  section_id INTEGER NOT NULL REFERENCES section(id) ON DELETE CASCADE,
  ordre      INTEGER NOT NULL,
  fichier    TEXT NOT NULL,
  alt        TEXT NOT NULL,
  sujet      TEXT NOT NULL,
  format     TEXT NOT NULL DEFAULT '16/9' CHECK (format IN ('21/9','16/9','3/2','4/3','1/1','3/4')),
  taille     TEXT NOT NULL DEFAULT '2400 × 1350 px',
  PRIMARY KEY (section_id, ordre)
);
