import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { locales, type Locale } from '@/dictionaries/locales'
import { detectLocale } from '@/lib/locale-server'
import { Navbar, Footer, ScrollToTop } from '@/components'
import PageTransition from '@/components/PageTransition'
import NotFound from '@/components/NotFound'

// The i18n layout route (Navbar/Footer + page transitions), replacing the old Next
// `[locale]/layout.tsx` + `[locale]/template.tsx`.
//
// If the first path segment is not a real locale, the URL is locale-less (e.g. a deep
// link `/s/slug` or a bare `/about`) — detect the locale and redirect to the prefixed
// path. This is the other half of what `src/proxy.ts` did.
export const Route = createFileRoute('/$locale')({
  beforeLoad: async ({ params, location }) => {
    if (!locales.includes(params.locale as Locale)) {
      const locale = await detectLocale()
      throw redirect({ href: `/${locale}${location.pathname}` })
    }
  },
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const dict = await getDictionary(locale)
    return { dict, locale }
  },
  component: LocaleLayout,
  notFoundComponent: NotFound,
})

function LocaleLayout() {
  const { dict, locale } = Route.useLoaderData()

  return (
    <>
      <Navbar navDict={dict.nav} locale={locale} />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer dict={dict.footer} locale={locale} />
      <ScrollToTop />
    </>
  )
}
