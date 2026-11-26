import type { Locale } from './locales'

const dictionaries = {
  en: () => import('../../messages/legal/brand-terms-en.json').then((m) => m.default),
  fr: () => import('../../messages/legal/brand-terms-fr.json').then((m) => m.default),
  es: () => import('../../messages/legal/brand-terms-es.json').then((m) => m.default),
  pt: () => import('../../messages/legal/brand-terms-pt.json').then((m) => m.default),
  ar: () => import('../../messages/legal/brand-terms-ar.json').then((m) => m.default),
}

export async function getBrandTermsDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type BrandTermsDictionary = Awaited<ReturnType<typeof getBrandTermsDictionary>>
