import { MessageCircle } from 'lucide-react'
import { siteData } from '../../data/siteData'

export function FloatingWhatsAppButton({ className = '' }) {
  const whatsappNumber = siteData.contact.whatsapp?.replace(/\D/g, '') || ''
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : '#'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center md:justify-start gap-2 p-3 md:px-4 md:py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ${className}`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline">Contactanos</span>
    </a>
  )
}