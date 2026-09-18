// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio público del negocio. Cambiar por el dominio real antes de desplegar.
  site: 'https://nonosburgers.es',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
