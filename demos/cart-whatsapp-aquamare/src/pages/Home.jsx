import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { siteData, content } from '../data/siteData'
import { getFeaturedProducts } from '../data/products'
import { categories } from '../data/categories'
import { ProductGrid } from '../components/ProductGrid'
import { SectionHeader } from '../components/ui/SectionHeader'
import { HeroSection } from '../components/shared/HeroSection'

export default function Home() {
  const { hero, featuredTitle, featuredSubtitle, categoriesTitle, categoriesSubtitle, cta } =
    content.home
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <HeroSection
        backgroundImage="https://res.cloudinary.com/dfun5vbsf/image/upload/v1780335055/2-slide-1742912533167-796466520-6f2cdc04a09fc5ae382ba0c57ef55bc81742912534-1920-1920_znr78u.webp"
        mobileBackgroundImage="https://res.cloudinary.com/dfun5vbsf/image/upload/v1780335033/2-slide-1742912533174-7912303143-573f2805802c87b6a9eaa87f2d4134ef1742912534-480-0_yxxjaj.webp"
        overlayColor="#000000"
        overlayOpacity={0}
        height="min-h-[70vh]"
        textAlign="center"
        ctaText={hero.primaryButtonText}
        ctaLink={hero.primaryButtonLink}
        secondaryCtaText={hero.secondaryButtonText}
        secondaryCtaLink={hero.secondaryButtonLink}
      />

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
