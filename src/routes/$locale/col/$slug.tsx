import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import DeepLinkFallback from '@/components/DeepLinkFallback'

export const Route = createFileRoute('/$locale/col/$slug')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { message: dict.fallback.collectionMessage }
  },
  head: ({ params }) =>
    pageHead({
      title: `${params.slug} Collection — Spektt`,
      description: `View the ${params.slug} Collection on Spektt — the creative community platform.`,
      locale: params.locale as Locale,
      path: `/col/${params.slug}`,
    }),
  component: CollectionFallback,
})

function CollectionFallback() {
  const { slug } = Route.useParams()
  const { message } = Route.useLoaderData()
  return <DeepLinkFallback title={slug} message={message} />
}
