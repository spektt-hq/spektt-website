import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { getTermsDictionary } from '@/dictionaries/getTermsDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import TermsContent from '@/components/legal/terms-content'

export const Route = createFileRoute('/$locale/terms')({
  loader: async ({ params }) => {
    const locale = params.locale as Locale
    const [base, d] = await Promise.all([
      getDictionary(locale),
      getTermsDictionary(locale),
    ])
    return { meta: base.meta.terms, d }
  },
  head: ({ params, loaderData }) =>
    pageHead({
      title: loaderData?.meta.title,
      description: loaderData?.meta.description,
      locale: params.locale as Locale,
      path: '/terms',
    }),
  component: TermsRoute,
})

function TermsRoute() {
  const { d } = Route.useLoaderData()
  return <TermsContent d={d} />
}
