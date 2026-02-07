'use client'

import { useState } from 'react'
import ProductGrid from '@/components/product/ProductGrid'
import ProductModal from '@/components/product/ProductModal'
import { Product } from '@/components/product/ProductCard'
import productsData from '@/data/products.json'

export default function PhysicalArtPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const products = (productsData as Product[]).filter(p => p.type === 'physical')

    const categories = [
        { value: 'all', label: 'All Products' },
        { value: 'original-artworks', label: 'Original Artworks' },
        { value: 'prints', label: 'Prints & Reproductions' },
        { value: 'handcrafted', label: 'Handcrafted Items' },
        { value: 'miniature', label: 'Miniature Modeling' },
        { value: 'traditional', label: 'Traditional & Tribal Art' },
        { value: 'books', label: 'Art Books & Catalogues' },
        { value: 'stationery', label: 'Stationery' },
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
        alert(`${product.name} added to cart!`)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Physical Art Products
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Explore our curated collection of original artworks, prints, handcrafted items,
                        and traditional art pieces from talented artists across India.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Category Filter */}
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

                {/* Products Grid */}
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
