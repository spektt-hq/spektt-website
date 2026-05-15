import 'server-only'

import type { Locale } from './locales'
export type { Locale } from './locales'
export { locales } from './locales'

const dictionaries = {
  en: () => import('../../messages/en.json').then((m) => m.default),
  fr: () => import('../../messages/fr.json').then((m) => m.default),
  es: () => import('../../messages/es.json').then((m) => m.default),
  pt: () => import('../../messages/pt.json').then((m) => m.default),
  ar: () => import('../../messages/ar.json').then((m) => m.default),
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
