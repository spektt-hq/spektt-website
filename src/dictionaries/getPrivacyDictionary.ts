import 'server-only'
import type { Locale } from './locales'

const dictionaries = {
  en: () => import('../../messages/legal/privacy-en.json').then((m) => m.default),
  fr: () => import('../../messages/legal/privacy-fr.json').then((m) => m.default),
  es: () => import('../../messages/legal/privacy-es.json').then((m) => m.default),
  pt: () => import('../../messages/legal/privacy-pt.json').then((m) => m.default),
  ar: () => import('../../messages/legal/privacy-ar.json').then((m) => m.default),
}

export async function getPrivacyDictionary(locale: Locale) {
  return dictionaries[locale]()
}

export type PrivacyDictionary = Awaited<ReturnType<typeof getPrivacyDictionary>>
