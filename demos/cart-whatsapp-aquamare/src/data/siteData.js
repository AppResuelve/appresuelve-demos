export const siteData = {
  business: {
    name: 'AquaMarina',
  },

  contact: {
    receiveEmailsAt: 'hola@aquamare.com.ar',
    whatsapp: '5493834971799',
  },

  company: {
    slogan: 'Tu espacio exterior, nuestra pasión',
    description:
      'Encontrá los mejores muebles de jardín, piscinas y accesorios para tu espacio al aire libre. Calidad, diseño y precio para disfrutar todo el año.',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780322898/aqua_300_x_150_px_vrmdvy.png',

    phone: '+54 11 2345-6789',
    email: 'hola@aquamare.com.ar',
    address: 'Av. Corrientes 1234, Buenos Aires',

    businessHours: 'Lunes a Sábados 9:00 - 18:00',

    social: {
      instagram: 'https://instagram.com/aquamaretiendaonline',
      facebook: 'https://facebook.com/aquamare.piscinas',
      linkedin: '',
    },
  },

  branding: {
    primaryColor: '#022179',
    secondaryColor: '#54AFE6',
    fontCombinationId: 'minimalista',
  },

  navbar: {
    logoOnly: true,
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Productos', href: '/productos' },
      { label: 'Carrito', href: '/carrito', showCartCount: true },
      { label: 'Contacto', href: '/contacto' },
    ],
    ctaText: 'Ver carrito',
  },

  footer: {
    columns: [
      {
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '/' },
          { label: 'Productos', href: '/productos' },
          { label: 'Carrito', href: '/carrito' },
          { label: 'Contacto', href: '/contacto' },
        ],
      },
      {
        title: 'Categorías',
        links: [
          { label: 'Muebles de jardín', href: '/productos?cat=Muebles+de+jardín' },
          { label: 'Accesorios para limpiar piletas', href: '/productos?cat=Accesorios+para+limpiar+piletas' },
          { label: 'Revestimientos para piscina', href: '/productos?cat=Revestimientos+para+piscina' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: 'hola@aquamare.com.ar', href: 'mailto:hola@aquamare.com.ar' },
          { label: '+54 11 2345-6789', href: 'tel:+541123456789' },
          { label: 'WhatsApp', href: 'https://wa.me/5493834971799' },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: 'aquamare-cart',
    showDeliveryModal: true,
  },
}

export const content = {
  home: {
    hero: {
      badge: 'Bienvenidos',
      title: 'Los mejores productos',
      highlightedText: 'para tu espacio exterior',
      subtitle:
        'Descubrí nuestra selección de muebles de jardín, piscinas y accesorios para disfrutar al aire libre.',
      primaryButtonText: 'Ver productos',
      primaryButtonLink: '/productos',
      secondaryButtonText: 'Contactar',
      secondaryButtonLink: '/contacto',
    },
    featuredTitle: 'Productos destacados',
    featuredSubtitle: 'Los más elegidos por nuestros clientes',
    categoriesTitle: 'Categorías',
    categoriesSubtitle: 'Explorá por tipo de producto',
    cta: {
      title: '¿No encontrás lo que buscás?',
      subtitle: 'Contactanos y te ayudamos a encontrar lo que necesitás.',
      buttonText: 'Escribinos',
      buttonLink: '/contacto',
    },
  },

  products: {
    badge: 'Catálogo',
    title: 'Nuestros productos',
    subtitle: 'Encontrá lo que necesitás',
    noResults: 'No hay productos que coincidan con tu búsqueda.',
    clearFilters: 'Limpiar filtros',
  },

  productDetail: {
    backTo: 'Volver a productos',
    categoryLabel: 'Categoría',
    tagsLabel: 'Etiquetas',
    addToCart: 'Agregar al carrito',
    addedToCart: '¡Agregado!',
    relatedTitle: 'Productos relacionados',
  },

  cart: {
    title: 'Tu carrito',
    emptyTitle: 'Tu carrito está vacío',
    emptyMessage: 'Agregá productos para poder solicitar tu pedido.',
    browseProducts: 'Ver productos',
    itemCount: '{count} producto(s)',
    subtotal: 'Subtotal',
    total: 'Total estimado',
    requestQuote: 'Solicitar por WhatsApp',
    removeItem: 'Eliminar',
    clearCart: 'Vaciar carrito',
    continueShopping: 'Seguir comprando',
  },

  contact: {
    badge: 'Contacto',
    title: 'Hablemos',
    subtitle:
      '¿Tenés alguna pregunta o necesitás una cotización? Escribinos y te respondemos a la brevedad.',
    infoTitle: 'Encontranos',
  },

  notFound: {
    title: '404',
    subtitle: 'Página no encontrada',
    message: 'Lo sentimos, la página que buscás no existe o fue movida.',
    buttonText: 'Volver al inicio',
    buttonLink: '/',
  },
}