export const siteData = {
  business: {
    name: "CarShine",
  },

  contact: {
    receiveEmailsAt: "hola@carshine.com.ar",
    whatsapp: "5493834971799",
  },

  company: {
    slogan: "Lubricantes y cuidado automotor",
    description:
      "Encontrá los mejores aceites, aditivos y productos de limpieza para tu vehículo. Calidad profesional al mejor precio.",
    logo: "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780325560/carShine_300_x_100_px_xhhjgu.png",

    phone: "+54 11 2345-6789",
    email: "hola@carshine.com.ar",
    address: "Av. Corrientes 1234, Buenos Aires",

    businessHours: "Lunes a Sábados 9:00 - 18:00",

    social: {
      instagram: "https://instagram.com/carshine",
      facebook: "https://facebook.com/carshine",
      linkedin: "",
    },
  },

  branding: {
    primaryColor: "#f59e0b",
    secondaryColor: "#fef3c7",
    logoBackgroundColor: "#f59e0b",
    fontCombinationId: "minimalista",
    carouselImages: [
      "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780327757/BANNERS_PEDI_BARDAHL_1920_x_500_px_pupct6.png",
      "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780327690/Banner_lanzamiento_LIQUIDO_PARA_FRENOS_1920_x_500_px_jyjuiq.png",
      "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780327649/4_10_ins1yl.png",
    ],
    carouselMobileImages: [
      "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780328526/1_3_tipdlq.png",
      "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780328539/2_6_a8kwqu.png",
      "https://res.cloudinary.com/dfun5vbsf/image/upload/v1780328536/Banner_lanzamiento_LIQUIDO_PARA_FRENOS_641_x_289_px_hbbj0s.png",
    ],
    carouselMaxHeight: "max-h-[400px]",
    carouselObjectFit: "object-contain",
    carouselAutoplay: true,
    carouselAutoplayInterval: 6000,
  },

  navbar: {
    logoOnly: true,
    items: [
      { label: "Inicio", href: "/" },
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
          { label: "Productos", href: "/productos" },
          { label: "Carrito", href: "/carrito" },
          { label: "Contacto", href: "/contacto" },
        ],
      },
      {
        title: "Categorías",
        links: [
          { label: "Aceite Mineral", href: "/productos?cat=Aceite+Mineral" },
          {
            label: "Aceite Semisintético",
            href: "/productos?cat=Aceite+Semisintetico",
          },
          {
            label: "Aceite Sintético",
            href: "/productos?cat=Aceite+Sintetico",
          },
          { label: "Aditivos", href: "/productos?cat=Aditivos" },
          { label: "Limpieza", href: "/productos?cat=Limpieza" },
        ],
      },
      {
        title: "Contacto",
        links: [
          {
            label: "hola@carshine.com.ar",
            href: "mailto:hola@carshine.com.ar",
          },
          { label: "+54 11 2345-6789", href: "tel:+541123456789" },
          { label: "WhatsApp", href: "https://wa.me/5493834971799" },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: "carshine-cart",
    showDeliveryModal: true,
  },
};

export const content = {
  home: {
    hero: {
      badge: "Bienvenidos",
      title: "Los mejores productos",
      highlightedText: "para tu vehículo",
      subtitle:
        "Descubrí nuestra selección de lubricantes, aceites y aditivos de alta calidad.",
      primaryButtonText: "Ver productos",
      primaryButtonLink: "/productos",
      secondaryButtonText: "Contactar",
      secondaryButtonLink: "/contacto",
    },
    featuredTitle: "Productos destacados",
    featuredSubtitle: "Los más elegidos por nuestros clientes",
    categoriesTitle: "Categorías",
    categoriesSubtitle: "Explorá por tipo de producto",
    cta: {
      title: "¿No encontrás lo que buscás?",
      subtitle: "Contactanos y te ayudamos a encontrar lo que necesitás.",
      buttonText: "Escribinos",
      buttonLink: "/contacto",
    },
  },

  products: {
    badge: "Catálogo",
    title: "Nuestros productos",
    subtitle: "Encontrá lo que necesitás",
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
      "¿Tenés alguna pregunta o necesitás una cotización? Escribinos y te respondemos a la brevedad.",
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
