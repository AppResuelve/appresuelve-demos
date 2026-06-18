import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Navbar, Footer } from './components/layout'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { FloatingWhatsAppButton } from './components/ui/FloatingWhatsAppButton'
import { siteData } from './data/siteData'
import { generatePalette, applyPalette } from './utils/generatePalette'

function App() {
  useEffect(() => {
    const palette = generatePalette(siteData.branding)
    applyPalette(palette)
  }, [])

  return (
    <BrowserRouter basename="/cart-whatsapp-casarepostera">
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/producto/:slug" element={<ProductDetail />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsAppButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
