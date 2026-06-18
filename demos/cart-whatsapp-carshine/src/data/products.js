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
    slug: 'aceite-20w50-mineral-xtc-1l',
    name: 'Aceite 20w50 Mineral XTC 1L',
    shortDescription: 'Aceite mineral para motores nafteros y diesel. Protección confiable.',
    description:
      'Aceite mineral de alta calidad para motores nafteros y diesel. Ideal para vehículos antiguos o con alto kilometaje. Protege el motor y extiende su vida útil.',
    images: [
      'https://bardahl.com.ar/740-home_default/aceite-20w50-mineral-xtc-12-x-1-l.jpg',
    ],
    category: 'Aceite Mineral',
    featured: true,
    retailPrice: 18500,
    comparePrice: 21000,
    discountPercentage: 12,
    tags: [],
  },
  {
    id: 2,
    slug: 'aceite-15w40-mineral-diesel-1l',
    name: 'Aceite 15w40 Mineral Diesel 1L',
    shortDescription: 'Aceite mineral específico para motores diesel. Alto rendimiento.',
    description:
      'Aceite mineral formulado para motores diesel. Excelente protección contra el desgaste y formación de depósitos. Ideal para camiones y vehículos de carga.',
    images: [
      'https://bardahl.com.ar/736-home_default/aceite-15w40-mineral-diesel-12-x-1-l.jpg',
    ],
    category: 'Aceite Mineral',
    featured: false,
    retailPrice: 19200,
    tags: [],
  },
  {
    id: 3,
    slug: 'aceite-2t-motos-200ml',
    name: 'Aceite 2T Motos 200ml',
    shortDescription: 'Aceite mineral para motores 2 tiempos de motos y herramientas.',
    description:
      'Aceite mineral para motores de 2 tiempos de motorcycles, cortadoras de césped y otras herramientas. Mezcla fácil y protección efectiva.',
    images: [
      'https://bardahl.com.ar/504-home_default/aceite-2t-motos-24-x-200-ml.jpg',
    ],
    category: 'Aceite Mineral',
    featured: false,
    retailPrice: 3500,
    tags: [],
  },
  {
    id: 4,
    slug: 'aceite-transmision-gl5-80w90-1l',
    name: 'Aceite Transmision GL5 80W90 1L',
    shortDescription: 'Aceite para caja y diferencial. Protección antidesgaste.',
    description:
      'Aceite de transmisión mineral para cajas de cambio, diferenciales y sistemas hidráulicos. Alta protección contra desgaste y corrosión.',
    images: [
      'https://bardahl.com.ar/707-home_default/aceite-transmision-gl5-80w90-12-x-1-l.jpg',
    ],
    category: 'Aceite Mineral',
    featured: false,
    retailPrice: 16800,
    tags: [],
  },
  {
    id: 5,
    slug: 'aceite-10w40-semisintetico-1l',
    name: 'Aceite 10w40 Semisintetico 1L',
    shortDescription: 'Aceite semisintético multi viscosidad. Rendimiento superior.',
    description:
      'Aceite semisintético de alta calidad para motores nafteros. Excelente fluidity a bajas temperaturas y protección a altas temperaturas.',
    images: [
      'https://bardahl.com.ar/730-home_default/aceite-10w40-semisintetico-12-x-1-l.jpg',
    ],
    category: 'Aceite Semisintetico',
    featured: true,
    retailPrice: 24500,
    comparePrice: 28000,
    discountPercentage: 13,
    tags: [],
  },
  {
    id: 6,
    slug: 'aceite-4t-motos-20w50-edicion-limitada-1l',
    name: 'Aceite 4T Motos 20w50 Edición Limitada 1L',
    shortDescription: 'Aceite semisintético premium para motos de alta cilindrada.',
    description:
      'Aceite semisintético premium desarrollado para motores de 4 tiempos de motorcycles.Excelente protección y rendimiento en condiciones extremas.',
    images: [
      'https://bardahl.com.ar/83-home_default/aceite-4t-motos-20w50-edicion-limitada-12-x-1-l.jpg',
    ],
    category: 'Aceite Semisintetico',
    featured: false,
    retailPrice: 26800,
    tags: [],
  },
  {
    id: 7,
    slug: 'aceite-5w40-sintetico-1l',
    name: 'Aceite 5w40 Sintetico 1L',
    shortDescription: 'Aceite fully synthetic para máximo rendimiento del motor.',
    description:
      'Aceite fully synthetic de última generación. Máxima protección del motor incluso en las condiciones más exigentes. Ideal para vehículos modernos.',
    images: [
      'https://bardahl.com.ar/711-home_default/aceite-5w40-sintetico-12-x-1-l.jpg',
    ],
    category: 'Aceite Sintetico',
    featured: true,
    retailPrice: 38500,
    comparePrice: 44000,
    discountPercentage: 13,
    tags: [],
  },
  {
    id: 8,
    slug: 'aceite-5w40-sintetico-20l',
    name: 'Aceite 5w40 Sintetico 20L',
    shortDescription: 'Presentación industrial de aceite sintético. Ahorrá más.',
    description:
      'Garrafa de 20 litros de aceite fully synthetic 5w40. Ideal para flotas y uso profesional. Máxima protección y rendimiento prolongado.',
    images: [
      'https://bardahl.com.ar/878-home_default/aceite-5w40-sintetico-x-20-l.jpg',
    ],
    category: 'Aceite Sintetico',
    featured: false,
    retailPrice: 620000,
    tags: [],
  },
  {
    id: 9,
    slug: 'motor-protect-330ml',
    name: 'Motor Protect 330ml',
    shortDescription: 'Aditivo protector de motores. Reduce desgaste y consumo.',
    description:
      'Aditivo protector de motores que reduce el desgaste, disminuye el consumo de aceite y mejora la compresión.Compatible con todos los motores.',
    images: [
      'https://bardahl.com.ar/905-home_default/motor-protect-12-x-330-cc.jpg',
    ],
    category: 'Aditivos',
    featured: true,
    retailPrice: 12500,
    comparePrice: 15000,
    discountPercentage: 17,
    tags: [],
  },
  {
    id: 10,
    slug: 'maxima-compresion-flex-400ml',
    name: 'Máxima Compresión Flex 400ml',
    shortDescription: 'Aditivo para restaurar compresión en motores desgastados.',
    description:
      'Aditivo especializado que ayuda a restaurar la compresión en motores con alto kilometaje. Mejora el sellado de anillos y válvulas.',
    images: [
      'https://bardahl.com.ar/526-home_default/maxima-compresion-flex-18-x-400-ml.jpg',
    ],
    category: 'Aditivos',
    featured: false,
    retailPrice: 14800,
    tags: [],
  },
  {
    id: 11,
    slug: 'aditivo-no-smoke-400ml',
    name: 'Aditivo No Smoke 400ml',
    shortDescription: 'Elimina humos azules y reduce consumo de aceite.',
    description:
      'Aditivo tratamiento para motores que consumen aceite o producen humos. Restauración de sellado de anillos y guías de válvulas.',
    images: [
      'https://bardahl.com.ar/63-home_default/aditivo-para-aceite-no-smoke-24-x-400-ml.jpg',
    ],
    category: 'Aditivos',
    featured: false,
    retailPrice: 11200,
    tags: [],
  },
  {
    id: 12,
    slug: 'caja-y-diferencial-250ml',
    name: 'Caja Y Diferencial 250ml',
    shortDescription: 'Aditivo para transmisiones manuales y diferenciales.',
    description:
      'Aditivo tratamiento para transmisiones manuales, caja de cambios y diferenciales. Reduce ruido, vibraciones y desgaste premature.',
    images: [
      'https://bardahl.com.ar/62-home_default/caja-y-diferencial-12-x-250-ml.jpg',
    ],
    category: 'Aditivos',
    featured: false,
    retailPrice: 9800,
    tags: [],
  },
  {
    id: 13,
    slug: 'lavaparabrisas-jet-wax-1l',
    name: 'Lavaparabrisas Jet Wax 1L',
    shortDescription: 'Líquido lavaparabrisas con poder de limpieza y brillo.',
    description:
      'Lavaparabrisas de alta calidad con agententes de limpieza y brillo. Elimina suciedad, grasa e insectos del parabrisas.',
    images: [
      'https://bardahl.com.ar/724-home_default/lavaparabrisas-jet-wax-12-x-1-l.jpg',
    ],
    category: 'Limpieza',
    featured: true,
    retailPrice: 8500,
    tags: [],
  },
  {
    id: 14,
    slug: 'lava-autos-siliconado-jet-wax-400ml',
    name: 'Lava Autos Siliconado Jet Wax 400ml',
    shortDescription: ' shampoo con silicona para lavado sin frotar.',
    description:
      'Lava autos siliconado concentrado jet wax. Aplication rápida y fácil, deja una capa protectora brillante.',
    images: [
      'https://bardahl.com.ar/443-home_default/lava-autos-siliconado-jet-wax-concentrado-12-x-400-ml.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 11200,
    tags: [],
  },
  {
    id: 15,
    slug: 'limpia-motores-jet-wax-290g',
    name: 'Limpia Motores Jet Wax 290g',
    shortDescription: 'Limpiador de motores potente y seguro.',
    description:
      'Limpiador de motores de alta potencia. Dissuelve grasa, aceite y suciedad sin danar superficies.',
    images: [
      'https://bardahl.com.ar/719-home_default/limpia-motores-jet-wax-12-x-290-g.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 9800,
    tags: [],
  },
  {
    id: 16,
    slug: 'renueva-neumaticos-jet-wax-400ml',
    name: 'Renueva Neumáticos Jet Wax 400ml',
    shortDescription: 'Revitalizador de neumáticos con brillo duradero.',
    description:
      'Renueva y protege neumáticos con un acabado brillante. Repele polvo y suciedad, protección UV.',
    images: [
      'https://bardahl.com.ar/945-home_default/renueva-neumaticos-jet-wax-12-x-400-ml.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 8900,
    tags: [],
  },
  {
    id: 17,
    slug: 'lustre-para-autos-jet-wax-400ml',
    name: 'Lustre Para Autos Jet Wax 400ml',
    shortDescription: 'Lustre en aerosol para un brillo profundo.',
    description:
      'Lustre para autos en aerosol jet wax. Elimina rayones leves y deja un brillo espejo.',
    images: [
      'https://bardahl.com.ar/720-home_default/lustre-para-autos-jet-wax-en-aerosol-12-x-400-ml.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 7600,
    tags: [],
  },
  {
    id: 18,
    slug: 'lava-parabrisas-baja-temperatura-1l',
    name: 'Lavaparabrisas Jet Wax Baja Temperatura 1L',
    shortDescription: 'Liquido lavaparabrisas para bajas temperaturas.',
    description:
      'Lavaparabrisas especial para clima frío. No congela hasta -20°C, limpieza efectiva en condiciones extremas.',
    images: [
      'https://bardahl.com.ar/722-home_default/lavaparabrisas-jet-wax-baja-temperatura-12-x-1-l.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 9200,
    tags: [],
  },
  {
    id: 19,
    slug: 'jet-wax-silicona-fresh-aerosol-400ml',
    name: 'Jet Wax Silicona Fresh En Aerosol 400ml',
    shortDescription: 'Silicona en aerosol para interior y exterior.',
    description:
      'Silicona fresca multi uso para habitáculo. Protege y brillo en plásticos, gomas y superficies.',
    images: [
      'https://bardahl.com.ar/731-home_default/jet-wax-silicona-fresh-en-aerosol-6-x-400-ml-sp.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 8400,
    tags: [],
  },
  {
    id: 20,
    slug: 'revitalizador-cueros-vin-michelin-330ml',
    name: 'Revitalizador De Cueros Y Vin Michelin 330ml',
    shortDescription: 'Nutre y protege cueros y vinilos.',
    description:
      'Revitalizador de cueros y vinilo Michelin. Nutre en profundidad, devuelve flexibilidad y brillo natural.',
    images: [
      'https://bardahl.com.ar/451-home_default/revitalizador-de-cueros-y-vin-michelin-12-x-330-ml.jpg',
    ],
    category: 'Limpieza',
    featured: false,
    retailPrice: 13500,
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