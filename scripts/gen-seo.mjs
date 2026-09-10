// Generates public/sitemap.xml + public/robots.txt. Run before dev/build (see the
// predev / prebuild scripts in package.json). Replaces the Next `src/app/sitemap.ts`
// and `src/app/robots.ts` metadata routes.
import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = 'https://spektt.com'
const LOCALES = ['en', 'fr', 'es', 'pt', 'ar']

const PAGES = [
  { path: '', changefreq: 'monthly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/help', changefreq: 'weekly', priority: '0.9' },
  { path: '/download', changefreq: 'yearly', priority: '0.7' },
  { path: '/contact', changefreq: 'yearly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
  { path: '/community-guidelines', changefreq: 'yearly', priority: '0.4' },
  { path: '/showdown-rules', changefreq: 'yearly', priority: '0.3' },
]

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
mkdirSync(publicDir, { recursive: true })

const lastmod = new Date().toISOString()

const urls = LOCALES.flatMap((locale) =>
  PAGES.map((page) => {
    const loc = `${BASE}/${locale}${page.path}`
    const alternates = LOCALES.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}${page.path}"/>`,
    ).join('\n')
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority}</priority>`,
      alternates,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/en${page.path}"/>`,
      '  </url>',
    ].join('\n')
  }),
).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`

writeFileSync(join(publicDir, 'sitemap.xml'), sitemap)
writeFileSync(join(publicDir, 'robots.txt'), robots)
console.log(`[gen-seo] wrote public/sitemap.xml (${LOCALES.length * PAGES.length} urls) + public/robots.txt`)
