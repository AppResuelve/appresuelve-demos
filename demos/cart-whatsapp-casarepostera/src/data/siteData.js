export const siteData = {
  business: {
    name: 'Casa Repostera',
  },

  contact: {
    receiveEmailsAt: 'hola@casarepostera.com.ar',
    whatsapp: '5493834971799',
  },

  company: {
    slogan: 'Ingredientes y decoraciones para repostería profesional',
    description:
      'Somos tu aliado en la cocina. Encontrá los mejores ingredientes de repostería y decoraciones para crear obras maestras dulces.',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780181814/flavourlab-ojo_300_x_300_px_2_qp3hwv.png',

    phone: '+54 11 5555-1234',
    email: 'hola@casarepostera.com.ar',
    address: 'Av. Belgrano 322, Resistencia, Chaco',

    businessHours: 'Lunes a Viernes 9:00 - 18:00',

    social: {
      instagram: 'https://instagram.com/casarepostera',
      facebook: '',
      linkedin: '',
    },
  },

  branding: {
    primaryColor: '#08A58C',
    secondaryColor: '#C9E7E4',
    fontCombinationId: 'artesanal',
  },

  navbar: {
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
          { label: 'Ingredientes', href: '/productos?cat=Ingredientes' },
          { label: 'Decoraciones', href: '/productos?cat=Decoraciones' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: 'hola@casarepostera.com.ar', href: 'mailto:hola@casarepostera.com.ar' },
          { label: '+54 11 5555-1234', href: 'tel:+541155551234' },
          { label: 'WhatsApp', href: 'https://wa.me/5493834971799' },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: 'casarepostera-cart',
    showDeliveryModal: true,
  },
}

export const content = {
  home: {
    hero: {
      badge: 'Bienvenidos',
      title: 'Los mejores productos',
      highlightedText: 'para tu repostería',
      subtitle:
        'Descubrí nuestra selección de ingredientes y decoraciones para crear preparaciones únicas.',
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
