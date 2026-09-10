import { createFileRoute } from '@tanstack/react-router'
import { getDictionary } from '@/dictionaries/getDictionary'
import { type Locale } from '@/dictionaries/locales'
import { pageHead } from '@/lib/pageHead'
import DeepLinkFallback from '@/components/deep-link-fallback'

export const Route = createFileRoute('/$locale/profile/$username')({
  loader: async ({ params }) => {
    const dict = await getDictionary(params.locale as Locale)
    return { message: dict.fallback.profileMessage }
  },
  head: ({ params }) =>
    pageHead({
      title: `@${params.username} — Spektt`,
      description: `View @${params.username}'s creative portfolio and profile on Spektt.`,
      locale: params.locale as Locale,
      path: `/profile/${params.username}`,
    }),
  component: ProfileFallback,
})

function ProfileFallback() {
  const { username } = Route.useParams()
  const { message } = Route.useLoaderData()
  return <DeepLinkFallback title={`@${username}`} message={message} />
}
