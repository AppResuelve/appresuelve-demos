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
    slug: 'cmc-25g',
    name: 'CMC 25g',
    shortDescription: 'Estabilizante ideal para pasta de goma, fondant y decoraciones de repostería.',
    description:
      'Estabilizante ideal para pasta de goma, fondant y decoraciones de repostería. Perfecto para crear flores, figuras y detalles que requieren estructura y flexibilidad.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182946/4b9be30a15ccde2347c978102f2a8adca2a5a3846d7fbf444e8525437206699241804_xj7bfg.jpg',
    ],
    category: 'Ingredientes',
    featured: true,
    retailPrice: 3021.47,
    tags: [],
  },
  {
    id: 2,
    slug: 'caramelo-liquido-450g',
    name: 'Caramelo Líquido 450g',
    shortDescription: 'Caramelo listo para usar en postres, flanes y preparaciones dulces.',
    description:
      'Caramelo listo para usar en postres, flanes y preparaciones dulces. Textura suave y sabor auténtico para tus recetas.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182945/8047d0dbe9e9bdbbf616e0d4a3e55663aeed867c042bd9dc65d9e983da0ad8a841804_mnjmrv.png',
    ],
    category: 'Ingredientes',
    featured: false,
    retailPrice: 4084.32,
    tags: [],
  },
  {
    id: 3,
    slug: 'caramelo-liquido-1250g',
    name: 'Caramelo Líquido 1250g',
    shortDescription: 'Formato económico para uso profesional en repostería y gastronomía.',
    description:
      'Formato económico para uso profesional en repostería y gastronomía. Ideal para empresas de catering, boulangeries y reposterías.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182944/800a24f7d06f0b8d5909c207f7d0f187012f0892e06e4cf28ff4ab0268af480341804_zpbgax.jpg',
    ],
    category: 'Ingredientes',
    featured: true,
    retailPrice: 6695.84,
    tags: [],
  },
  {
    id: 4,
    slug: 'cremor-tartaro-50g',
    name: 'Cremor Tártaro 50g',
    shortDescription: 'Ingrediente esencial para estabilizar claras y mejorar masas y merengues.',
    description:
      'Ingrediente esencial para estabilizar claras y mejorar masas y merengues. Perfecto para recetas que requieren volumen y textura estável.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182944/108107282997e06de386d29a7a9bea439a9ed16c30b57455861a790f1a27d3b541804_ulq9qr.jpg',
    ],
    category: 'Ingredientes',
    featured: false,
    retailPrice: 1031.29,
    tags: [],
  },
  {
    id: 5,
    slug: 'harina-almendras-100g',
    name: 'Harina de Almendras 100g',
    shortDescription: 'Harina premium de almendras ideal para macarons, tortas y recetas gourmet.',
    description:
      'Harina premium de almendras ideal para macarons, tortas y recetas gourmet. Molienda fina para preparaciones suaves y nutritivas.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182943/5cb8ba636f5e5f4a5250d34dc75f3a3a96c1a8897a5c1ccfdf9b4e6c41603e4d41804_bkamgi.png',
    ],
    category: 'Ingredientes',
    featured: true,
    retailPrice: 2226.51,
    wholesalePrice: 1800,
    unitsToWholesalePrice: 8,
    tags: ['bestseller'],
  },
  {
    id: 6,
    slug: 'dulce-de-leche-vacalin-400g',
    name: 'Dulce de Leche Vacalín Repostero 400g',
    shortDescription: 'Dulce de leche repostero con excelente consistencia para rellenos y coberturas.',
    description:
      'Dulce de leche repostero con excelente consistencia para rellenos y coberturas. De uso profesional para lograr el mejor sabor.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182943/34765974838caecfae182a8566b1599e92eb289895ff916e5b92cc1f0afa547441804_nzgfd5.png',
    ],
    category: 'Ingredientes',
    featured: true,
    retailPrice: 4193.48,
    wholesalePrice: 3600,
    unitsToWholesalePrice: 12,
    tags: [],
  },
  {
    id: 7,
    slug: 'butter-cream-pastelar-360g',
    name: 'Butter Cream Pastelar 360g',
    shortDescription: 'Preparado listo para obtener una buttercream suave y estable.',
    description:
      'Preparado listo para obtener una buttercream suave y estable. Solo tenés que batir para lograr una cobertura perfecta.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182942/46278727ce43f394d8ead25cfea08346a34325bac1f42573f96652428d5d3d1f41804_qbig98.jpg',
    ],
    category: 'Ingredientes',
    featured: false,
    retailPrice: 9213.27,
    wholesalePrice: 7500,
    unitsToWholesalePrice: 6,
    tags: [],
  },
  {
    id: 8,
    slug: 'lenteja-confite-caramelo-frutal-100g',
    name: 'Lenteja Confite Caramelo Frutal 100g',
    shortDescription: 'Confites coloridos ideales para decorar tortas, cupcakes y galletitas.',
    description:
      'Confites coloridos ideales para decorar tortas, cupcakes y galletitas. Mezcla de sabores frutales en presentación práctica.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182941/48ccb23df6a5058fc2e62ed8ed40030fddb55698157693b5cfd98602477395d241804_bzf132.jpg',
    ],
    category: 'Decoraciones',
    featured: false,
    retailPrice: 636.69,
    wholesalePrice: 500,
    unitsToWholesalePrice: 10,
    tags: [],
  },
  {
    id: 9,
    slug: 'lenteja-confite-caramelo-frutal-14kg',
    name: 'Lenteja Confite Caramelo Frutal 14kg',
    shortDescription: 'Presentación mayorista para emprendimientos y producción a gran escala.',
    description:
      'Presentación mayorista para emprendimientos y producción a gran escala. Formato institucional ideal para fábricas de alimentos.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182940/7b18c7efea006d76c31d4af3fdca021fd7ad10623296a4aa12ebfdaa3f617be641804_oozzkq.jpg',
    ],
    category: 'Decoraciones',
    featured: false,
    retailPrice: 75002.52,
    comparePrice: 85000,
    discountPercentage: 15,
    wholesalePrice: 65000,
    unitsToWholesalePrice: 6,
    wholesaleComparePrice: 72000,
    tags: ['mayorista'],
  },
  {
    id: 10,
    slug: 'grageas-coloridas-100g',
    name: 'Grageas Coloridas 100g',
    shortDescription: 'Grageas decorativas de colores para darle un toque especial a tus creaciones.',
    description:
      'Grageas decorativas de colores para darle un toque especial a tus creaciones. Ideales para mesas dulces y celebraciones.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182940/fec1936205fd25a91c821adc182afee09988eec147fdc372e5fbbacb3208be7141804_teeemn.jpg',
    ],
    category: 'Decoraciones',
    featured: false,
    retailPrice: 1298.48,
    comparePrice: 1600,
    discountPercentage: 20,
    wholesalePrice: 1100,
    unitsToWholesalePrice: 10,
    wholesaleComparePrice: 1400,
    tags: [],
  },
  {
    id: 11,
    slug: 'sprinkles-mundial-argentina',
    name: 'Sprinkles Mundial Argentina',
    shortDescription: 'Mix temático inspirado en Argentina para decorar postres con estilo.',
    description:
      'Mix temático inspirado en Argentina para decorar postres con estilo. Perfecto para cumpleaños y eventos temáticos.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182940/3ca109d20941c24c5e58e5f2442f8d423575294d9f3130ab9442d5b1cce25f5041804_sp95cu.png',
    ],
    category: 'Decoraciones',
    featured: true,
    retailPrice: 3990,
    comparePrice: 4500,
    discountPercentage: 11,
    wholesalePrice: 3300,
    unitsToWholesalePrice: 10,
    wholesaleComparePrice: 4000,
    tags: ['tematico'],
  },
  {
    id: 12,
    slug: 'estrellas-azucar-amarillo-x20',
    name: 'Estrellas Azúcar Amarillo x20',
    shortDescription: 'Decoraciones de azúcar en forma de estrella para detalles llamativos.',
    description:
      'Decoraciones de azúcar en forma de estrella para detalles llamativos. Pack de 20 unidades listo para usar.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182939/96079e6836d5df0dde5b8303ce1e0bb489c36fe5aaab3a8d127cdc8fabce468c41804_nqk7ni.png',
    ],
    category: 'Decoraciones',
    featured: false,
    retailPrice: 3000,
    comparePrice: 3500,
    discountPercentage: 14,
    wholesalePrice: 2500,
    unitsToWholesalePrice: 12,
    wholesaleComparePrice: 3000,
    tags: [],
  },
  {
    id: 13,
    slug: 'estrellas-azucar-azul-x20',
    name: 'Estrellas Azúcar Azul x20',
    shortDescription: 'Estrellas de azúcar listas para decorar tortas y mesas dulces.',
    description:
      'Estrellas de azúcar listas para decorar tortas y mesas dulces. pack de 20 unidades.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182939/b199b695db2d954ac2af7c4c93c0f88eecef27bd97dd9b28972eaffeb9138ccb41804_yf7z2n.png',
    ],
    category: 'Decoraciones',
    featured: false,
    retailPrice: 3000,
    wholesalePrice: 2500,
    unitsToWholesalePrice: 10,
    tags: [],
  },
  {
    id: 14,
    slug: 'estrellas-azucar-celeste-x20',
    name: 'Estrellas Azúcar Celeste x20',
    shortDescription: 'Detalles decorativos de azúcar perfectos para celebraciones temáticas.',
    description:
      'Detalles decorativos de azúcar perfectos para celebraciones temáticas. Pack de 20 unidades.',
    images: [
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780182938/c419d3619ab7f67b800e2998415c93da4db48fc7212588ce4674fa6df8904b1141804_scypph.png',
    ],
    category: 'Decoraciones',
    featured: false,
    retailPrice: 3000,
    comparePrice: 3500,
    discountPercentage: 14,
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