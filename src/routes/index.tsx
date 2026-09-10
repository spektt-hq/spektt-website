import { createFileRoute } from '@tanstack/react-router'

// Placeholder home route — step 1 of the TanStack Start migration only proves the app
// boots. In step 3 this becomes a locale-detecting redirect (/ -> /$locale) replacing the
// old src/proxy.ts middleware; the marketing homepage lives at /$locale/ (step 2).
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="flex-col-center min-h-screen gap-4 p-8 text-center">
      <h1 className="font-extraBold text-3xl text-lightBlue">Spektt</h1>
      <p className="text-textLighter font-regular">
        TanStack Start migration — scaffold up. Routes are being ported.
      </p>
    </main>
  )
}
