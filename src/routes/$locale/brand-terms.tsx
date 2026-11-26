import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getBrandTermsDictionary } from '@/dictionaries/getBrandTermsDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import BrandTermsContent from '@/components/legal/brand-terms-content'

export const Route = createFileRoute('/$locale/brand-terms')({
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const [base, d] = await Promise.all([
      getDictionary(locale),
      getBrandTermsDictionary(locale),
    ])
    return { meta: base.meta.brandTerms, d }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/brand-terms',
    }),
  component: BrandTermsRoute,
})

function BrandTermsRoute() {
  const { locale } = Route.useParams()
  const { d } = Route.useLoaderData()
  return <BrandTermsContent d={d} locale={locale as Locale} />
}
