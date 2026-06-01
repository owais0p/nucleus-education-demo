// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://owais0p.github.io',
  base: '/nucleus-education-demo',
  vite: {
    plugins: [tailwindcss()]
  }
});