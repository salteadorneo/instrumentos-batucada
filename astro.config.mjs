import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import vercel from '@astrojs/vercel/static'

export default defineConfig({
  site: 'https://instrumentos-batucada.com',
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: vercel()
})
