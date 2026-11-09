// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The site's address (used for the sitemap, SEO tags and link previews). Change it if you get your own domain.
  site: 'https://mirsal-automate.netlify.app',

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
