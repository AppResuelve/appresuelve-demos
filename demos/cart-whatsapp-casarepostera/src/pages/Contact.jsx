import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData, content } from "../data/siteData";
import { ContactForm } from "../components/ContactForm";
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

/* ── Card de dato de contacto ── */
function InfoCard({ icon: Icon, label, children, href }) {
  const inner = (
    <div className="flex items-start gap-4">
      {/* Ícono en cuadrado crema con borde dorado sutil */}
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
        style={{
          backgroundColor: "var(--color-background)",
          border: "1px solid var(--color-border)",
        }}
      >
        <Icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
      </div>
      <div>
        <p
          className="text-xs font-bold tracking-[0.15em] uppercase mb-1"
          style={{ color: "var(--color-text-muted)" }}
        >
          {label}
        </p>
        <div
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-primary)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  const base = `
    block p-4 rounded-xl transition-all duration-200
    border border-[var(--color-border)]
    bg-white
    hover:border-[var(--color-primary)]/40
    hover:shadow-[0_4px_16px_rgba(26,158,143,0.08)]
  `;

  if (href)
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  return <div className={base}>{inner}</div>;
}

/* ── Título de columna ── */
function ColLabel({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <span
        className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-1"
        style={{ color: "var(--color-accent)" }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-2xl font-bold"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h2>
      <div className="flex items-center gap-2 mt-3">
        <div
          className="h-px w-10"
          style={{ backgroundColor: "var(--color-border-hover)" }}
        />
        <Dot className="w-2 h-2" style={{ color: "var(--color-accent)" }} />
        <div
          className="h-px w-20"
          style={{ backgroundColor: "var(--color-border-hover)" }}
        />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════════════════════════════ */
export default function Contact() {
  const { title, subtitle, infoTitle } = content.contact;

  return (
    <>
      {/* ══ HERO — crema + scallop dorado ══ */}
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
            className="absolute top-0 right-0 w-[32%] h-full hidden lg:block"
            style={{ backgroundColor: "var(--color-primary-light)" }}
          />
          <div
            className="absolute top-8 right-[32%] w-px h-[85%] hidden lg:block"
            style={{ backgroundColor: "var(--color-primary)", opacity: 0.12 }}
          />
        </div>

        {/* Estrellas decorativas */}
        <Star
          className="absolute top-8 right-[26%] w-5 h-5 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.45 }}
        />
        <Star
          className="absolute bottom-16 right-[10%] w-9 h-9 hidden lg:block"
          style={{ color: "var(--color-primary)", opacity: 0.2 }}
        />
        <Dot
          className="absolute top-20 left-[8%] w-2.5 h-2.5 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.35 }}
        />
        <Dot
          className="absolute bottom-20 left-[3%] w-2 h-2 hidden lg:block"
          style={{ color: "var(--color-primary)", opacity: 0.25 }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Contacto
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

        <ScallopDivider fromColor="#C8922A" />
      </section>
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
            {/* ── Columna izquierda: Formulario ── */}
            <div>
              <ColLabel eyebrow="Escribinos" title="Envianos tu mensaje" />
              <ContactForm />
            </div>

            {/* ── Columna derecha: Info ── */}
            <div>
              <ColLabel eyebrow="Encontranos" title={infoTitle} />

              <div className="space-y-3">
                {siteData.company.address && (
                  <InfoCard icon={MapPin} label="Dirección">
                    {siteData.company.address}
                  </InfoCard>
                )}
                {siteData.company.phone && (
                  <InfoCard
                    icon={Phone}
                    label="Teléfono"
                    href={`tel:${siteData.company.phone}`}
                  >
                    {siteData.company.phone}
                  </InfoCard>
                )}
                {siteData.company.email && (
                  <InfoCard
                    icon={Mail}
                    label="Email"
                    href={`mailto:${siteData.company.email}`}
                  >
                    {siteData.company.email}
                  </InfoCard>
                )}
                {siteData.company.businessHours && (
                  <InfoCard icon={Clock} label="Horarios">
                    {siteData.company.businessHours}
                  </InfoCard>
                )}
              </div>

              {/* Mapa */}
              {siteData.company.address && (
                <div
                  className="mt-6 rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid var(--color-border)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <iframe
                    title={`Mapa de ${siteData.company.address}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(siteData.company.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="280"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA WHATSAPP — cierre oscuro consistente con footer ══ */}
      {siteData.contact?.whatsapp && (
        <>
          <section
            className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-14"
            style={{ backgroundColor: "#0e6b60" }}
          >
            {/* Estrellas watermark */}
            <Star
              className="absolute right-10 top-6 w-14 h-14 pointer-events-none hidden md:block"
              style={{ color: "rgba(255,255,255,0.05)" }}
            />
            <Star
              className="absolute left-6 bottom-4 w-9 h-9 pointer-events-none hidden md:block"
              style={{ color: "var(--color-accent)", opacity: 0.1 }}
            />
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              aria-hidden="true"
            />

            <div className="relative max-w-xl mx-auto text-center">
              <Star
                className="w-7 h-7 mx-auto mb-4"
                style={{ color: "var(--color-accent)", opacity: 0.8 }}
              />
              <span
                className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                Respuesta rápida
              </span>
              <h2
                className="font-bold mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#ffffff",
                }}
              >
                ¿Preferís hablar por WhatsApp?
              </h2>
              <p
                className="text-sm mb-8"
                style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
              >
                Escribinos directo y te respondemos al instante.
              </p>
              <a
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--color-accent)",
                  color: "#ffffff",
                  boxShadow: "0 4px 20px rgba(200,146,42,0.35)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-accent-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-accent)")
                }
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                Escribinos por WhatsApp
              </a>
            </div>
          </section>
        </>
      )}
    </>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
