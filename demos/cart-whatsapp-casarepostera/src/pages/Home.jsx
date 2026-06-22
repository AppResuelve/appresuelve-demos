import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { content } from "../data/siteData";
import { getFeaturedProducts } from "../data/products";
import { categories } from "../data/categories";
import { ProductCarousel } from "../components/ProductCarousel";
import { ScallopDivider } from "../components/ui/ScallopDivider";

/* ── Decorativos ── */
function Star({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 0 C20 0 21 14 26 18 C30 22 40 20 40 20 C40 20 30 21 26 26 C21 30 20 40 20 40 C20 40 19 30 14 26 C10 21 0 20 0 20 C0 20 10 19 14 14 C19 10 20 0 20 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Dot({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <span
        className="inline-block text-xs font-bold tracking-[0.2em] uppercase"
        style={{ color: "var(--color-accent)" }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-3xl md:text-4xl font-bold mt-1 mb-3"
        style={{
          color: "var(--color-text-primary)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base mb-0 max-w-xl"
          style={{
            color: "var(--color-text-secondary)",
            ...(center && { margin: "0 auto" }),
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`flex items-center gap-2 mt-4 ${center ? "justify-center" : ""}`}
      >
        <div
          className="h-px w-10"
          style={{ backgroundColor: "var(--color-border-hover)" }}
        />
        <Dot className="w-2 h-2" style={{ color: "var(--color-accent)" }} />
        <div
          className="h-px w-24"
          style={{ backgroundColor: "var(--color-border-hover)" }}
        />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   HOME
══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const {
    hero,
    featuredTitle,
    featuredSubtitle,
    categoriesTitle,
    categoriesSubtitle,
    cta,
  } = content.home;
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden p-4 sm:p-6 lg:p-8 lg:pt-28 lg:pb-20"
        style={{
          backgroundColor: "#FDFAF6",
        }}
      >
        {/* Estrellas decorativas */}
        <Star
          className="absolute top-12 right-[30%] w-6 h-6 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.5 }}
        />
        <Star
          className="absolute bottom-24 right-[10%] w-10 h-10 hidden lg:block"
          style={{ color: "var(--color-primary)", opacity: 0.25 }}
        />
        <Star
          className="absolute top-1/2 left-[2%] w-5 h-5 hidden xl:block"
          style={{ color: "var(--color-accent)", opacity: 0.3 }}
        />
        <Dot
          className="absolute top-24 left-[15%] w-3 h-3 hidden lg:block"
          style={{ color: "var(--color-primary)", opacity: 0.3 }}
        />
        <Dot
          className="absolute bottom-32 left-[8%] w-2 h-2 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.4 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <img
            src="/heroimage.png"
            alt="Casa Repostera"
            className="block w-full lg:mt-0 lg:w-[55%] lg:order-2 object-cover"
            style={{ borderRadius: "0.5rem" }}
          />

          <div className="max-w-2xl flex-1 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px w-8"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: "var(--color-accent)" }}
              >
                Insumos de repostería
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "var(--color-text-primary)",
                marginBottom: "1.5rem",
              }}
            >
              {hero.title}{" "}
              <span style={{ color: "var(--color-primary)" }}>
                {hero.highlightedText}
              </span>
            </h1>

            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "36rem",
              }}
            >
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={hero.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--color-primary)",
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(26,158,143,0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-primary-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-primary)")
                }
              >
                {hero.primaryButtonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={hero.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  border: "2px solid var(--color-border-hover)",
                  color: "var(--color-text-primary)",
                  backgroundColor: "transparent",
                }}
              >
                {hero.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRODUCTOS DESTACADOS ══ */}
      <section
        className="relative bg-white overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "6.5rem", paddingBottom: "3rem" }}
      >
        <ScallopDivider fromColor="#FDFAF6" position="top" />
        <Star
          className="absolute top-8 right-8 w-8 h-8"
          style={{ color: "var(--color-accent)", opacity: 0.08 }}
        />
        <Star
          className="absolute bottom-16 left-4 w-5 h-5"
          style={{ color: "var(--color-primary)", opacity: 0.08 }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionLabel
              eyebrow="Lo más elegido"
              title={featuredTitle}
              subtitle={featuredSubtitle}
              center
            />
          </div>
          <ProductCarousel products={featuredProducts} />
          <div className="text-center mt-10">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
              style={{ color: "var(--color-primary)" }}
            >
              Ver todos los productos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CATEGORÍAS ══ */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#FDFAF6",
          paddingTop: "6.5rem",
          paddingBottom: "3rem",
        }}
      >
        <ScallopDivider fromColor="#ffffff" position="top" />
        <div
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none hidden lg:block"
          style={{ backgroundColor: "var(--color-border)", opacity: 0.6 }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="mb-12">
            <SectionLabel
              eyebrow="Explorá"
              title={categoriesTitle}
              subtitle={categoriesSubtitle}
              center
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => (
              <Link
                key={category}
                to={`/productos?cat=${encodeURIComponent(category)}`}
                className="group flex flex-col items-center gap-3 p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderRadius: "0.75rem",
                  border: "2px solid var(--color-border)",
                  backgroundColor: "var(--color-card)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(26,158,143,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <ShoppingBag
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <span
                  className="font-semibold text-sm text-center leading-tight"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {category}
                </span>
                <div
                  className="h-0.5 w-0 group-hover:w-8 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "#0e6b60",
          paddingTop: "7.5rem",
          paddingBottom: "5rem",
        }}
      >
        <ScallopDivider fromColor="#FDFAF6" position="top" />
        <Star
          className="absolute top-8 left-[8%] w-12 h-12"
          style={{ color: "#ffffff", opacity: 0.06 }}
        />
        <Star
          className="absolute bottom-8 right-[6%] w-16 h-16"
          style={{ color: "var(--color-accent)", opacity: 0.15 }}
        />
        <Star
          className="absolute top-1/2 right-[20%] w-6 h-6 hidden md:block"
          style={{ color: "#ffffff", opacity: 0.08 }}
        />
        <Dot
          className="absolute top-12 right-[35%] w-3 h-3"
          style={{ color: "var(--color-accent)", opacity: 0.3 }}
        />
        <Dot
          className="absolute bottom-16 left-[25%] w-2 h-2"
          style={{ color: "#ffffff", opacity: 0.15 }}
        />
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ backgroundColor: "#ffffff", opacity: 0.08 }}
          aria-hidden="true"
        />

        <div className="relative max-w-2xl mx-auto text-center">
          <Star
            className="w-8 h-8 mx-auto mb-6"
            style={{ color: "var(--color-accent)", opacity: 0.9 }}
          />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            {cta.title}
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            {cta.subtitle}
          </p>
          <Link
            to={cta.buttonLink}
            className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              padding: "0.875rem 2.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "var(--color-accent)",
              color: "#ffffff",
              boxShadow: "0 4px 20px rgba(200,146,42,0.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-accent)")
            }
          >
            {cta.buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
