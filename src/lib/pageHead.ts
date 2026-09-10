import { buildAlternates } from './seo'
import type { Locale } from '@/dictionaries/locales'

const OG_IMAGE = 'https://spektt.com/spektt-new-favicon.png'

// Builds the `head` object for a route (title, description, OG/Twitter, canonical +
// hreflang alternates). Replaces the repeated `generateMetadata` blocks from the Next
// pages. `path` is the locale-agnostic path, e.g. '' for home, '/terms', `/s/${slug}`.
export function pageHead(opts: {
  title?: string
  description?: string
  locale: Locale
  path: string
}) {
  const { title, description, locale, path } = opts
  const alt = buildAlternates(locale, path)
  const url = `https://spektt.com/${locale}${path}`

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Spektt' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: OG_IMAGE },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [
      { rel: 'canonical', href: alt.canonical },
      ...Object.entries(alt.languages).map(([hreflang, href]) => ({
        rel: 'alternate',
        hreflang,
        href,
      })),
    ],
  }
}
