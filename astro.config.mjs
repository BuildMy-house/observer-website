import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buildmy.house/observer',
  output: 'server',
  trailingSlash: 'always',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  vite: {
    server: {
      port: 3000
    }
  }
});
