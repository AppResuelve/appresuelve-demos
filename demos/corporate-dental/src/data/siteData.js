export const siteData = {
  business: {
    name: "Dental Corporate",
  },

  contact: {
    receiveEmailsAt: "hola@corporatedental.com",
    whatsapp: "5493834971799",
  },

  company: {
    slogan: "Odontología profesional",
    description:
      "Consultorio odontológico especializado en brindar atención integral para toda la familia. Tecnología de punta y profesionales con años de experiencia para cuidar tu sonrisa.",
    logo: "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780679888/corporate-dental_vsqich.png",
    phone: "+54 11 4567-8901",
    email: "hola@corporatedental.com",
    address: "Av. Santa Fe 2450, Buenos Aires",

    businessHours: "Lunes a Viernes 9:00 - 19:00, Sábados 9:00 - 13:00",

    social: {
      instagram: "https://instagram.com/corporatedental",
      facebook: "https://facebook.com/corporatedental",
      linkedin: "",
    },
  },

  branding: {
    primaryColor: "#1e40af",
    secondaryColor: "#dbeafe",
    logoBackgroundColor: "transparent",
    fontCombinationId: "minimalista",
    carouselImages: [
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&h=500&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&h=500&fit=crop",
    ],
    carouselMobileImages: [
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=641&h=289&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=641&h=289&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=641&h=289&fit=crop",
    ],
    carouselMaxHeight: "max-h-[500px]",
    carouselObjectFit: "object-cover",
    carouselAutoplay: true,
    carouselAutoplayInterval: 5000,
  },

  navbar: {
    logoOnly: false,
    items: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "/servicios" },
      { label: "Turnos", href: "/turnos" },
      { label: "Productos", href: "/productos" },
      { label: "Carrito", href: "/carrito", showCartCount: true },
      { label: "Contacto", href: "/contacto" },
    ],
    ctaText: "Ver carrito",
  },

  footer: {
    columns: [
      {
        title: "Navegación",
        links: [
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Turnos", href: "/turnos" },
          { label: "Productos", href: "/productos" },
          { label: "Carrito", href: "/carrito" },
          { label: "Contacto", href: "/contacto" },
        ],
      },
      {
        title: "Servicios",
        links: [
          { label: "Limpieza Dental", href: "/servicios#limpieza-dental" },
          { label: "Blanqueamiento", href: "/servicios#blanqueamiento" },
          { label: "Ortodoncia", href: "/servicios#ortodoncia" },
          { label: "Implantes", href: "/servicios#implantes" },
          { label: "Endodoncia", href: "/servicios#endodoncia" },
        ],
      },
      {
        title: "Contacto",
        links: [
          {
            label: "hola@corporatedental.com",
            href: "mailto:hola@corporatedental.com",
          },
          { label: "+54 11 4567-8901", href: "tel:+541145678901" },
          { label: "WhatsApp", href: "https://wa.me/5493834971799" },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: "corporate-dental-cart",
    showDeliveryModal: true,
  },
};

export const content = {
  home: {
    hero: {
      badge: "Consultorio odontológico",
      title: "Cuidamos tu",
      highlightedText: "sonrisa",
      subtitle:
        "Atención odontológica integral con tecnología de última generación. Profesionales dedicados a la salud bucal de toda la familia.",
      primaryButtonText: "Ver servicios",
      primaryButtonLink: "/servicios",
      secondaryButtonText: "Contactanos",
      secondaryButtonLink: "/contacto",
    },
    featuredTitle: "Productos recomendados",
    featuredSubtitle: "Seleccionados por nuestros profesionales",
    servicesTitle: "Nuestros servicios",
    servicesSubtitle: "Atención odontológica integral para toda la familia",
    cta: {
      title: "¿Querés agendar un turno?",
      subtitle:
        "Escribinos por WhatsApp y coordinamos una consulta a la brevedad.",
      buttonText: "Agendar turno",
      buttonLink: "/turnos",
    },
  },

  products: {
    badge: "Productos",
    title: "Productos dentales",
    subtitle: "Recomendados por nuestros odontólogos",
    noResults: "No hay productos que coincidan con tu búsqueda.",
    clearFilters: "Limpiar filtros",
  },

  productDetail: {
    backTo: "Volver a productos",
    categoryLabel: "Categoría",
    tagsLabel: "Etiquetas",
    addToCart: "Agregar al carrito",
    addedToCart: "¡Agregado!",
    relatedTitle: "Productos relacionados",
  },

  cart: {
    title: "Tu carrito",
    emptyTitle: "Tu carrito está vacío",
    emptyMessage: "Agregá productos para poder solicitar tu pedido.",
    browseProducts: "Ver productos",
    itemCount: "{count} producto(s)",
    subtotal: "Subtotal",
    total: "Total estimado",
    requestQuote: "Solicitar por WhatsApp",
    removeItem: "Eliminar",
    clearCart: "Vaciar carrito",
    continueShopping: "Seguir comprando",
  },

  contact: {
    badge: "Contacto",
    title: "Hablemos",
    subtitle:
      "¿Tenés alguna consulta o querés agendar un turno? Escribinos y te respondemos a la brevedad.",
    infoTitle: "Encontranos",
  },

  notFound: {
    title: "404",
    subtitle: "Página no encontrada",
    message: "Lo sentimos, la página que buscás no existe o fue movida.",
    buttonText: "Volver al inicio",
    buttonLink: "/",
  },
};
