import 'server-only'
import type { Locale } from './locales'

const dictionaries = {
  en: () => import('../../messages/help/help-en.json').then((m) => m.default),
  fr: () => import('../../messages/help/help-fr.json').then((m) => m.default),
  es: () => import('../../messages/help/help-es.json').then((m) => m.default),
  pt: () => import('../../messages/help/help-pt.json').then((m) => m.default),
  ar: () => import('../../messages/help/help-ar.json').then((m) => m.default),
}

export async function getHelpDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type HelpDictionary = Awaited<ReturnType<typeof getHelpDictionary>>
