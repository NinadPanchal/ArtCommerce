'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
    id: string
    name: string
    artist: string
    price: number
    quantity: number
    image: string
    type: 'physical' | 'digital' | 'merchandise'
}

interface CartContextType {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    itemCount: number
    subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([
        // Initial mock items - these can be removed once backend is integrated
        {
            id: '1',
            name: 'Abstract Harmony',
            artist: 'Ananya Mehta',
            price: 12000,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&q=80',
            type: 'physical',
        },
        {
            id: '2',
            name: 'Digital Illustration Pack - Nature',
            artist: 'Ananya Mehta',
            price: 1999,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80',
            type: 'digital',
        },
    ])

    const addItem = (item: CartItem) => {
        setItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id)
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            }
            return [...prevItems, item]
        })
    }

    const removeItem = (id: string) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id)
            return
        }
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                itemCount,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
