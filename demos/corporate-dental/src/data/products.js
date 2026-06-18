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
    slug: 'cepillo-electrico-sonico',
    name: 'Cepillo Dental Eléctrico Sónico',
    shortDescription: 'Tecnología sónica con 40.000 vibraciones por minuto. Limpieza profesional en casa.',
    description:
      'Cepillo dental eléctrico con tecnología sónica de última generación. Ofrece 40.000 vibraciones por minuto para una limpieza profunda que elimina hasta un 99% de la placa bacteriana. Incluye 3 cabezales de repuesto, temporizador de 2 minutos y 5 modos de cepillado: limpieza, blanqueamiento, sensible, masaje y turbo.',
    images: [
      'https://images.unsplash.com/photo-1559519774-41c74817256f?w=600&h=600&fit=crop',
    ],
    category: 'Higiene Bucal',
    featured: true,
    retailPrice: 45000,
    comparePrice: 52000,
    discountPercentage: 13,
    tags: ['recomendado', 'eléctrico'],
  },
  {
    id: 2,
    slug: 'pasta-dental-blanqueadora',
    name: 'Pasta Dental Blanqueadora Profesional',
    shortDescription: 'Fórmula con flúor y agentes blanqueadores. Dientes más blancos en 2 semanas.',
    description:
      'Pasta dental de uso diario con fórmula blanqueadora avanzada. Contiene flúor para protección anticaries y micropartículas de sílice que remueven manchas superficiales sin dañar el esmalte. Resultados visibles a partir de las 2 semanas de uso continuo. Tubo de 120g.',
    images: [
      'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?w=600&h=600&fit=crop',
    ],
    category: 'Higiene Bucal',
    featured: true,
    retailPrice: 8500,
    tags: ['blanqueamiento', 'flúor'],
  },
  {
    id: 3,
    slug: 'enjuague-bucal-anticaries',
    name: 'Enjuague Bucal Anticaries',
    shortDescription: 'Protección completa contra caries, placa y mal aliento. Sin alcohol.',
    description:
      'Enjuague bucal sin alcohol formulado con flúor y clorhexidina para una protección completa. Combate las bacterias causantes de caries, placa y gingivitis. Su fórmula sin alcohol evita la irritación y el ardor, ideal para uso diario. Frasco de 500ml.',
    images: [
      'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?w=600&h=600&fit=crop',
    ],
    category: 'Higiene Bucal',
    featured: false,
    retailPrice: 6200,
    tags: ['anticaries', 'sin alcohol'],
  },
  {
    id: 4,
    slug: 'hilo-dental-con-cera',
    name: 'Hilo Dental con Cera',
    shortDescription: 'Hilo dental con cera y sabor a menta. Limpieza interdental suave y efectiva.',
    description:
      'Hilo dental de nylon con cera y sabor a menta que se desliza fácilmente entre los dientes sin deshilacharse. Elimina la placa y los restos de comida donde el cepillo no llega. Rollo de 50 metros. Recomendado por odontólogos para uso diario.',
    images: [
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop',
    ],
    category: 'Higiene Bucal',
    featured: false,
    retailPrice: 3800,
    tags: ['menta'],
  },
  {
    id: 5,
    slug: 'kit-blanqueamiento-dental',
    name: 'Kit de Blanqueamiento Dental',
    shortDescription: 'Kit profesional con gel de peróxido de carbamida al 16%. Férulas personalizables.',
    description:
      'Kit de blanqueamiento dental para uso domiciliario supervisado por profesionales. Incluye gel de peróxido de carbamida al 16% (4 jeringas), férulas termomoldeables personalizables y guía de uso. El tratamiento completo dura 14 días con aplicación nocturna. Dientes hasta 8 tonos más claros.',
    images: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop',
    ],
    category: 'Blanqueamiento',
    featured: true,
    retailPrice: 28000,
    comparePrice: 35000,
    discountPercentage: 20,
    tags: ['blanqueamiento', 'kit'],
  },
  {
    id: 6,
    slug: 'irrigador-bucal',
    name: 'Irrigador Bucal a Presión',
    shortDescription: 'Limpieza profunda con chorro de agua a presión. Ideal para brackets e implantes.',
    description:
      'Irrigador dental con tanque de 300ml y 10 niveles de presión regulables. Su chorro de agua pulsátil elimina restos de comida y placa bacteriana de zonas de difícil acceso. Ideal para pacientes con ortodoncia, implantes, coronas o puentes. Incluye 5 boquillas intercambiables.',
    images: [
      'https://images.unsplash.com/photo-1559519774-41c74817256f?w=600&h=600&fit=crop',
    ],
    category: 'Cuidado Profesional',
    featured: true,
    retailPrice: 35000,
    comparePrice: 42000,
    discountPercentage: 17,
    tags: ['irrigador', 'ortodoncia'],
  },
  {
    id: 7,
    slug: 'cepillo-interdental-pack',
    name: 'Cepillo Interdental (Pack x10)',
    shortDescription: 'Pack de cepillos interdentales en distintos tamaños. Limpieza entre dientes.',
    description:
      'Pack de 10 cepillos interdentales de diversos calibres para una limpieza completa entre los dientes. Filamentos suaves recubiertos con alambre plastificado que no daña las encías. Incluye mango ergonómico y tapón protector. Pack surtido con tamaños: 0.6mm, 0.8mm, 1.0mm, 1.2mm.',
    images: [
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=600&fit=crop',
    ],
    category: 'Higiene Bucal',
    featured: false,
    retailPrice: 4500,
    tags: ['interdental', 'pack'],
  },
  {
    id: 8,
    slug: 'protector-bucal-nocturno',
    name: 'Protector Bucal Nocturno',
    shortDescription: 'Protector contra el bruxismo. Termomoldeable y ultrafino para dormir.',
    description:
      'Protector bucal nocturno diseñado para prevenir el desgaste dental causado por el bruxismo. Fabricado en silicona grado médico, es termomoldeable para adaptarse perfectamente a tu dentadura. Ultrafino (2mm) para máxima comodidad durante el sueño. Incluye estuche ventilado.',
    images: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=600&fit=crop',
    ],
    category: 'Cuidado Profesional',
    featured: false,
    retailPrice: 12000,
    comparePrice: 15000,
    discountPercentage: 20,
    tags: ['bruxismo', 'nocturno'],
  },
  {
    id: 9,
    slug: 'gel-fluor-profesional',
    name: 'Gel de Flúor Profesional',
    shortDescription: 'Alta concentración de flúor para prevención de caries. Aplicación semanal.',
    description:
      'Gel de flúor de alta concentración (12.500 ppm) para prevención intensiva de caries. Formulado con fluoruro de sodio en base de glicerina que maximiza la absorción del esmalte. Recomendado para pacientes con alta incidencia de caries o sensibilidad dental. Frasco de 200ml.',
    images: [
      'https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?w=600&h=600&fit=crop',
    ],
    category: 'Cuidado Profesional',
    featured: false,
    retailPrice: 7800,
    tags: ['flúor', 'anticaries'],
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
