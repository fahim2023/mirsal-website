// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Change this to your real domain before launch (used for the sitemap and SEO tags).
  site: 'https://www.mirsal.example',

  // Two languages: English at "/", Arabic at "/ar/".
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    }),
  ],

  // Tailwind CSS v4 runs as a Vite plugin. The theme lives in src/styles/global.css.
  vite: { plugins: [tailwindcss()] },
});
