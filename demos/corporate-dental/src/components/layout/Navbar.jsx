import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Calendar } from "lucide-react";
import { siteData } from "../../data/siteData";
import { useCart } from "../../context/CartContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  const isTurnosLink = (item) => item.href === "/turnos";

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)]/60">
        <div>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px]">
              <Link to="/" className="flex items-center h-full gap-3 shrink-0">
                {siteData.company.logo ? (
                  <img
                    src={siteData.company.logo}
                    alt={siteData.business.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor:
                        siteData.branding.logoBackgroundColor ||
                        "var(--color-primary)",
                    }}
                  >
                    <span className="text-white font-bold text-lg">
                      {siteData.business.name.charAt(0)}
                    </span>
                  </div>
                )}
                {!siteData.navbar.logoOnly && (
                  <span className="hidden sm:block text-lg sm:text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
                    {siteData.business.name}
                  </span>
                )}
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {siteData.navbar.items
                  .filter((item) => item.href !== "/carrito")
                  .map((item) =>
                    isTurnosLink(item) ? (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                          isActive(item.href)
                            ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                            : "bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-md hover:shadow-[var(--color-primary)]/20"
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                          isActive(item.href)
                            ? "text-[var(--color-primary)]"
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--color-primary)] rounded-full transition-all duration-300 ${
                            isActive(item.href)
                              ? "opacity-100"
                              : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    )
                  )}
                <Link
                  to="/carrito"
                  className="relative ml-2 p-2.5 rounded-xl hover:bg-[var(--color-primary)]/5 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  {totalItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {totalItems > 9 ? "9+" : totalItems}
                    </span>
                  )}
                </Link>
              </div>

              <div className="flex items-center gap-2 md:hidden">
                <Link
                  to="/turnos"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Turnos
                </Link>
                <Link
                  to="/carrito"
                  className="relative p-2 rounded-xl hover:bg-[var(--color-primary)]/5 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  {totalItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {totalItems > 9 ? "9+" : totalItems}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-xl hover:bg-[var(--color-primary)]/5 transition-colors text-[var(--color-text-primary)]"
                >
                  {isOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        />
      )}

      <div
        className={`fixed inset-x-0 top-[72px] z-40 md:hidden bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)]/60 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6">
          <div className="flex flex-col gap-1">
            {siteData.navbar.items
              .filter((item) => item.href !== "/carrito")
              .map((item) =>
                isTurnosLink(item) ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold text-base"
                  >
                    <Calendar className="w-5 h-5" />
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
}
