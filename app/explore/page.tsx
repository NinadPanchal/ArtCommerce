'use client'

import { useState } from 'react'
import ProductGrid from '@/components/product/ProductGrid'
import ProductModal from '@/components/product/ProductModal'
import { Product } from '@/components/product/ProductCard'
import ServiceCard, { Service } from '@/components/service/ServiceCard'
import CommissionForm from '@/components/service/CommissionForm'
import productsData from '@/data/products.json'
import servicesData from '@/data/services.json'

export default function ExplorePage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [productModalOpen, setProductModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)
    const [commissionFormOpen, setCommissionFormOpen] = useState(false)
    const [viewMode, setViewMode] = useState<'all' | 'products' | 'services'>('all')
    const [searchTerm, setSearchTerm] = useState('')

    const products = productsData as Product[]
    const services = servicesData as Service[]

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.artistName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const filteredServices = services.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.artistName && s.artistName.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const handleViewProduct = (product: Product) => {
        setSelectedProduct(product)
        setProductModalOpen(true)
    }

    const handleAddToCart = (product: Product) => {
        alert(`${product.name} added to cart!`)
    }

    const handleViewService = (service: Service) => {
        setSelectedService(service)
        setCommissionFormOpen(true)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Explore
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl mb-6">
                        Discover all products and services in one place. Find the perfect artwork or creative service.
                    </p>

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search by name or artist..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full max-w-md px-4 py-3 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* View Mode Toggle */}
                <div className="flex gap-2 mb-8">
                    <button
                        onClick={() => setViewMode('all')}
                        className={`px-4 py-2 rounded-sm transition-colors ${viewMode === 'all'
                            ? 'bg-primary text-white'
                            : 'bg-white text-text border border-border hover:bg-gray-50'
                            }`}
                    >
                        All ({products.length + services.length})
                    </button>
                    <button
                        onClick={() => setViewMode('products')}
                        className={`px-4 py-2 rounded-sm transition-colors ${viewMode === 'products'
                            ? 'bg-primary text-white'
                            : 'bg-white text-text border border-border hover:bg-gray-50'
                            }`}
                    >
                        Products ({products.length})
                    </button>
                    <button
                        onClick={() => setViewMode('services')}
                        className={`px-4 py-2 rounded-sm transition-colors ${viewMode === 'services'
                            ? 'bg-primary text-white'
                            : 'bg-white text-text border border-border hover:bg-gray-50'
                            }`}
                    >
                        Services ({services.length})
                    </button>
                </div>

                {/* Products */}
                {(viewMode === 'all' || viewMode === 'products') && filteredProducts.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-display font-bold mb-6">Products</h2>
                        <ProductGrid
                            products={filteredProducts}
                            onViewProduct={handleViewProduct}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                )}

                {/* Services */}
                {(viewMode === 'all' || viewMode === 'services') && filteredServices.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-display font-bold mb-6">Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    onView={handleViewService}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {filteredProducts.length === 0 && filteredServices.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-text-muted">No results found for &quot;{searchTerm}&quot;</p>
                    </div>
                )}
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={productModalOpen}
                onClose={() => setProductModalOpen(false)}
                onAddToCart={handleAddToCart}
            />

            <CommissionForm
                isOpen={commissionFormOpen}
                onClose={() => setCommissionFormOpen(false)}
                serviceName={selectedService?.name}
            />
        </div>
    )
}
