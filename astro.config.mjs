// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    sanity({
      projectId: '1jmyyjqm',
      dataset: 'production',
      useCdn: false,
    })
  ],
});
