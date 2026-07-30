import { locales, type Locale } from '@/dictionaries/locales'

const BASE_URL = 'https://spektt.com'

// Self-referencing canonical + hreflang alternates for a locale-agnostic path
// (e.g. '' for home, '/about', `/c/${slug}`). Fixes Google's "Duplicate without
// user-selected canonical" verdict on i18n routes — every locale variant needs
// to declare itself canonical and point to its siblings via hreflang.
export function buildAlternates(locale: Locale, path: string) {
  const languages: Record<string, string> = {}
  for (const l of locales) {
    languages[l] = `${BASE_URL}/${l}${path}`
  }
  languages['x-default'] = `${BASE_URL}/en${path}`

  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages,
  }
}
