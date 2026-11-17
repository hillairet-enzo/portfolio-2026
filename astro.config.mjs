import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.enzoh.fr',
  redirects: { '/projets': '/', '/inspirations': '/' },
});
