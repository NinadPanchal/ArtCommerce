'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { Select } from '@/components/ui/Input'
import { Product } from './ProductCard'
import Link from 'next/link'

interface ProductModalProps {
    product: Product | null
    isOpen: boolean
    onClose: () => void
    onAddToCart: (product: Product) => void
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('M')
    const [selectedColor, setSelectedColor] = useState('Black')

    if (!product) return null

    const isMerchandise = product.type === 'merchandise'
    const isDigital = product.type === 'digital'

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div>
                    <div className="aspect-square bg-gray-100 mb-4 rounded-sm overflow-hidden">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {product.images.length > 1 && (
                        <div className="flex gap-2">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-20 h-20 rounded-sm overflow-hidden border-2 ${selectedImage === idx ? 'border-primary' : 'border-transparent'
                                        }`}
                                >
                                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div>
                    <h2 className="text-3xl font-display font-bold mb-2">{product.name}</h2>

                    <Link
                        href={`/artist/${product.artistId}`}
                        className="text-accent hover:underline mb-4 inline-block"
                    >
                        by {product.artistName}
                    </Link>

                    <p className="text-4xl font-bold text-primary mb-6">
                        ₹{product.price.toLocaleString()}
                    </p>

                    <p className="text-text mb-6">{product.description}</p>

                    {/* Merchandise Options */}
                    {isMerchandise && (
                        <div className="mb-6 space-y-4">
                            <Select
                                label="Size"
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                options={[
                                    { value: 'S', label: 'Small' },
                                    { value: 'M', label: 'Medium' },
                                    { value: 'L', label: 'Large' },
                                    { value: 'XL', label: 'Extra Large' },
                                ]}
                            />
                            <Select
                                label="Color"
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                options={[
                                    { value: 'Black', label: 'Black' },
                                    { value: 'White', label: 'White' },
                                    { value: 'Navy', label: 'Navy Blue' },
                                ]}
                            />
                        </div>
                    )}

                    {/* Digital Product Notice */}
                    {isDigital && (
                        <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-6">
                            <p className="text-sm text-blue-900">
                                <strong>Digital Product:</strong> Instant download after purchase.
                                Personal license included.
                            </p>
                        </div>
                    )}

                    {/* Shipping Info */}
                    {product.shipping && (
                        <p className="text-sm text-text-muted mb-4">
                            <strong>Shipping:</strong> {product.shipping}
                        </p>
                    )}

                    {/* Quantity */}
                    {!isDigital && (
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Quantity</label>
                            <input
                                type="number"
                                min="1"
                                max="10"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-24 px-4 py-2 border border-border rounded-sm"
                            />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="flex-1"
                            onClick={() => {
                                onAddToCart(product)
                                onClose()
                            }}
                        >
                            Add to Cart
                        </Button>
                        {product.customizable && (
                            <Button variant="outline" size="lg">
                                Request Customisation
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    )
}
