import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { siteData } from "../../data/siteData";
import { useCart } from "../../context/CartContext";

/* ── Estrella decorativa ── */
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = siteData.navbar.items.filter(
    (item) => item.href !== "/carrito",
  );

  return (
    <>
      {/* ── BARRA PRINCIPAL ── */}
      <header
        className="sticky top-0 z-50 bg-white transition-all duration-300"
        style={{
          borderBottom: scrolled ? "none" : "1px solid var(--color-border)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              {siteData.company.logo ? (
                <img
                  src={siteData.company.logo}
                  alt={siteData.business.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  <span
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {siteData.business.name.charAt(0)}
                  </span>
                </div>
              )}
              <span
                className="hidden sm:block font-bold text-lg"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text-primary)",
                }}
              >
                {siteData.business.name}
              </span>
            </Link>

            {/* Links desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors group"
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                  }}
                >
                  {item.label}
                  {/* Underline dorado */}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      width: isActive(item.href) ? "1.5rem" : "0",
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* Derecha: carrito + hamburger */}
            <div className="flex items-center gap-2">
              {/* Carrito — teal sólido */}
              <Link
                to="/carrito"
                className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#ffffff",
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
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:block">Carrito</span>
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "#ffffff",
                    }}
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </Link>

              {/* Hamburger mobile */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg transition-colors"
                style={{ color: "var(--color-text-primary)" }}
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── SIDEBAR MÓVIL ── */}

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out`}
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header del sidebar */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <div className="flex items-center gap-2">
            {siteData.company.logo ? (
              <img
                src={siteData.company.logo}
                alt={siteData.business.name}
                className="w-8 h-8 rounded-md object-cover"
              />
            ) : (
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <span
                  className="text-white text-xs font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {siteData.business.name.charAt(0)}
                </span>
              </div>
            )}
            <span
              className="font-bold text-sm"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text-primary)",
              }}
            >
              {siteData.business.name}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg transition-colors"
            style={{ color: "var(--color-text-muted)" }}
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: isActive(item.href)
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                    backgroundColor: isActive(item.href)
                      ? "var(--color-primary-light)"
                      : "transparent",
                  }}
                >
                  {/* Dot — dorado si activo, borde si no */}
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: isActive(item.href)
                        ? "var(--color-accent)"
                        : "var(--color-border-hover)",
                    }}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA carrito */}
        <div
          className="px-4 pb-8 pt-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <Link
            to="/carrito"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 relative"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Ver carrito
            {totalItems > 0 && (
              <span
                className="absolute -top-2 right-3 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#ffffff",
                }}
              >
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>
        </div>
      </aside>
    </>
  );
}
