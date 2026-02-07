import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { blogPosts } from './src/data/blog'
import { serviceAreas } from './src/data/services'

const BASE_URL = 'https://turfcleaninglasvegas.com'

function sitemapPlugin(): Plugin {
  let resolvedOutDir: string

  return {
    name: 'generate-sitemap',
    apply: 'build',
    configResolved(config) {
      resolvedOutDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const today = new Date().toISOString().split('T')[0]

      const staticPages = [
        { loc: '/', priority: '1.0', changefreq: 'weekly' },
        { loc: '/services', priority: '0.9', changefreq: 'monthly' },
        { loc: '/areas', priority: '0.9', changefreq: 'weekly' },
        { loc: '/about', priority: '0.7', changefreq: 'monthly' },
        { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
        { loc: '/quote', priority: '0.9', changefreq: 'monthly' },
        { loc: '/blog', priority: '0.8', changefreq: 'weekly' },
      ]

      const publishedPosts = blogPosts.filter(p => p.publishDate <= today)

      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

      for (const page of staticPages) {
        xml += `  <url>\n`
        xml += `    <loc>${BASE_URL}${page.loc}</loc>\n`
        xml += `    <lastmod>${today}</lastmod>\n`
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`
        xml += `    <priority>${page.priority}</priority>\n`
        xml += `  </url>\n`
      }

      for (const area of serviceAreas) {
        xml += `  <url>\n`
        xml += `    <loc>${BASE_URL}/areas/${area.slug}</loc>\n`
        xml += `    <lastmod>${today}</lastmod>\n`
        xml += `    <changefreq>monthly</changefreq>\n`
        xml += `    <priority>0.8</priority>\n`
        xml += `  </url>\n`
      }

      for (const post of publishedPosts) {
        xml += `  <url>\n`
        xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`
        xml += `    <lastmod>${post.updatedDate || post.publishDate}</lastmod>\n`
        xml += `    <changefreq>monthly</changefreq>\n`
        xml += `    <priority>${post.isPillar ? '0.8' : '0.6'}</priority>\n`
        xml += `  </url>\n`
      }

      xml += '</urlset>\n'

      writeFileSync(resolve(resolvedOutDir, 'sitemap.xml'), xml)
      const total = staticPages.length + serviceAreas.length + publishedPosts.length
      console.log(`Sitemap generated: ${total} URLs (${staticPages.length} pages, ${serviceAreas.length} areas, ${publishedPosts.length} blog posts)`)
    },
  }
}

export default defineConfig({
  plugins: [react(), sitemapPlugin()],
})
