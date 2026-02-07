'use client'

import { useState } from 'react'
import Hero from '@/components/home/Hero'
import CategoryGateway from '@/components/home/CategoryGateway'
import ProductGrid from '@/components/product/ProductGrid'
import ProductModal from '@/components/product/ProductModal'
import { Product } from '@/components/product/ProductCard'
import ServiceCard, { Service } from '@/components/service/ServiceCard'
import CommissionForm from '@/components/service/CommissionForm'
import productsData from '@/data/products.json'
import servicesData from '@/data/services.json'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Card, { CardImage, CardContent } from '@/components/ui/Card'
import artistsData from '@/data/artists.json'

export default function HomePage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [productModalOpen, setProductModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)
    const [commissionFormOpen, setCommissionFormOpen] = useState(false)

    const products = productsData as Product[]
    const services = servicesData as Service[]
    const artists = artistsData

    const featuredProducts = products.slice(0, 4)
    const featuredServices = services.slice(0, 4)
    const featuredArtists = artists.slice(0, 3)

    const handleViewProduct = (product: Product) => {
        setSelectedProduct(product)
        setProductModalOpen(true)
    }

    const handleAddToCart = (product: Product) => {
        console.log('Added to cart:', product)
        alert(`${product.name} added to cart!`)
    }

    const handleViewService = (service: Service) => {
        setSelectedService(service)
        setCommissionFormOpen(true)
    }

    return (
        <>
            <Hero />
            <CategoryGateway />

            {/* Featured Products */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold">
                            Featured Products
                        </h2>
                        <Link href="/explore">
                            <Button variant="ghost">View All →</Button>
                        </Link>
                    </div>
                    <ProductGrid
                        products={featuredProducts}
                        onViewProduct={handleViewProduct}
                        onAddToCart={handleAddToCart}
                    />
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold">
                            Creative Services
                        </h2>
                        <Link href="/creative-services/commissions">
                            <Button variant="ghost">View All →</Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredServices.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                onView={handleViewService}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Artist Spotlight */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                        Featured Artists
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredArtists.map((artist) => (
                            <Link key={artist.id} href={`/artist/${artist.id}`}>
                                <Card hover>
                                    <div className="p-6">
                                        <img
                                            src={artist.avatar}
                                            alt={artist.name}
                                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                        />
                                        <h3 className="text-xl font-semibold text-center mb-2">
                                            {artist.name}
                                        </h3>
                                        <p className="text-sm text-text-muted text-center mb-4 line-clamp-3">
                                            {artist.bio}
                                        </p>
                                        <div className="flex justify-center items-center text-sm text-accent">
                                            <span>⭐ {artist.rating}</span>
                                            <span className="mx-2">•</span>
                                            <span>{artist.reviewCount} reviews</span>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                        Are you an artist?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join our community of talented artists and reach thousands of art enthusiasts.
                        Showcase your work, offer your services, and grow your creative business.
                    </p>
                    <Link href="/become-artist">
                        <Button variant="secondary" size="lg">
                            Start Selling Today
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Modals */}
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
        </>
    )
}
