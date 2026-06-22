import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, MessageCircle } from "lucide-react";
import { content, siteData } from "../data/siteData";
import { categories } from "../data/categories";
import { searchProducts } from "../data/products";
import { ProductGrid } from "../components/ProductGrid";
import { SearchBar } from "../components/SearchBar";
import { CategoryFilter } from "../components/CategoryFilter";
import { ScallopDivider } from "../components/ui/ScallopDivider";

/* ── Decorativos del sistema ── */
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

/* ── Estado vacío ── */
function EmptyState({
  searchQuery,
  whatsapp,
  onClear,
  noResults,
  clearFilters,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Estrella grande como ilustración */}
      <Star
        className="w-20 h-20 mb-4"
        style={{ color: "var(--color-primary-light)", opacity: 1 }}
      />
      <Star
        className="w-8 h-8 -mt-14 mb-6"
        style={{ color: "var(--color-accent)", opacity: 0.6 }}
      />

      <p
        className="text-sm mb-2"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {noResults}
      </p>

      {searchQuery ? (
        <>
          <p
            className="text-xs mb-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            No encontramos resultados para{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              "{searchQuery}"
            </span>
          </p>
          <a
            href={`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`🔍 ¡Hola! Me gustaría saber si tienen disponible: ${searchQuery}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "var(--color-accent)",
              color: "#ffffff",
              boxShadow: "0 4px 16px rgba(200,146,42,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-accent)")
            }
          >
            <MessageCircle className="w-4 h-4" />
            Preguntar por WhatsApp
          </a>
        </>
      ) : (
        <button
          onClick={onClear}
          className="text-sm font-semibold transition-colors hover:underline underline-offset-2"
          style={{ color: "var(--color-primary)" }}
        >
          {clearFilters}
        </button>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PRODUCTS PAGE
══════════════════════════════════════════════════════════════════════ */
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const { title, subtitle, noResults, clearFilters } = content.products;

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = searchProducts(searchQuery, selectedCategory);
  const hasActiveFilters = searchQuery || selectedCategory !== "Todos";

  useEffect(() => {
    document.body.style.overflow = isFilterOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  useEffect(() => {
    if (searchQuery && filteredProducts.length === 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [searchQuery, filteredProducts.length]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams(category === "Todos" ? {} : { cat: category });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todos");
    setSearchParams({});
  };

  return (
    <>
      {/* ══ HERO — crema con ScallopDivider dorado ══ */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "var(--color-background)",
          paddingTop: "3.5rem",
          paddingBottom: "5.5rem",
        }}
      >
        {/* Bloque teal claro derecha — desktop */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 right-0 w-[30%] h-full hidden lg:block"
            style={{ backgroundColor: "var(--color-primary-light)" }}
          />
          <div
            className="absolute top-8 right-[30%] w-px h-[85%] hidden lg:block"
            style={{ backgroundColor: "var(--color-primary)", opacity: 0.12 }}
          />
        </div>

        {/* Estrellas */}
        <Star
          className="absolute top-8 right-[24%] w-5 h-5 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.45 }}
        />
        <Star
          className="absolute bottom-16 right-[8%] w-8 h-8 hidden lg:block"
          style={{ color: "var(--color-primary)", opacity: 0.2 }}
        />
        <Dot
          className="absolute top-16 left-[10%] w-2.5 h-2.5 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.35 }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Catálogo
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "32rem",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Línea decorativa */}
          <div className="flex items-center gap-2 mt-5">
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

        {/* Scallop dorado → blanco de la sección de contenido */}
        <ScallopDivider fromColor="#08A58C" />
      </section>

      {/* ══ CONTENIDO: FILTROS + GRID ══ */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar categorías */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />

            {/* Área principal */}
            <div className="flex-1">
              {/* Barra sticky mobile */}
              <div className="max-md:sticky max-md:top-[calc(4rem+12px)] max-md:z-30 mb-6">
                <div className="flex flex-row gap-3 items-center">
                  <div className="flex-1">
                    <SearchBar
                      value={searchQuery}
                      onChange={setSearchQuery}
                      placeholder="Buscar productos..."
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                  </div>

                  {/* Botón filtros mobile — sistema teal */}
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden shrink-0 h-11 flex items-center gap-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200"
                    style={{
                      border: "2px solid var(--color-primary)",
                      color: "var(--color-primary)",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    {!isSearchFocused && !searchQuery && <span>Filtros</span>}
                  </button>
                </div>
              </div>

              {/* Contador + limpiar */}
              {hasActiveFilters && (
                <div className="flex items-center justify-between mb-5">
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {filteredProducts.length}
                    </span>{" "}
                    producto{filteredProducts.length !== 1 ? "s" : ""}{" "}
                    encontrado{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    style={{ color: "var(--color-primary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {clearFilters}
                  </button>
                </div>
              )}

              {/* Grid o estado vacío */}
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <EmptyState
                  searchQuery={searchQuery}
                  whatsapp={siteData.contact.whatsapp}
                  onClear={handleClearFilters}
                  noResults={noResults}
                  clearFilters={clearFilters}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
