import { createFileRoute, Outlet, notFound } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { locales, type Locale } from '@/dictionaries/locales'
import { Navbar, Footer, ScrollToTop } from '@/components'
import PageTransition from '@/components/PageTransition'
import NotFound from '@/components/NotFound'

// The i18n layout route. Replaces the old Next `[locale]/layout.tsx` (Navbar/Footer)
// and `[locale]/template.tsx` (page transitions). Locale detection + the `/` -> `/$locale`
// redirect that `src/proxy.ts` used to do lands in step 3, on the `/` index route.
export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!locales.includes(params.locale as Locale)) {
      throw notFound()
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
