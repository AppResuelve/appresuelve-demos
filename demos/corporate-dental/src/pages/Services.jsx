import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Smile, ShieldCheck, Shield, Stethoscope, Clock, MapPin } from "lucide-react";
import { services } from "../data/services";
import { siteData } from "../data/siteData";
import { SectionHeader } from "../components/ui/SectionHeader";

const iconMap = {
  Sparkles,
  Star,
  Smile,
  ShieldCheck,
  Shield,
  Stethoscope,
}

export default function Services() {
  return (
    <>
      <section className="relative pt-16 md:pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            title="Nuestros servicios"
            subtitle="Brindamos atención odontológica integral con tecnología de vanguardia y un equipo de profesionales dedicados a tu salud bucal."
            className="text-center mb-16"
          />
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="group flex flex-col p-8 md:p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-primary)]/30 hover:shadow-md transition-all duration-300 scroll-mt-24"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)]/15 transition-colors">
                      {Icon && <Icon className="w-7 h-7 text-[var(--color-primary)]" />}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {service.name}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-5 border-t border-[var(--color-border)]">
                    <Link
                      to="/contacto"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                    >
                      Consultar por este servicio
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
              <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[var(--color-secondary)]/5 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                ¿Listo para agendar tu turno?
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                Elegí el día y horario que mejor se adapte a vos. También podés escribirnos por WhatsApp para consultas sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>{siteData.company.businessHours}</span>
                </div>
                <span className="hidden sm:block text-[var(--color-text-muted)]">•</span>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>{siteData.company.address}</span>
                </div>
              </div>
              <Link
                to="/turnos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold hover:-translate-y-0.5 transition-all"
              >
                Agendar turno
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
