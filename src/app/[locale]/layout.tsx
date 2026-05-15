import { getDictionary, locales, type Locale } from '@/dictionaries/getDictionary'
import { Navbar, Footer, ScrollToTop } from '@/components'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params
  const locale = (locales.includes(rawLocale as Locale) ? rawLocale : 'en') as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <Navbar navDict={dict.nav} locale={locale} />
      <main>{children}</main>
      <Footer dict={dict.footer} locale={locale} />
      <ScrollToTop />
    </>
  )
}
