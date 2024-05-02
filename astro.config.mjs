import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jpitters.projectnimbus.com',
  integrations: [mdx(), sitemap(), tailwind()],
  base: '/',
});