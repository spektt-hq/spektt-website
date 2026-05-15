import 'server-only'
import type { Locale } from './locales'

const dictionaries = {
  en: () => import('../../messages/legal/terms-en.json').then((m) => m.default),
  fr: () => import('../../messages/legal/terms-fr.json').then((m) => m.default),
  es: () => import('../../messages/legal/terms-es.json').then((m) => m.default),
  pt: () => import('../../messages/legal/terms-pt.json').then((m) => m.default),
  ar: () => import('../../messages/legal/terms-ar.json').then((m) => m.default),
}

export async function getTermsDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type TermsDictionary = Awaited<ReturnType<typeof getTermsDictionary>>
