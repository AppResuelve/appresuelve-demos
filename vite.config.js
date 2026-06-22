import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
}

function demoServer() {
  const distDir = path.resolve(__dirname, 'dist')
  const slugs = fs.existsSync(distDir)
    ? fs.readdirSync(distDir).filter(f => fs.statSync(path.join(distDir, f)).isDirectory())
    : []

  return {
    name: 'demo-static-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url?.split('?')[0]
        if (!urlPath) return next()

        if (req.method === 'POST' && urlPath === '/api/contact') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true, message: 'Mock local: mensaje registrado (no se envió email).' }))
          return
        }

        const segments = urlPath.split('/').filter(Boolean)
        if (segments.length < 1) return next()

        const slug = segments[0]
        const slugDir = path.join(distDir, slug)
        if (!fs.existsSync(slugDir) || !fs.statSync(slugDir).isDirectory()) {
          return next()
        }

        const rest = segments.slice(1).join('/')
        const filePath = path.join(slugDir, rest || 'index.html')

        if (!fs.existsSync(filePath)) {
          const fallback = path.join(slugDir, 'index.html')
          if (fs.existsSync(fallback)) {
            const content = fs.readFileSync(fallback)
            res.setHeader('Content-Type', 'text/html')
            res.end(content)
            return
          }
          return next()
        }

        if (fs.statSync(filePath).isDirectory()) {
          const indexFile = path.join(filePath, 'index.html')
          if (fs.existsSync(indexFile)) {
            const content = fs.readFileSync(indexFile)
            res.setHeader('Content-Type', 'text/html')
            res.end(content)
            return
          }
          return next()
        }

        const ext = path.extname(filePath)
        const content = fs.readFileSync(filePath)
        res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream')
        res.end(content)
      })

      console.log(`  → Demo server activo. Slugs disponibles: ${slugs.join(', ') || '(ninguno - ejecutá build:demos primero)'}`)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), demoServer()],
  build: {
    emptyOutDir: false,
  },
})
