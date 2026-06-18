import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteData } from '../../data/siteData'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {siteData.company.logo ? (
                <img
                  src={siteData.company.logo}
                  alt={siteData.business.name}
                  className="h-20 w-auto rounded-md object-contain"
                />
              ) : (
                <div className="w-20 h-20 rounded-md bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {siteData.business.name.charAt(0)}
                  </span>
                </div>
              )}
              {(!siteData.navbar.logoOnly) && (
                <span className="text-xl font-bold text-[var(--color-text-primary)]">
                  {siteData.business.name}
                </span>
              )}
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              {siteData.company.description}
            </p>
          </div>

          {siteData.footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              {siteData.company.address && (
                <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                  <MapPin className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                  <span>{siteData.company.address}</span>
                </li>
              )}
              {siteData.company.phone && (
                <li>
                  <a
                    href={`tel:${siteData.company.phone}`}
                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Phone className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                    <span>{siteData.company.phone}</span>
                  </a>
                </li>
              )}
              {siteData.company.email && (
                <li>
                  <a
                    href={`mailto:${siteData.company.email}`}
                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Mail className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                    <span>{siteData.company.email}</span>
                  </a>
                </li>
              )}
              {siteData.company.businessHours && (
                <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                  <Clock className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                  <span>{siteData.company.businessHours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] text-center">
            © {currentYear} {siteData.business.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}