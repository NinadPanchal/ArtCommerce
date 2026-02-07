'use client'

import { use } from 'react'
import artistsData from '@/data/artists.json'
import productsData from '@/data/products.json'
import servicesData from '@/data/services.json'
import { Product } from '@/components/product/ProductCard'
import { Service } from '@/components/service/ServiceCard'
import ProductCard from '@/components/product/ProductCard'
import ServiceCard from '@/components/service/ServiceCard'
import { useState } from 'react'
import ProductModal from '@/components/product/ProductModal'
import CommissionForm from '@/components/service/CommissionForm'

export default function ArtistProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [productModalOpen, setProductModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)
    const [commissionFormOpen, setCommissionFormOpen] = useState(false)

    const artist = artistsData.find(a => a.id === id)

    if (!artist) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-xl text-text-muted">Artist not found</p>
            </div>
        )
    }

    const artistProducts = (productsData as Product[]).filter(p => p.artistId === id)
    const artistServices = (servicesData as Service[]).filter(s => s.artistId === id)

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
            {/* Hero Section */}
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <img
                            src={artist.avatar}
                            alt={artist.name}
                            className="w-40 h-40 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                {artist.name}
                            </h1>
                            <p className="text-lg text-text mb-4">{artist.bio}</p>
                            <div className="flex items-center gap-6 text-text-muted">
                                <span className="flex items-center">
                                    ⭐ {artist.rating} rating
                                </span>
                                <span>{artist.reviewCount} reviews</span>
                                <span>{artistProducts.length} products</span>
                                <span>{artistServices.length} services</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Portfolio Gallery */}
                <section className="mb-16">
                    <h2 className="text-3xl font-display font-bold mb-6">Portfolio</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {artist.portfolio.map((img, idx) => (
                            <div key={idx} className="aspect-square bg-gray-100 rounded-sm overflow-hidden">
                                <img
                                    src={img}
                                    alt={`Portfolio ${idx + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Products */}
                {artistProducts.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-display font-bold mb-6">Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {artistProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onView={handleViewProduct}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Services */}
                {artistServices.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-display font-bold mb-6">Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {artistServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    onView={handleViewService}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Reviews Placeholder */}
                <section className="mt-16 bg-white rounded-sm p-8">
                    <h2 className="text-2xl font-display font-bold mb-4">Reviews</h2>
                    <p className="text-text-muted">Reviews section coming soon...</p>
                </section>
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
