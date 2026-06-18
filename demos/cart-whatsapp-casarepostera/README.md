# Website Cart WhatsApp Template

Plantilla de catálogo con carrito y solicitud de pedidos por WhatsApp.

## Características

- Catálogo de productos con filtros y búsqueda
- Carrito persistente en LocalStorage
- Gestión de cantidad (+/-)
- Eliminación de productos
- Generación de mensaje WhatsApp con pedido completo
- Formulario de contacto con Brevo
- Diseño moderno dark mode
- 100% configurable via `siteData.js`

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Context API + useReducer para estado del carrito
- Brevo (Sendinblue) para emails

## Estructura

```
src/
├── context/
│   └── CartContext.jsx    # Estado global del carrito
├── data/
│   ├── siteData.js      # Configuración global
│   ├── products.js       # Productos mock
│   └── categories.js     # Categorías
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ui/              # Button, Badge, SectionHeader
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductGallery.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── CartItem.jsx
│   ├── QuantitySelector.jsx
│   └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── services/
│   └── contactService.js
└── App.jsx
```

## Configuración

### 1. Configurar siteData

Editar `src/data/siteData.js`:

```javascript
export const siteData = {
  business: {
    name: 'Tu Negocio',
  },
  contact: {
    receiveEmailsAt: 'tu@email.com',
    whatsapp: '5491112345678',
  },
  cart: {
    persistenceEnabled: true,
    persistenceKey: 'appresuelve-cart',
  },
  // ... más config
}
```

### 2. Agregar productos

Editar `src/data/products.js`:

```javascript
export const products = [
  {
    id: 1,
    slug: 'nombre-del-producto',
    name: 'Nombre del Producto',
    shortDescription: 'Descripción corta',
    description: 'Descripción completa...',
    images: ['/ruta/imagen1.webp', '/ruta/imagen2.webp'],
    category: 'Categoría',
    featured: true,
    price: '$25.000',
    priceNumber: 25000,  // Para cálculos del carrito
    tags: ['nuevo'],
  },
]
```

### 3. Variables de entorno

Crear `.env` en la raíz:

```env
BREVO_API_KEY=tu_api_key
BREVO_SENDER=formularios@tudominio.com
RECEIVER_EMAIL=tu@email.com
```

## Scripts

```bash
pnpm install    # Instalar dependencias
pnpm dev        # Desarrollo local
pnpm build      # Build para producción
pnpm preview    # Preview del build
pnpm vercel:dev # Desarrollo con API local
```

## Flujo del carrito

1. **Agregar producto**: Click en "Agregar al carrito" desde cards o detalle
2. **Modificar cantidad**: +/- en página carrito
3. **Eliminar producto**: Botón X en cada item
4. **Generar pedido**: Click en "Solicitar por WhatsApp"
5. **Persistencia**: Carrito se guarda en LocalStorage automáticamente

## Mensaje WhatsApp

```
Hola.
Quiero solicitar:

- 2x Auriculares Bluetooth Pro - $45.000 c/u
- 1x Remera Premium Cotton - $12.500 c/u

Total estimado: $102.500

Mis datos:
Nombre:
Teléfono:
```

## Deploy a Vercel

1. Push a GitHub
2. Importar en Vercel
3. Configurar variables de entorno
4. Deploy!

## Preparado para backend futuro

El formulario de contacto ya usa API routes de Vercel. La estructura está lista para migrar:
- Búsqueda de productos → API
- Filtros → API
- CRUD de productos → API
- Checkout → Stripe/MercadoPago

## Licencia

AppResuelve © 2024
