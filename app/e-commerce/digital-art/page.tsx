'use client'

import { useState } from 'react'
import ProductGrid from '@/components/product/ProductGrid'
import ProductModal from '@/components/product/ProductModal'
import { Product } from '@/components/product/ProductCard'
import productsData from '@/data/products.json'

export default function DigitalArtPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const products = (productsData as Product[]).filter(p => p.type === 'digital')

    const categories = [
        { value: 'all', label: 'All Digital Products' },
        { value: 'illustrations', label: 'Illustrations & Paintings' },
        { value: 'nfts', label: 'NFTs' },
        { value: 'stock', label: 'Stock Photos & Textures' },
        { value: 'wallpapers', label: 'Wallpapers' },
        { value: 'templates', label: 'Design Templates' },
        { value: 'brushes', label: 'Fonts & Brush Packs' },
    ]

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory)

    const handleViewProduct = (product: Product) => {
        setSelectedProduct(product)
        setModalOpen(true)
    }

    const handleAddToCart = (product: Product) => {
        console.log('Added to cart:', product)
        alert(`${product.name} added to cart! Download link will be sent after purchase.`)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Digital Art Products
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Instant downloads of high-quality digital art, illustrations, templates, and resources.
                        Perfect for designers, content creators, and art enthusiasts.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-8">
                    <p className="text-sm text-blue-900">
                        ℹ️ All digital products include instant download after purchase.
                        Check individual product pages for license details.
                    </p>
                </div>

                <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => setSelectedCategory(category.value)}
                                className={`px-4 py-2 rounded-sm transition-colors ${selectedCategory === category.value
                                        ? 'bg-primary text-white'
                                        : 'bg-white text-text border border-border hover:bg-gray-50'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <ProductGrid
                        products={filteredProducts}
                        onViewProduct={handleViewProduct}
                        onAddToCart={handleAddToCart}
                    />
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-text-muted">No products found in this category.</p>
                    </div>
                )}
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onAddToCart={handleAddToCart}
            />
        </div>
    )
}
