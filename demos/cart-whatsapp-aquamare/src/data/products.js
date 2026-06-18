const formatPrice = (num) =>
  num.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

export const products = [
  {
    id: 1,
    slug: 'deposito-jardin-store-it-out-midi-keter',
    name: 'Depósito De Jardín Store It Out Midi Keter',
    shortDescription: 'Gabinete multifuncional para exterior. Ideal para almacenar herramientas, elementos de jardinería y más.',
    description:
      'Optimiza el espacio con un gabinete para depósito Keter multifuncional. Ideal para guardar herramientas, elementos de jardinería, tachos de basura, bicis, productos de pileta o como casilla de filtrado. Sirve para interior como exterior.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/nuevas-para-subir-1-19a67d9f6567250bc917634618553168-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: true,
    retailPrice: 345000,
    comparePrice: 450000,
    discountPercentage: 23,
    tags: [],
  },
  {
    id: 2,
    slug: 'reposera-jaipur-rattan-allibert',
    name: 'Reposera Jardín Jaipur Símil Rattan - Allibert',
    shortDescription: 'Reposera plegable con diseño símil rattan. Resistente, cómoda y elegante para tu jardín.',
    description:
      'Reposera plegable Jaipur es resistente, cómoda y de diseño símil rattan que combina con cualquier otro tipo de mobiliario.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/reposera-jaipur-allibert-para-tienda-nube1-e910755f0c221d095a16630925315191-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: true,
    retailPrice: 204000,
    comparePrice: 263000,
    discountPercentage: 22,
    tags: [],
  },
  {
    id: 3,
    slug: 'juego-muebles-jardin-columbia-7-piezas-keter',
    name: 'Juego de muebles de jardín Columbia 7 piezas - Keter',
    shortDescription: 'Set completo de muebles de exterior para 6 personas. Incluye mesa, sillas y bancos.',
    description:
      'Juegos De Jardín Exterior Columbia 7 piezas. Mesa + 4 sillas + 2 bancos. Ideal para disfrutar con familia y amigos.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/set-columbia-para-tienda-nube-01-a8373a976f116e382415423157770470-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: true,
    retailPrice: 1332000,
    comparePrice: 1435000,
    discountPercentage: 7,
    tags: [],
  },
  {
    id: 4,
    slug: 'reposera-jaipur-icecube-allibert',
    name: 'Reposera Jaipur + Conservadora Ice cube - Allibert',
    shortDescription: 'Combo de reposera Jaipur con mesa conservadora Ice cube. Perfecta para el verano.',
    description:
      'Elegí esta combinación para relajarte en tu jardín este verano con la reposera Jaipur y la mesa conservadora ice cube de la marca Allibert.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/reposera-jaipur-con-la-conservadora-10-1f884cfc99028bb8f017637263403766-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: false,
    retailPrice: 386000,
    comparePrice: 502300,
    discountPercentage: 23,
    tags: [],
  },
  {
    id: 5,
    slug: 'silla-jardin-harmony-blanca-gris-keter',
    name: 'Silla de Jardín Harmony Blanca Gris - Keter',
    shortDescription: 'Silla de exterior con diseño moderno. Resistente a la intemperie y fácil de limpiar.',
    description:
      'La silla harmony tiene una excelente apariencia en cualquier lugar. Te encantará el aspecto moderno de esta silla casi tanto como te encantará relajarte con una bebida fría en la mano.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/tmp_b64_e4fe4c73-9a9d-4ae4-87a8-c1e3de582fd9_864808_874016-7ed46a164f1f610ccb17673701162198-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: false,
    retailPrice: 148700,
    comparePrice: 149600,
    discountPercentage: 1,
    tags: [],
  },
  {
    id: 6,
    slug: 'juego-jardin-3-cuerpos-corfu-keter',
    name: 'Juego De Jardin 3 Cuerpos Corfu - Keter',
    shortDescription: 'Set de muebles de jardín con 2 sillones individuales, sofá de 3 cuerpos y mesa ratona.',
    description:
      'Pasa un gran momento al aire libre en este increíble set de muebles de jardín Keter. Cuenta con 2 sillones individuales, 1 sofá de tres cuerpos y mesa ratona.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/set-korfu-lounge-4-piezas-keter-tienda-nube1-e21bbdd940da88a36d16666027406497-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: true,
    retailPrice: 1854400,
    comparePrice: 2000000,
    discountPercentage: 7,
    tags: [],
  },
  {
    id: 7,
    slug: 'pack-2-sillones-california-capuccino-allibert',
    name: 'Pack de 2 sillones de exterior California capuccino - Allibert',
    shortDescription: 'Pack de 2 sillones símil rattan color capuccino. Muebles de alta calidad para exterior.',
    description:
      'Decora tu patio con este excelente conjunto de sillones de jardín modelo california marca Allibert. Mueble de símil rattan de gran calidad.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/sillon-x2-individuales-california-para-tienda-nube1-a068cbfccf39e52d7715482637083198-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: false,
    retailPrice: 826300,
    comparePrice: 1126300,
    discountPercentage: 27,
    tags: [],
  },
  {
    id: 8,
    slug: 'juego-jardin-bahamas-corner-keter',
    name: 'Juego de jardín Bahamas Corner - Keter',
    shortDescription: 'Set de jardín modular tipo corner. Ideal para grandes espacios exteriores.',
    description:
      'Juego de jardín Bahamas Corner keter. Incluye módulos modulares que puedes armar según tu espacio.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/bahamas-corner-set-21-d776fb0c307181c5ea15423156325577-480-0.webp',
    ],
    category: 'Muebles de jardín',
    featured: false,
    retailPrice: 1042200,
    comparePrice: 1123000,
    discountPercentage: 7,
    tags: [],
  },
  {
    id: 9,
    slug: 'mango-telescopico-4-mts-aluminio-brustec',
    name: 'Mango telescópico 4 mts Aluminio - Brustec',
    shortDescription: 'Mango telescópico de aluminio para limpieza de piscina. Con enganche para barrefondo.',
    description:
      'Mango telescópico 4 mts Acero aluminio para pileta con enganche para barrefondo. Muy resistente y duradero.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/mangot111-d74f5ca6a5867be4c116309511673328-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: true,
    retailPrice: 48700,
    tags: [],
  },
  {
    id: 10,
    slug: 'boya-ionizadora-solar-medus-120m3',
    name: 'Boya Ionizadora Solar Medus - hasta 120m3',
    shortDescription: 'Ionizador solar que reduce el cloro hasta 90%. Para piscinas hasta 120m3.',
    description:
      'Ionizador Solar Medus para Piscina hasta 120m3. Elimina bacterias y mejora la calidad del agua de forma ecológica.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/ionizador-solar-medus-light-120m3-aquamare-05-a77fd69d70bfc289c817738506257817-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: false,
    retailPrice: 95500,
    comparePrice: 112900,
    discountPercentage: 15,
    tags: [],
  },
  {
    id: 11,
    slug: 'filtro-arena-nautilus-f350p-30000l',
    name: 'Filtro de Arena Nautilus F350P (30.000 L)',
    shortDescription: 'Filtro de arena para piscinas de hasta 30.000 litros. Marca Nautilus.',
    description:
      'Mantén tu piscina impecable con el filtro de arena Nautilus F350P para piscinas medianas.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/filtro-f350p-tienda-nube-101-6d666547ff14ba2f4b16103854429785-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: true,
    retailPrice: 180200,
    comparePrice: 195000,
    discountPercentage: 8,
    tags: [],
  },
  {
    id: 12,
    slug: 'canasto-skimmer-brustec',
    name: 'Canasto para skimmer brustec',
    shortDescription: 'Canasto de repuesto para skimmer Brustec. Alta calidad en accesorios PVC.',
    description:
      'Canasto de repuesto para skimmer Brustec. La mejor calidad en accesorios PVC para tu piscina.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/chatgpt-image-13-oct-2025-14_10_50-ff0372891c920c357e17603575669213-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: false,
    retailPrice: 9200,
    tags: [],
  },
  {
    id: 13,
    slug: 'traba-mango-telescopico-brustec',
    name: 'Traba para mango Telescópico - Brustec',
    shortDescription: 'Pieza de ABS de alta resistencia para mango telescópico.',
    description:
      'Pieza de ABS de alta resistencia que une el tubo interno y externo del mango telescópico para limpieza de piscina.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/traba-mango-brustec-2-b68128f6efc6138b7417557030354172-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: false,
    retailPrice: 2300,
    tags: [],
  },
  {
    id: 14,
    slug: 'manguera-piscina-kanaflex-10mts',
    name: 'Manguera para Piscina Kanaflex 1½" x 10 mts',
    shortDescription: 'Manguera flexible con punteras reforzadas. Resiste cloro y rayos UV.',
    description:
      'Manguera Kanaflex 10 m para piscina, duradera y flexible. Resiste cloro, rayos UV y uso intensivo.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/tmp_b64_49b9f3a4-401b-452e-8e30-fe8564da948d_864808_874016-a98bdad999129a0c2a17670189773354-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: false,
    retailPrice: 37030,
    comparePrice: 58700,
    discountPercentage: 37,
    tags: [],
  },
  {
    id: 15,
    slug: 'manguera-piscina-kanaflex-8mts',
    name: 'Manguera para Piscina Kanaflex 1½" x 8 mts',
    shortDescription: 'Manguera flexible de 8 metros. Alta resistencia al sol y cloro.',
    description:
      'Manguera Kanaflex 8 m para piscina, flexible y resistente al sol y cloro. Con punteras reforzadas.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/tmp_b64_f390bfdd-1d08-49e3-9138-744b025550a9_864808_874016-3f2b48f42a36f8305317665110720502-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: false,
    retailPrice: 31300,
    comparePrice: 47100,
    discountPercentage: 34,
    tags: [],
  },
  {
    id: 16,
    slug: 'cepillo-aspirador-esquina-brustec',
    name: 'Cepillo Aspiradora Limpia Esquina - Brustec',
    shortDescription: 'Cepillo para limpiar esquinas de piscina. Marca Brustec.',
    description:
      'Cepillo Aspiradora Limpia Esquina piscina 02.0061 - BRUSTEC. Ideal para llegar a lugares difíciles.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/cepillo-limpia-esquina-brustec-01-480-0.webp',
    ],
    category: 'Accesorios para limpiar piletas',
    featured: false,
    retailPrice: 16000,
    tags: [],
  },
  {
    id: 17,
    slug: 'revestimiento-fiji-10x10cm-atlas-mosaics',
    name: 'Revestimiento piscina Fiji 10x10cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Fiji. Caja de 1,4 m2. Pieza 10x10cm.',
    description:
      'Revestimiento piscina Fiji HD 10x10cm x caja de 1,4 m2. Transforma tu piscina con este revestimiento. Fácil instalación y garantía.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/rev-fiji-contexto-73ecd44118d143bdf017785126430384-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: true,
    retailPrice: 74500,
    comparePrice: 97800,
    discountPercentage: 24,
    tags: [],
  },
  {
    id: 18,
    slug: 'revestimiento-nereu-10x10cm-atlas-mosaics',
    name: 'Revestimiento piscina Nereu 10x10cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Nereu. Caja de 1,4 m2. Pieza 10x10cm.',
    description:
      'Revestimiento piscina Nereu HD 10x10cm x caja de 1,4 m2. Transforma tu piscina con este revestimiento. Fácil instalación y garantía.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/nereu-10x10-2646b2a5a71e3c45dc17702160524184-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: false,
    retailPrice: 74500,
    comparePrice: 97800,
    discountPercentage: 24,
    tags: [],
  },
  {
    id: 19,
    slug: 'revestimiento-cook-10x10cm-atlas-mosaics',
    name: 'Revestimiento piscina Cook 10x10cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Cook. Caja de 1,4 m2. Pieza 10x10cm.',
    description:
      'Revestimiento piscina Cook HD 10x10cm x caja de 1,4 m2. Transforma tu piscina con este revestimiento. Fácil instalación y garantía.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/cook-10x10-f44236a302d8a703e017702164017785-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: false,
    retailPrice: 74500,
    comparePrice: 97800,
    discountPercentage: 24,
    tags: [],
  },
  {
    id: 20,
    slug: 'revestimiento-morea-10x10cm-atlas-mosaics',
    name: 'Revestimiento piscina Morea 10x10cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Morea. Caja de 1,4 m2. Pieza 10x10cm.',
    description:
      'Revestimiento piscina Morea HD 10x10cm x caja de 1,4 m2. Transforma tu piscina con este revestimiento. Fácil instalación y garantía.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/rev-morea-contexto-7c90b8cdcfe8d0ee7417785124659052-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: false,
    retailPrice: 74500,
    comparePrice: 97800,
    discountPercentage: 24,
    tags: [],
  },
  {
    id: 21,
    slug: 'revestimiento-papete-10x10cm-atlas-mosaics',
    name: 'Revestimiento piscina Papete 10x10cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Papete. Caja de 1,4 m2. Pieza 10x10cm.',
    description:
      'Revestimiento piscina Papete 10x10cm x caja de 1,4 m2. Renová tu piscina con este revestimiento. Resistente, fácil de instalar.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/rev-papete-contexto-39dc896f54aef6048217785124882097-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: false,
    retailPrice: 74500,
    comparePrice: 97800,
    discountPercentage: 24,
    tags: [],
  },
  {
    id: 22,
    slug: 'revestimiento-bali-20x20cm-atlas-mosaics',
    name: 'Revestimiento piscina Bali HD 20x20cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Bali. Caja de 1,29 m2. Medida 20x20cm.',
    description:
      'Transforma tu piscina con el revestimiento Bali HD 20x20cm. Antideslizante y duradero, ideal para cualquier espacio.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/tmp_b64_495445c7-c5ef-455f-90b5-efe90b8b752a_864808_874016-005db1573d56ce8a9a17702163000955-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: true,
    retailPrice: 95000,
    comparePrice: 107800,
    discountPercentage: 12,
    tags: [],
  },
  {
    id: 23,
    slug: 'revestimiento-bali-brillante-10x10cm-atlas-mosaics',
    name: 'Revestimiento piscina Bali 10x10cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Bali. Caja de 1,4 m2. Pieza 10x10cm.',
    description:
      'Revestimiento piscina Bali HD 10x10cm x caja de 1,4 m2. Transforma tu piscina con este revestimiento. Fácil instalación y garantía.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/bali-10-x10-013aaf2e6de55f2ee017702163189047-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: false,
    retailPrice: 74500,
    comparePrice: 97800,
    discountPercentage: 24,
    tags: [],
  },
  {
    id: 24,
    slug: 'revestimiento-fiji-brillante-20x20cm-atlas-mosaics',
    name: 'Revestimiento piscina Fiji HD 20x20cm - Atlas Mosaics',
    shortDescription: 'Revestimiento para piscina Fiji. Caja de 1,29 m2. Medida 20x20cm.',
    description:
      'Transforma tu piscina con el revestimiento antideslizante Fiji HD 20x20cm. Ideal para exteriores, duradero y de fácil instalación.',
    images: [
      'https://acdn-us.mitiendanube.com/stores/864/808/products/fiji-20x20-01-fb579f34ff2dfcbd2517702191945640-480-0.webp',
    ],
    category: 'Revestimientos para piscina',
    featured: false,
    retailPrice: 95000,
    comparePrice: 107800,
    discountPercentage: 12,
    tags: [],
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category) {
  if (!category || category === 'Todos') return products
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function searchProducts(query, category) {
  let filtered = products

  if (category && category !== 'Todos') {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (query) {
    const lowerQuery = query.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.shortDescription.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  }

  return filtered
}

export { formatPrice }