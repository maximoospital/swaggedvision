// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import Compress from '@playform/compress';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://swaggedvision.com',
  integrations: [
    pagefind(),
    alpinejs(),
    sitemap(),
    Compress(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
});
