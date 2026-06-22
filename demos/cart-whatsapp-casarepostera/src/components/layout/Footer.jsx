import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "../../data/siteData";
import { ScallopDivider } from "../ui/ScallopDivider";

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

/* ── Título de columna ── */
function ColTitle({ children }) {
  return (
    <h4
      className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
      style={{ color: "var(--color-accent)" }}
    >
      {children}
    </h4>
  );
}

/* ── Item de contacto ── */
function ContactItem({ icon: Icon, href, children }) {
  const base = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.55)",
    transition: "color 0.2s",
    textDecoration: "none",
  };
  const iconWrap = (
    <span
      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5"
      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
    >
      <Icon className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        style={base}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
        }
      >
        {iconWrap}
        <span>{children}</span>
      </a>
    );
  }
  return (
    <div style={base}>
      {iconWrap}
      <span>{children}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════════ */
export function Footer({ waveFromColor = "#ffffff" }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0e6b60" }}
      >
        {/* Decoración geométrica fondo */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Línea vertical izquierda */}
          <div
            className="absolute top-0 left-[12%] w-px h-full hidden lg:block"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />
          {/* Línea vertical derecha */}
          <div
            className="absolute top-0 right-[12%] w-px h-full hidden lg:block"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />
          {/* Línea horizontal alta */}
          <div
            className="absolute top-16 left-0 right-0 h-px"
            style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          />
        </div>

        {/* Estrellas decorativas */}
        <Star
          className="absolute top-8 right-10 w-10 h-10 pointer-events-none"
          style={{ color: "rgba(255,255,255,0.05)" }}
        />
        <Star
          className="absolute bottom-12 left-8 w-7 h-7 pointer-events-none"
          style={{ color: "var(--color-accent)", opacity: 0.12 }}
        />
        <Star
          className="absolute top-1/2 right-[6%] w-5 h-5 pointer-events-none hidden lg:block"
          style={{ color: "rgba(255,255,255,0.06)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* ── Col 1: Logo + descripción ── */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                {siteData.company.logo ? (
                  <img
                    src={siteData.company.logo}
                    alt={siteData.business.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  >
                    <span
                      className="font-bold text-xl"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#ffffff",
                      }}
                    >
                      {siteData.business.name.charAt(0)}
                    </span>
                  </div>
                )}
                <span
                  className="font-bold text-base"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#ffffff",
                  }}
                >
                  {siteData.business.name}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {siteData.company.description}
              </p>
            </div>

            {/* ── Cols 2-3: Columnas de navegación ── */}
            {siteData.footer.columns.map((column, index) => (
              <div key={index}>
                <ColTitle>{column.title}</ColTitle>
                <ul className="space-y-2.5">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,0.9)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,0.5)")
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ── Col 4: Contacto ── */}
            <div>
              <ColTitle>Contacto</ColTitle>
              <ul className="space-y-3">
                {siteData.company.address && (
                  <li>
                    <ContactItem icon={MapPin}>
                      {siteData.company.address}
                    </ContactItem>
                  </li>
                )}
                {siteData.company.phone && (
                  <li>
                    <ContactItem
                      icon={Phone}
                      href={`tel:${siteData.company.phone}`}
                    >
                      {siteData.company.phone}
                    </ContactItem>
                  </li>
                )}
                {siteData.company.email && (
                  <li>
                    <ContactItem
                      icon={Mail}
                      href={`mailto:${siteData.company.email}`}
                    >
                      {siteData.company.email}
                    </ContactItem>
                  </li>
                )}
                {siteData.company.businessHours && (
                  <li>
                    <ContactItem icon={Clock}>
                      {siteData.company.businessHours}
                    </ContactItem>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* ── Copyright ── */}
          <div
            className="pt-6 flex items-center justify-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Star
              className="w-3.5 h-3.5"
              style={{ color: "var(--color-accent)", opacity: 0.6 }}
            />
            <p
              className="text-xs text-center"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              © {currentYear} {siteData.business.name}. Todos los derechos
              reservados.
            </p>
            <Star
              className="w-3.5 h-3.5"
              style={{ color: "var(--color-accent)", opacity: 0.6 }}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
