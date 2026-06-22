import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Tag } from "lucide-react";
import { content, siteData } from "../data/siteData";
import { formatPrice } from "../data/products";
import { useCart } from "../context/CartContext";
import { CartItem } from "../components/CartItem";
import { CheckoutModal, DeliveryFormModal } from "../components/CheckoutModal";
import { ScallopDivider } from "../components/ui/ScallopDivider";

/* ── Decorativos del sistema ── */
function Star({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M20 0 C20 0 21 14 26 18 C30 22 40 20 40 20 C40 20 30 21 26 26 C21 30 20 40 20 40 C20 40 19 30 14 26 C10 21 0 20 0 20 C0 20 10 19 14 14 C19 10 20 0 20 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Dot({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ── Estado vacío ── */
function CartEmpty({ emptyTitle, emptyMessage, browseProducts }) {
  return (
    <>
      {/* Hero mínimo */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "var(--color-background)",
          paddingTop: "3.5rem",
          paddingBottom: "5.5rem",
        }}
      >
        <Star
          className="absolute top-6 right-[8%] w-28 h-28 hidden md:block"
          style={{ color: "var(--color-primary-light)", opacity: 1 }}
        />
        <Star
          className="absolute top-6 right-[8%] w-10 h-10 hidden md:block"
          style={{ color: "var(--color-accent)", opacity: 0.3 }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-px w-8"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Carrito
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            {emptyTitle}
          </h1>
          <div className="flex items-center gap-2 mt-4">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--color-border-hover)" }}
            />
            <Dot className="w-2 h-2" style={{ color: "var(--color-accent)" }} />
            <div
              className="h-px w-24"
              style={{ backgroundColor: "var(--color-border-hover)" }}
            />
          </div>
        </div>

        <ScallopDivider fromColor="#C8922A" />
      </section>

      {/* Cuerpo vacío */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-sm mx-auto text-center">
          {/* Ilustración */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--color-primary-light)" }}
            >
              <ShoppingCart
                className="w-10 h-10"
                style={{ color: "var(--color-primary)", opacity: 0.5 }}
              />
            </div>
            <Star
              className="absolute -bottom-1 -right-1 w-8 h-8"
              style={{ color: "var(--color-accent)", opacity: 0.7 }}
            />
          </div>

          <p
            className="mb-8 leading-relaxed"
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "0.95rem",
            }}
          >
            {emptyMessage}
          </p>

          <Link
            to="/productos"
            className="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              boxShadow: "0 4px 16px rgba(26,158,143,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-primary-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-primary)")
            }
          >
            {browseProducts}
          </Link>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   CART
══════════════════════════════════════════════════════════════════════ */
export default function Cart() {
  const { items, totalItems, totalPrice } = useCart();
  const {
    title,
    emptyTitle,
    emptyMessage,
    browseProducts,
    itemCount,
    subtotal,
    total,
    requestQuote,
  } = content.cart;
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  /* ── Lógica de negocio — sin cambios ── */
  const generateWhatsAppMessage = (deliveryData = null) => {
    const itemsList = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} — ${formatPrice(item.unitPrice)} c/u`,
      )
      .join("\n");
    let deliverySection = "";
    if (deliveryData) {
      deliverySection = `\n\n📦 *Datos de envío:*\n👤 Nombre: ${deliveryData.name}\n📍 Dirección: ${deliveryData.address}`;
    }
    const message = `👋🏼 Hola, quiero hacer este pedido:\n\n📋 *Productos:*\n${itemsList}\n\n💰 *${total}:* $${totalPrice.toLocaleString("es-AR")}${deliverySection}`;
    return encodeURIComponent(message);
  };

  const openWhatsApp = (message) => {
    window.open(
      `https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, "")}?text=${message}`,
      "_blank",
    );
  };

  const handlePickup = () => {
    openWhatsApp(generateWhatsAppMessage());
    setShowDeliveryModal(false);
  };

  const handleDeliveryFormSubmit = (name, address) => {
    openWhatsApp(generateWhatsAppMessage({ name, address }));
    setShowDeliveryForm(false);
    setShowDeliveryModal(false);
  };

  const handleRequestQuote = () => {
    if (siteData.cart.showDeliveryModal) {
      setShowDeliveryModal(true);
    } else {
      openWhatsApp(generateWhatsAppMessage());
    }
  };

  if (items.length === 0) {
    return (
      <CartEmpty
        emptyTitle={emptyTitle}
        emptyMessage={emptyMessage}
        browseProducts={browseProducts}
      />
    );
  }

  return (
    <>
      {/* ══ HERO — crema + scallop dorado ══ */}
      <section
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: "var(--color-background)",
          paddingTop: "3rem",
          paddingBottom: "5.5rem",
        }}
      >
        {/* Bloque teal claro desktop */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 right-0 w-[28%] h-full hidden lg:block"
            style={{ backgroundColor: "var(--color-primary-light)" }}
          />
          <div
            className="absolute top-8 right-[28%] w-px h-[85%] hidden lg:block"
            style={{ backgroundColor: "var(--color-primary)", opacity: 0.12 }}
          />
        </div>

        {/* Estrellas */}
        <Star
          className="absolute top-8 right-[22%] w-5 h-5 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.4 }}
        />
        <Dot
          className="absolute bottom-16 left-[6%] w-2.5 h-2.5 hidden lg:block"
          style={{ color: "var(--color-accent)", opacity: 0.35 }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            to="/productos"
            className="inline-flex items-center gap-1.5 text-xs font-semibold mb-5 group transition-colors"
            style={{ color: "var(--color-text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Volver a productos
          </Link>

          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: "var(--color-accent)" }}
                >
                  Carrito
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "var(--color-text-primary)",
                }}
              >
                {title}
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <div
                  className="h-px w-10"
                  style={{ backgroundColor: "var(--color-border-hover)" }}
                />
                <Dot
                  className="w-2 h-2"
                  style={{ color: "var(--color-accent)" }}
                />
                <div
                  className="h-px w-24"
                  style={{ backgroundColor: "var(--color-border-hover)" }}
                />
              </div>
            </div>

            {/* Badge cantidad */}
            <div
              className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full mb-1"
              style={{
                backgroundColor: "white",
                border: "1px solid var(--color-border)",
              }}
            >
              <ShoppingCart
                className="w-4 h-4"
                style={{ color: "var(--color-primary)" }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {itemCount.replace("{count}", totalItems)}
              </span>
            </div>
          </div>
        </div>

        <ScallopDivider fromColor="#C8922A" />
      </section>

      {/* ══ CONTENIDO ══ */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-3">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Resumen sticky */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-24 rounded-xl overflow-hidden"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* Header del resumen — crema */}
                <div
                  className="px-5 py-4 flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--color-background)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <Tag
                    className="w-4 h-4"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span
                    className="text-xs font-bold tracking-[0.15em] uppercase"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Resumen
                  </span>
                </div>

                <div className="px-5 py-5 bg-white">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {subtotal}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      ${totalPrice.toLocaleString("es-AR")}
                    </span>
                  </div>

                  {/* Separador con estrella */}
                  <div className="flex items-center gap-2 my-4">
                    <div
                      className="flex-1 h-px"
                      style={{ backgroundColor: "var(--color-border)" }}
                    />
                    <Star
                      className="w-3 h-3"
                      style={{ color: "var(--color-accent)", opacity: 0.5 }}
                    />
                    <div
                      className="flex-1 h-px"
                      style={{ backgroundColor: "var(--color-border)" }}
                    />
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className="font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {total}
                    </span>
                    <span
                      className="text-2xl font-black"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--color-primary)",
                      }}
                    >
                      ${totalPrice.toLocaleString("es-AR")}
                    </span>
                  </div>

                  {/* Botón pedido — dorado (acción de compra especial) */}
                  <button
                    onClick={handleRequestQuote}
                    className="flex items-center justify-center gap-2 w-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    style={{
                      padding: "0.875rem 1.5rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--color-accent)",
                      color: "#ffffff",
                      boxShadow: "0 4px 16px rgba(200,146,42,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-accent-hover)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(200,146,42,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-accent)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(200,146,42,0.3)";
                    }}
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                    {requestQuote}
                  </button>

                  {/* Seguir comprando */}
                  <div className="mt-4 text-center">
                    <Link
                      to="/productos"
                      className="text-xs font-semibold transition-colors hover:underline underline-offset-2"
                      style={{ color: "var(--color-text-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-text-muted)")
                      }
                    >
                      {content.cart.continueShopping}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modales — sin cambios */}
      <CheckoutModal
        isOpen={showDeliveryModal}
        onClose={() => setShowDeliveryModal(false)}
        onConfirmDelivery={() => {
          setShowDeliveryModal(false);
          setShowDeliveryForm(true);
        }}
        onConfirmPickup={handlePickup}
      />
      <DeliveryFormModal
        isOpen={showDeliveryForm}
        onClose={() => setShowDeliveryForm(false)}
        onBack={() => {
          setShowDeliveryForm(false);
          setShowDeliveryModal(true);
        }}
        onConfirm={handleDeliveryFormSubmit}
      />
    </>
  );
}
