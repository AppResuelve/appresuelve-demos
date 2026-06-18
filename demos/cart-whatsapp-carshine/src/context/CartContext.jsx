import { createContext, useContext, useReducer, useEffect } from 'react'
import { siteData } from '../data/siteData'
import { getProductById } from '../data/products'

const CartContext = createContext()

const STORAGE_KEY = siteData.cart.persistenceKey || 'appresuelve-cart'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const quantityToAdd = action.payload.quantity || 1
      const existingIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      )

      if (existingIndex >= 0) {
        const newItems = [...state.items]
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantityToAdd,
        }
        return { ...state, items: newItems }
      }

      return {
        ...state,
        items: [
          ...state.items,
          { productId: action.payload.productId, quantity: quantityToAdd },
        ],
      }
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId
        ),
      }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.productId !== action.payload.productId
          ),
        }
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    case 'LOAD_CART':
      return { ...state, items: action.payload }

    default:
      return state
  }
}

function loadCartFromStorage() {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    const parsed = JSON.parse(stored)
    return parsed.filter((item) => getProductById(item.productId))
  } catch {
    return []
  }
}

function saveCartToStorage(items) {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    console.warn('No se pudo guardar el carrito en localStorage')
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  })

  useEffect(() => {
    const savedItems = loadCartFromStorage()
    if (savedItems.length > 0) {
      dispatch({ type: 'LOAD_CART', payload: savedItems })
    }
  }, [])

  useEffect(() => {
    saveCartToStorage(state.items)
  }, [state.items])

  const addItem = (productId, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { productId, quantity } })
  }

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } })
  }

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = (productId) => {
    const item = state.items.find((item) => item.productId === productId)
    return item ? item.quantity : 0
  }

  const cartItems = state.items
    .map((item) => {
      const product = getProductById(item.productId)
      if (!product) return null

      const hasWholesale = product.wholesalePrice && product.unitsToWholesalePrice
      const usesWholesale = hasWholesale && item.quantity >= product.unitsToWholesalePrice
      const unitPrice = usesWholesale ? product.wholesalePrice : product.retailPrice

      return {
        ...product,
        quantity: item.quantity,
        unitPrice,
        subtotal: unitPrice * item.quantity,
      }
    })
    .filter(Boolean)

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  const totalPrice = cartItems.reduce((sum, item) => sum + item.subtotal, 0)

  const value = {
    items: cartItems,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }
  return context
}
