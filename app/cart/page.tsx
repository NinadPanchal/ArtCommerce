'use client'

import { useCart } from '@/context/CartContext'
import Link from 'next/link'

export default function CartPage() {
    const { items: cartItems, updateQuantity, removeItem, subtotal } = useCart()

    const shipping = cartItems.some(item => item.type === 'physical') ? 500 : 0
    const total = subtotal + shipping

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold">Shopping Cart</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-sm shadow-sm divide-y divide-border">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-6 flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-sm"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                                            <p className="text-sm text-text-muted mb-2">by {item.artist}</p>
                                            <p className="text-sm text-text-muted">
                                                {item.type === 'digital' ? 'Digital Download' : 'Physical Product'}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-lg mb-2">₹{item.price.toLocaleString()}</p>
                                            <div className="flex items-center gap-2 mb-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-2 py-1 border border-border rounded-sm hover:bg-gray-50"
                                                >
                                                    -
                                                </button>
                                                <span className="px-4">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-2 py-1 border border-border rounded-sm hover:bg-gray-50"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-sm text-red-600 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <div className="bg-white rounded-sm shadow-sm p-6 sticky top-24">
                                <h2 className="text-2xl font-display font-bold mb-6">Order Summary</h2>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Subtotal</span>
                                        <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                                    </div>
                                    {shipping > 0 && (
                                        <div className="flex justify-between">
                                            <span className="text-text-muted">Shipping</span>
                                            <span className="font-semibold">₹{shipping.toLocaleString()}</span>
                                        </div>
                                    )}
                                    {shipping === 0 && (
                                        <div className="flex justify-between">
                                            <span className="text-text-muted">Shipping</span>
                                            <span className="font-semibold text-green-600">Free (Digital Only)</span>
                                        </div>
                                    )}
                                    <div className="border-t border-border pt-3">
                                        <div className="flex justify-between text-lg">
                                            <span className="font-bold">Total</span>
                                            <span className="font-bold">₹{total.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-primary text-white py-3 rounded-sm font-semibold hover:bg-opacity-90 transition-colors mb-3">
                                    Proceed to Checkout
                                </button>
                                <Link
                                    href="/explore"
                                    className="block w-full border border-border py-3 rounded-sm font-semibold hover:bg-gray-50 transition-colors text-center"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-sm">
                        <p className="text-2xl font-display mb-4">Your cart is empty</p>
                        <p className="text-text-muted mb-6">Discover amazing artworks and services</p>
                        <a href="/explore" className="inline-block bg-primary text-white px-8 py-3 rounded-sm hover:bg-opacity-90">
                            Start Exploring
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
