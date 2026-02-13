import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  site: 'https://auraglobal.com',
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
