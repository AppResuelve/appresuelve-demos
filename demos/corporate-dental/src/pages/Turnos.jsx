import { useState } from "react";
import { Calendar, Clock, User, Phone, ChevronRight, MapPin, Stethoscope, AlertCircle } from "lucide-react";
import { services } from "../data/services";
import { siteData } from "../data/siteData";

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const TIME_BANDS = [
  { value: "mañana", label: "Mañana (9:00 - 13:00 hs)" },
  { value: "tarde", label: "Tarde (14:00 - 18:00 hs)" },
  { value: "indistinto", label: "Indistinto" },
];

export default function Turnos() {
  const [form, setForm] = useState({
    firstVisit: "",
    service: "",
    days: [],
    timeBand: "",
    name: "",
    phone: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  const toggleDay = (day) => {
    setForm((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
    setErrors((prev) => ({ ...prev, days: "" }));
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstVisit) newErrors.firstVisit = "Seleccioná una opción";
    if (!form.service) newErrors.service = "Seleccioná un servicio";
    if (form.days.length === 0) newErrors.days = "Seleccioná al menos un día";
    if (!form.timeBand) newErrors.timeBand = "Seleccioná una banda horaria";
    if (!form.name || form.name.trim().length < 3)
      newErrors.name = "Ingresá tu nombre completo";
    if (!form.phone || form.phone.replace(/\D/g, "").length < 8)
      newErrors.phone = "Ingresá un teléfono válido";
    if (!form.consent)
      newErrors.consent = "Debés aceptar el consentimiento";
    return newErrors;
  };

  const buildWhatsAppMessage = () => {
    const daysStr = form.days.join(", ");
    const message = `🦷 *Solicitud de turno*

🏥 *¿Primera visita?:* ${form.firstVisit === "si" ? "Sí" : "No"}
🔧 *Servicio:* ${form.service}
📅 *Día preferido:* ${daysStr}
⏰ *Horario:* ${TIME_BANDS.find((t) => t.value === form.timeBand)?.label || form.timeBand}
👤 *Nombre:* ${form.name.trim()}
📱 *Teléfono:* ${form.phone.trim()}`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = buildWhatsAppMessage();
    const whatsappNumber = siteData.contact.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <section className="relative pt-16 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-6">
              <Calendar className="w-4 h-4" />
              Turnos Online
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-text-primary)] mb-4">
              Solicitá tu turno
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
              Completá el formulario y te confirmamos la disponibilidad a la
              brevedad vía WhatsApp. También podés consultarnos cualquier duda
              sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 md:p-10"
            noValidate
          >
            <div className="space-y-8">
              {/* ¿Primera visita? */}
              <fieldset>
                <legend className="flex items-center gap-2 text-base font-semibold text-[var(--color-text-primary)] mb-4">
                  <Stethoscope className="w-5 h-5 text-[var(--color-primary)]" />
                  ¿Es tu primera visita?
                </legend>
                <div className="flex gap-3">
                  {[
                    { value: "si", label: "Sí, primera vez" },
                    { value: "no", label: "No, ya soy paciente" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleChange("firstVisit", opt.value)}
                      className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                        form.firstVisit === opt.value
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.firstVisit && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.firstVisit}
                  </p>
                )}
              </fieldset>

              {/* Servicio */}
              <div>
                <label className="flex items-center gap-2 text-base font-semibold text-[var(--color-text-primary)] mb-4">
                  <ChevronRight className="w-5 h-5 text-[var(--color-primary)]" />
                  Servicio requerido
                </label>
                <select
                  value={form.service}
                  onChange={(e) => handleChange("service", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors appearance-none bg-[var(--color-background)] ${
                    errors.service
                      ? "border-red-500"
                      : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                  } focus:outline-none text-[var(--color-text-primary)]`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.75rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.25rem",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">Seleccionar servicio...</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Días de preferencia */}
              <fieldset>
                <legend className="flex items-center gap-2 text-base font-semibold text-[var(--color-text-primary)] mb-4">
                  <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                  Días de preferencia
                </legend>
                <div className="flex flex-wrap gap-2">
                  {DAYS.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        form.days.includes(day)
                          ? "bg-[var(--color-primary)] text-white"
                          : "border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/30"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
                {errors.days && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.days}
                  </p>
                )}
              </fieldset>

              {/* Banda horaria */}
              <fieldset>
                <legend className="flex items-center gap-2 text-base font-semibold text-[var(--color-text-primary)] mb-4">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  Banda horaria de preferencia
                </legend>
                <div className="space-y-2">
                  {TIME_BANDS.map((band) => (
                    <button
                      key={band.value}
                      type="button"
                      onClick={() => handleChange("timeBand", band.value)}
                      className={`w-full text-left py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                        form.timeBand === band.value
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                          : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/30"
                      }`}
                    >
                      {band.label}
                    </button>
                  ))}
                </div>
                {errors.timeBand && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.timeBand}
                  </p>
                )}
              </fieldset>

              {/* Nombre */}
              <div>
                <label className="flex items-center gap-2 text-base font-semibold text-[var(--color-text-primary)] mb-4">
                  <User className="w-5 h-5 text-[var(--color-primary)]" />
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Juan Pérez"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-[var(--color-background)] placeholder-[var(--color-text-muted)] ${
                    errors.name
                      ? "border-red-500"
                      : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                  } focus:outline-none text-[var(--color-text-primary)]`}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="flex items-center gap-2 text-base font-semibold text-[var(--color-text-primary)] mb-4">
                  <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="11 3456-7890"
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-[var(--color-background)] placeholder-[var(--color-text-muted)] ${
                    errors.phone
                      ? "border-red-500"
                      : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
                  } focus:outline-none text-[var(--color-text-primary)]`}
                />
                {errors.phone && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Consentimiento */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) =>
                      handleChange("consent", e.target.checked)
                    }
                    className="mt-0.5 w-5 h-5 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer"
                  />
                  <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Consiento el tratamiento de mis datos con el propósito de
                    ser contactado/a para la coordinación de turnos.
                  </span>
                </label>
                {errors.consent && (
                  <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-10 py-4 rounded-2xl bg-[var(--color-primary)] text-white font-semibold text-base hover:opacity-90 hover:-translate-y-0.5 transition-all"
            >
              Solicitar turno
            </button>
          </form>
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
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Información del consultorio
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Horarios
                    </p>
                    <p className="text-sm font-medium">
                      {siteData.company.businessHours}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[var(--color-text-muted)]">
                      Dirección
                    </p>
                    <p className="text-sm font-medium">
                      {siteData.company.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
