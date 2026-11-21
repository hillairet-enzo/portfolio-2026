// Back-office local : modifier data/portfolio.db dans le navigateur, sans toucher au code.
//   npm run admin   puis   http://127.0.0.1:4500
// Il n'écoute que sur ta machine (127.0.0.1) et n'est jamais mis en ligne : le site publié reste statique.
// Nécessite Node 22.5 ou plus (module intégré node:sqlite).
import { createServer } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';

const racine = new URL('../', import.meta.url);
const chemin = (p) => fileURLToPath(new URL(p, racine));
const PORT = Number(process.env.PORT) || 4500;
const HOTE = '127.0.0.1';

if (!existsSync(chemin('data/portfolio.db'))) {
  console.error('[admin] data/portfolio.db introuvable.');
  process.exit(1);
}
const db = new DatabaseSync(chemin('data/portfolio.db'));
db.exec('PRAGMA foreign_keys = ON');
const page = readFileSync(chemin('scripts/admin.html'), 'utf8');

// Description des tables : colonnes, valeurs permises (CHECK ... IN (...)), clé primaire.
const lireTables = () =>
  db
    .prepare("SELECT name, sql FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%' ORDER BY rowid")
    .all()
    .map((t) => {
      const choix = {};
      for (const m of t.sql.matchAll(/(\w+)\s+TEXT[^,]*?CHECK\s*\(\s*\1\s+IN\s*\(([^)]*)\)/gi)) {
        choix[m[1]] = [...m[2].matchAll(/'([^']*)'/g)].map((x) => x[1]);
      }
      const colonnes = db.prepare(`PRAGMA table_info("${t.name}")`).all().map((c) => ({
        nom: c.name, type: c.type, obligatoire: !!c.notnull, cle: !!c.pk, defaut: c.dflt_value, choix: choix[c.name] ?? null,
      }));
      return { nom: t.name, colonnes };
    });

const trouver = (nom) => {
  const t = lireTables().find((x) => x.nom === nom);
  if (!t) throw new Error(`Table inconnue : ${nom}`);
  return t;
};

const convertir = (col, v) => {
  if (v === '' || v === null || v === undefined) return null;
  if (/INT|REAL/i.test(col.type)) {
    const n = Number(v);
    if (Number.isNaN(n)) throw new Error(`« ${col.nom} » doit être un nombre.`);
    return n;
  }
  return String(v);
};

const actions = {
  tables: () => lireTables(),

  lignes: ({ table }) => {
    const t = trouver(table);
    return db.prepare(`SELECT rowid AS _rowid, * FROM "${t.nom}" ORDER BY rowid`).all().map((l) => ({ ...l }));
  },

  enregistrer: ({ table, rowid, valeurs }) => {
    const t = trouver(table);
    const cols = t.colonnes.filter((c) => c.nom in valeurs);
    const donnees = cols.map((c) => convertir(c, valeurs[c.nom]));
    if (rowid) {
      const r = db.prepare(`UPDATE "${t.nom}" SET ${cols.map((c) => `"${c.nom}" = ?`).join(', ')} WHERE rowid = ?`).run(...donnees, rowid);
      return { rowid, modifiees: Number(r.changes) };
    }
    // ajout : une valeur vide laisse la base mettre la valeur par défaut (ex. numéro automatique)
    const gardees = cols.filter((c, i) => !(donnees[i] === null && (c.cle || c.defaut !== null)));
    const vals = gardees.map((c) => convertir(c, valeurs[c.nom]));
    const sql = gardees.length
      ? `INSERT INTO "${t.nom}" (${gardees.map((c) => `"${c.nom}"`).join(', ')}) VALUES (${gardees.map(() => '?').join(', ')})`
      : `INSERT INTO "${t.nom}" DEFAULT VALUES`;
    const r = db.prepare(sql).run(...vals);
    return { rowid: Number(r.lastInsertRowid) };
  },

  supprimer: ({ table, rowid }) => {
    const t = trouver(table);
    const r = db.prepare(`DELETE FROM "${t.nom}" WHERE rowid = ?`).run(rowid);
    return { supprimees: Number(r.changes) };
  },

  // Régénère src/data/*.json à partir de la base, comme avant chaque build.
  exporter: () =>
    new Promise((ok, ko) =>
      execFile(process.execPath, ['--no-warnings', chemin('scripts/exporter-projets.mjs')], (e, sortie, err) =>
        e ? ko(new Error(err || e.message)) : ok({ message: sortie.trim() }),
      ),
    ),
};

const repondre = (res, code, corps, type = 'application/json; charset=utf-8') => {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(typeof corps === 'string' ? corps : JSON.stringify(corps));
};

createServer(async (req, res) => {
  // Protection : uniquement depuis cette machine (contre le « DNS rebinding » et les requêtes d'autres sites).
  const attendus = [`${HOTE}:${PORT}`, `localhost:${PORT}`];
  if (!attendus.includes(req.headers.host ?? '')) return repondre(res, 403, { erreur: 'Hôte non autorisé.' });

  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === 'GET' && url.pathname === '/') return repondre(res, 200, page, 'text/html; charset=utf-8');
  if (!url.pathname.startsWith('/api/')) return repondre(res, 404, { erreur: 'Introuvable.' });

  try {
    const action = actions[url.pathname.slice(5)];
    if (!action) return repondre(res, 404, { erreur: 'Action inconnue.' });
    let corps = {};
    if (req.method === 'POST') {
      const origine = req.headers.origin;
      if (req.headers['x-admin'] !== '1' || (origine && !attendus.includes(new URL(origine).host))) {
        return repondre(res, 403, { erreur: 'Requête refusée.' });
      }
      const morceaux = [];
      for await (const m of req) morceaux.push(m);
      corps = JSON.parse(Buffer.concat(morceaux).toString('utf8') || '{}');
    } else {
      corps = Object.fromEntries(url.searchParams);
    }
    repondre(res, 200, await action(corps));
  } catch (e) {
    repondre(res, 400, { erreur: e.message });
  }
}).listen(PORT, HOTE, () => {
  console.log(`[admin] Back-office : http://${HOTE}:${PORT}  (Ctrl+C pour arrêter)`);
});
