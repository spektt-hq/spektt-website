import { defineConfig, type Plugin } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `apple-app-site-association` has no extension, so Vite serves it with no Content-Type.
// Apple's AASA fetch requires `application/json` — a mismatch fails Universal Link
// verification SILENTLY. In production the Nitro routeRules below become Cloudflare's
// `_headers` file; this keeps `npm run dev` / `npm run preview` consistent so local curl
// checks are meaningful.
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
    // Compiles the SSR handler into a Cloudflare Worker (`.output/server/index.mjs`)
    // plus static assets (`.output/public/`), and writes the wrangler config that
    // `npx wrangler deploy` reads. Static files are served free and never invoke the
    // Worker; only page HTML does.
    //
    // `.well-known` files must be served as `application/json` for Universal Link
    // / App Links verification. Nitro turns these routeRules into
    // `.output/public/_headers`, which Cloudflare applies to the static files.
    nitro({
      preset: 'cloudflare-module',
      // The Worker's name in the Cloudflare dashboard — fixed, so every deploy updates
      // the same Worker (Nitro would otherwise derive one from the git remote).
      cloudflare: { wrangler: { name: 'spektt-website' } },
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
