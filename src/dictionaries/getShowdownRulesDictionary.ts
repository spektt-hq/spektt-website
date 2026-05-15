import 'server-only'
import type { Locale } from './locales'

const dictionaries = {
  en: () => import('../../messages/legal/showdown-rules-en.json').then((m) => m.default),
  fr: () => import('../../messages/legal/showdown-rules-fr.json').then((m) => m.default),
  es: () => import('../../messages/legal/showdown-rules-es.json').then((m) => m.default),
  pt: () => import('../../messages/legal/showdown-rules-pt.json').then((m) => m.default),
  ar: () => import('../../messages/legal/showdown-rules-ar.json').then((m) => m.default),
}

export async function getShowdownRulesDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type ShowdownRulesDictionary = Awaited<ReturnType<typeof getShowdownRulesDictionary>>
