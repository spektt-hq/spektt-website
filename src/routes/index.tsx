import { createFileRoute, redirect } from '@tanstack/react-router'
import { detectLocale } from '@/lib/locale-server'

// `/` -> `/$locale`. Replaces the redirect half of the old Next `src/proxy.ts`
// middleware (cookie -> Accept-Language -> 'en').
export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const locale = await detectLocale()
    throw redirect({ to: '/$locale', params: { locale } })
  },
})
