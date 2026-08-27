// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Único valor a cambiar cuando compres el dominio.
const SITE = process.env.SITE_URL ?? 'https://hub-enlaces.jcgambeta89.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  integrations: [icon(), sitemap()],
  build: {inlineStylesheets: 'always'},
});