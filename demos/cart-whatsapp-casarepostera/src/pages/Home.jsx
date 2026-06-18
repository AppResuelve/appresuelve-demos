import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Package } from 'lucide-react'
import { siteData, content } from '../data/siteData'
import { products, getFeaturedProducts } from '../data/products'
import { categories } from '../data/categories'
import { ProductGrid } from '../components/ProductGrid'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function Home() {
  const { hero, featuredTitle, featuredSubtitle, categoriesTitle, categoriesSubtitle, cta } =
    content.home
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <section className="relative pt-20 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)] mb-6">
              {hero.title}{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                {hero.highlightedText}
              </span>
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={hero.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:-translate-y-0.5 transition-all"
              >
                {hero.primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={hero.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold hover:-translate-y-0.5 hover:border-[var(--color-primary)]/50 transition-all"
              >
                {hero.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={featuredTitle}
            subtitle={featuredSubtitle}
            className="text-center mb-16"
          />
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-12">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Ver todos los productos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={categoriesTitle}
            subtitle={categoriesSubtitle}
            className="text-center mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => (
              <Link
                key={category}
                to={`/productos?cat=${encodeURIComponent(category)}`}
                className="group p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-primary)]/30 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)]">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
              <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                {cta.title}
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                {cta.subtitle}
              </p>
              <Link
                to={cta.buttonLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:-translate-y-0.5 transition-all"
              >
                {cta.buttonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
