import { defineConfig, type Plugin } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `apple-app-site-association` has no extension, so Vite serves it with no Content-Type.
// Apple's AASA fetch requires `application/json` — a mismatch fails Universal Link
// verification SILENTLY. In production Vercel handles this via vercel.json headers; this
// keeps `npm run dev` / `npm run preview` consistent so local curl checks are meaningful.
function wellKnownJson(): Plugin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fix = (req: any, res: any, next: () => void) => {
    if (typeof req?.url === 'string' && req.url.startsWith('/.well-known/')) {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Access-Control-Allow-Origin', '*')
    }
    next()
  }
  return {
    name: 'spektt-well-known-json',
    configureServer(server) {
      server.middlewares.use(fix)
    },
    configurePreviewServer(server) {
      server.middlewares.use(fix)
    },
  }
}

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    // Honour the "@/*" -> "./src/*" alias from tsconfig.json.
    tsconfigPaths: true,
  },
  plugins: [
    wellKnownJson(),
    tailwindcss(),
    tanstackStart(),
    // Compiles the SSR handler into a deployable server bundle. On Vercel this
    // emits `.vercel/output/` (Build Output API v3), which Vercel's zero-config
    // detection serves as a Function — without it `vite build` only produces a
    // bare srvx handler that Vercel has no route to, so every path 404s.
    //
    // `.well-known` files must be served as `application/json` for Universal Link
    // / App Links verification. Nitro folds these routeRules into the generated
    // `.vercel/output/config.json`; `vercel.json` headers are ignored once that
    // file exists (TanStack/router#4021).
    nitro({
      routeRules: {
        '/.well-known/**': {
          headers: {
            'content-type': 'application/json',
            'access-control-allow-origin': '*',
          },
        },
      },
    }),
    viteReact(),
  ],
})
