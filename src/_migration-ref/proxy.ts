import { NextRequest, NextResponse } from 'next/server'
import { locales, type Locale } from './dictionaries/locales'

const defaultLocale: Locale = 'en'
const LOCALE_COOKIE = 'NEXT_LOCALE'

function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split('/')[1]
  return locales.includes(segment as Locale) ? (segment as Locale) : null
}

function detectLocale(request: NextRequest): Locale {
  // Cookie takes priority — respects a previous manual language switch
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  // Fall back to browser's Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale

  // "fr-FR,fr;q=0.9,en;q=0.8" → ['fr', 'en', ...]
  const preferred = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase().substring(0, 2))

  for (const lang of preferred) {
    if (locales.includes(lang as Locale)) {
      return lang as Locale
    }
  }

  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next.js internals and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const locale = getLocaleFromPathname(pathname)

  // No locale in URL — detect and redirect
  if (!locale) {
    const detected = detectLocale(request)
    const redirectPath = pathname === '/' ? '' : pathname
    const response = NextResponse.redirect(
      new URL(`/${detected}${redirectPath}`, request.url)
    )
    response.cookies.set(LOCALE_COOKIE, detected, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })
    return response
  }

  // Locale is in the URL — update cookie to match (persists manual switches)
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })

  return response
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
