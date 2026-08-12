import 'server-only'
import type { Locale } from './locales'

const dictionaries = {
  en: () => import('../../messages/legal/guidelines-en.json').then((m) => m.default),
  fr: () => import('../../messages/legal/guidelines-fr.json').then((m) => m.default),
  es: () => import('../../messages/legal/guidelines-es.json').then((m) => m.default),
  pt: () => import('../../messages/legal/guidelines-pt.json').then((m) => m.default),
  ar: () => import('../../messages/legal/guidelines-ar.json').then((m) => m.default),
}

export async function getGuidelinesDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type GuidelinesDictionary = Awaited<ReturnType<typeof getGuidelinesDictionary>>
