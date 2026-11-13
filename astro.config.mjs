import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://enzoh.fr',
  redirects: { '/projets': '/', '/inspirations': '/' },
});
