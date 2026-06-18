import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { siteData } from "../../data/siteData";
import { useCart } from "../../context/CartContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--color-background)]">
        <div>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-3">
                {siteData.company.logo ? (
                  <img
                    src={siteData.company.logo}
                    alt={siteData.business.name}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-md bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {siteData.business.name.charAt(0)}
                    </span>
                  </div>
                )}
                {(!siteData.navbar.logoOnly) && (
                  <span className="text-xl font-bold text-[var(--color-text-primary)] hidden sm:block">
                    {siteData.business.name}
                  </span>
                )}
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {siteData.navbar.items
                  .filter((item) => item.href !== "/carrito")
                  .map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                <Link
                  to="/carrito"
                  className="relative p-2 rounded-xl hover:bg-[var(--color-card)] transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">
                      {totalItems > 9 ? "9+" : totalItems}
                    </span>
                  )}
                </Link>
              </div>

              <div className="flex items-center gap-4 md:hidden">
                <Link
                  to="/carrito"
                  className="relative p-2 flex items-center gap-1"
                >
                  <span className="text-sm font-semibold text-[var(--color-text-secondary)]">
                    Carrito
                  </span>
                  <ShoppingCart className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center">
                      {totalItems > 9 ? "9+" : totalItems}
                    </span>
                  )}
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-[var(--color-text-primary)]"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
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
        className={`fixed inset-x-0 top-16 z-40 md:hidden bg-[var(--color-background)] transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-4 border-b border-[var(--color-primary)]">
          <div className="flex flex-col gap-4">
            {siteData.navbar.items
              .filter((item) => item.href !== "/carrito")
              .map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    isActive(item.href)
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
