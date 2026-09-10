import { defineConfig, type Plugin } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
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
    viteReact(),
  ],
})
