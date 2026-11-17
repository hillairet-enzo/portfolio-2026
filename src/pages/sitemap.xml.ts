import type { APIRoute } from 'astro';
import { projets } from '../data/projets';

// Plan du site pour les moteurs de recherche, généré à partir des pages et des projets.
// Adresses avec la barre finale, identiques aux balises canonical des pages.
const pages = ['/', '/a-propos/', '/contact/', '/mentions-legales/', ...projets.map((p) => `/projets/${p.slug}/`)];

export const GET: APIRoute = ({ site }) => {
  const base = site?.origin ?? 'https://portfolio.enzoh.fr';
  const maj = new Date().toISOString().slice(0, 10);
  const corps = pages.map((chemin) => `  <url><loc>${base}${chemin}</loc><lastmod>${maj}</lastmod></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corps}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
