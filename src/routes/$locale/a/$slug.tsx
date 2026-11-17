import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import DeepLinkFallback from '@/components/deep-link-fallback'

// A shared Spektt article (app spec 53 §7) — the "open in the app" page, as for showdowns.
// The full article page on the web is out of scope for v1.
export const Route = createFileRoute('/$locale/a/$slug')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { message: dict.fallback.articleMessage }
  },
  head: ({ params }) =>
    pageHead({
      title: `${params.slug} — Spektt`,
      description: `Read this story on Spektt — the global platform for creatives.`,
      locale: params.locale as Locale,
      path: `/a/${params.slug}`,
    }),
  component: ArticleFallback,
})

function ArticleFallback() {
  const { slug } = Route.useParams()
  const { message } = Route.useLoaderData()
  return <DeepLinkFallback title={slug} message={message} />
}
