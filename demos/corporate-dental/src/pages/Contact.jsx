import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData, content } from "../data/siteData";
import { ContactForm } from "../components/ContactForm";
import { SectionHeader } from "../components/ui/SectionHeader";

export default function Contact() {
  const { title, subtitle, infoTitle } = content.contact;

  return (
    <>
      <section className="relative pt-10 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)] mb-6">
              {title}
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />

            <div>
              <SectionHeader title={infoTitle} className="mb-10" />

              <div className="space-y-6">
                {siteData.company.address && (
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Dirección
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.address}
                      </p>
                    </div>
                  </div>
                )}

                {siteData.company.phone && (
                  <a
                    href={`tel:${siteData.company.phone}`}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-primary)]/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Teléfono
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.phone}
                      </p>
                    </div>
                  </a>
                )}

                {siteData.company.email && (
                  <a
                    href={`mailto:${siteData.company.email}`}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-primary)]/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Email
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.email}
                      </p>
                    </div>
                  </a>
                )}

                {siteData.company.businessHours && (
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Horarios
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.businessHours}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {siteData.company.address && (
                <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--color-border)]">
                  <iframe
                    title={`Mapa de ${siteData.company.address}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(siteData.company.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
