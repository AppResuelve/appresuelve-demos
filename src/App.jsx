import { useState, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'

const DEMOS_JSON = './demos.json'

function App() {
  const [demos, setDemos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(DEMOS_JSON)
      .then(r => {
        if (!r.ok) throw new Error('Error al cargar demos')
        return r.json()
      })
      .then(data => setDemos(data.filter(d => d.active)))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[--color-text-secondary]">Cargando demos...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-[200px] right-[-60px] w-[200px] h-[200px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl text-sm text-[--color-text-secondary] mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Proyectos reales de clientes
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[--color-text-primary]">
              Nuestras
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                demos en vivo
              </span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-[--color-text-secondary] max-w-3xl">
              Mirá cómo se ven los sitios que creamos. Cada demo es un proyecto real funcionando.
            </p>
          </div>
        </section>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.slug}
                className="group relative rounded-2xl border border-[--color-border] bg-[--color-bg-card] overflow-hidden transition-all hover:shadow-lg hover:border-cyan-400/30"
              >
                <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden bg-[--color-bg-section]">
                  <iframe
                    src={`/${demo.slug}/`}
                    title={demo.title}
                    className="w-full h-full border-0 origin-top-left pointer-events-none"
                    style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <a
                    href={`./${demo.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Ver demo ${demo.title}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                        {demo.category}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-[--color-text-primary]">
                        {demo.title}
                      </h3>
                      <p className="mt-1 text-sm text-[--color-text-secondary]">
                        {demo.description}
                      </p>
                    </div>
                    <a
href={`/${demo.slug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-lg text-[--color-text-muted] hover:text-cyan-500 hover:bg-cyan-500/10 transition-colors"
                      aria-label={`Abrir ${demo.title} en nueva pestaña`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
