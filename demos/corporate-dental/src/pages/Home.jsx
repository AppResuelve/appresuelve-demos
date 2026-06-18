import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Smile, ShieldCheck, Shield, Stethoscope, Calendar } from "lucide-react";
import { siteData, content } from "../data/siteData";
import { getFeaturedProducts } from "../data/products";
import { services } from "../data/services";
import { ProductGrid } from "../components/ProductGrid";
import { SectionHeader } from "../components/ui/SectionHeader";
import { HeroCarousel } from "../components/shared/HeroCarousel";

const iconMap = {
  Sparkles,
  Star,
  Smile,
  ShieldCheck,
  Shield,
  Stethoscope,
}

export default function Home() {
  const {
    hero,
    featuredTitle,
    featuredSubtitle,
    servicesTitle,
    servicesSubtitle,
    cta,
  } = content.home;
  const featuredProducts = getFeaturedProducts();

  const slides = [
    {
      src: siteData.branding.carouselImages[0],
      mobileSrc: siteData.branding.carouselMobileImages[0],
      title: "Limpieza Dental Profesional",
      subtitle:
        "Eliminamos sarro y placa bacteriana con tecnología de ultrasonido para mantener tu salud bucal.",
    },
    {
      src: siteData.branding.carouselImages[1],
      mobileSrc: siteData.branding.carouselMobileImages[1],
      title: "Odontología General",
      subtitle:
        "Atención integral para toda la familia. Revisiones, caries, restauraciones y más.",
    },
    {
      src: siteData.branding.carouselImages[2],
      mobileSrc: siteData.branding.carouselMobileImages[2],
      title: "Implantes Dentales",
      subtitle:
        "Recuperá tu sonrisa con implantes de titanio de última generación. Resultados duraderos y naturales.",
    },
  ];

  return (
    <>
      <section className="w-full md:rounded-lg md:mx-auto md:my-4 md:w-[calc(100%-2rem)] md:overflow-hidden">
        <HeroCarousel
          slides={slides}
          autoplay={siteData.branding.carouselAutoplay}
          autoplayInterval={siteData.branding.carouselAutoplayInterval}
          showDots={true}
          showArrows={true}
        />
      </section>

      <section className="relative pt-16 md:pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-6">
              {hero.badge}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)] mb-6">
              {hero.title}{" "}
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title={servicesTitle}
            subtitle={servicesSubtitle}
            className="text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <Link
                  key={service.slug}
                  to={`/servicios#${service.slug}`}
                  className="group flex flex-col p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)]/15 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-[var(--color-primary)]" />}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[var(--color-primary)]">
                    Más información
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
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

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-[var(--color-card)] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
              <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-0 min-h-[360px]">
              <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                  {cta.title}
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
                  {cta.subtitle}
                </p>
                <Link
                  to={cta.buttonLink}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:-translate-y-0.5 transition-all w-fit shadow-lg shadow-[var(--color-primary)]/20"
                >
                  {cta.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="relative flex items-center justify-center bg-gradient-to-bl from-[var(--color-primary)]/5 to-transparent p-10 md:p-14 lg:p-16">
                <div className="relative">
                  <div className="absolute inset-0 w-64 h-64 -m-8 rounded-full border-2 border-dashed border-[var(--color-primary)]/20 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-0 w-52 h-52 -m-2 rounded-full border border-[var(--color-primary)]/10" />
                  <div className="absolute inset-0 w-72 h-72 -m-12 rounded-full border border-[var(--color-primary)]/5" />

                  <div className="relative w-40 h-40 rounded-3xl bg-white shadow-xl shadow-[var(--color-primary)]/10 flex items-center justify-center z-10">
                    {siteData.company.logo ? (
                      <img
                        src={siteData.company.logo}
                        alt={siteData.business.name}
                        className="h-24 w-auto object-contain"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                        <span className="text-white font-black text-4xl">
                          {siteData.business.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  <Calendar className="w-9 h-9 text-[var(--color-primary)]/70 absolute -top-2 -right-6 bg-[var(--color-card)] rounded-xl p-1.5 shadow-md z-20" />
                  <Smile className="w-8 h-8 text-[var(--color-primary)]/60 absolute -bottom-3 -left-4 bg-[var(--color-card)] rounded-xl p-1.5 shadow-md z-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
