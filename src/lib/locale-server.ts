import { createServerFn } from '@tanstack/react-start'
import { getCookie, getRequestHeader } from '@tanstack/react-start/server'
import { locales, type Locale } from '@/dictionaries/locales'

const COOKIE = 'NEXT_LOCALE'
const DEFAULT: Locale = 'en'

// The locale-detection logic from the old Next `src/proxy.ts` middleware:
// cookie (a remembered manual switch) wins, then Accept-Language, then 'en'.
function pick(cookie: string | undefined, accept: string | undefined): Locale {
  if (cookie && locales.includes(cookie as Locale)) return cookie as Locale

  if (accept) {
    const preferred = accept
      .split(',')
      .map((part) => part.split(';')[0].trim().toLowerCase().slice(0, 2))
    for (const code of preferred) {
      if (locales.includes(code as Locale)) return code as Locale
    }
  }

  return DEFAULT
}

export const detectLocale = createServerFn({ method: 'GET' }).handler(() =>
  pick(getCookie(COOKIE), getRequestHeader('accept-language')),
)
