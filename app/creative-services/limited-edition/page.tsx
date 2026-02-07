'use client'

import { useState } from 'react'
import ServiceCard, { Service } from '@/components/service/ServiceCard'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import servicesData from '@/data/services.json'
import Link from 'next/link'

export default function LimitedEditionPage() {
    const [selectedService, setSelectedService] = useState<Service | null>(null)
    const [modalOpen, setModalOpen] = useState(false)

    const services = (servicesData as Service[]).filter(s => s.type === 'limited-edition')

    const handleViewService = (service: Service) => {
        setSelectedService(service)
        setModalOpen(true)
    }

    const handleAddToCart = () => {
        if (selectedService) {
            alert(`${selectedService.name} added to cart!`)
            setModalOpen(false)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Limited Edition & Large-Scale Works
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Exclusive, numbered editions and monumental art pieces. Each work comes with
                        a certificate of authenticity and represents a unique investment in fine art.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-purple-50 border border-purple-200 rounded-sm p-6 mb-8">
                    <h3 className="font-semibold text-lg mb-2">Why Limited Editions?</h3>
                    <ul className="space-y-2 text-text-muted">
                        <li>• Numbered and signed by the artist</li>
                        <li>• Certificate of authenticity included</li>
                        <li>• Exclusive ownership of rare artwork</li>
                        <li>• Potential for appreciation in value</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-display font-bold mb-6">Available Works</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onView={handleViewService}
                        />
                    ))}
                </div>

                {services.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-text-muted">No limited edition works available at the moment.</p>
                    </div>
                )}
            </div>

            {selectedService && (
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={selectedService.name}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img
                                src={selectedService.images[0]}
                                alt={selectedService.name}
                                className="w-full aspect-square object-cover rounded-sm"
                            />
                        </div>
                        <div>
                            {selectedService.artistName && (
                                <Link
                                    href={`/artist/${selectedService.artistId}`}
                                    className="text-accent hover:underline mb-4 inline-block"
                                >
                                    by {selectedService.artistName}
                                </Link>
                            )}

                            <p className="text-text mb-6">{selectedService.description}</p>

                            {selectedService.editionCount && (
                                <div className="bg-accent bg-opacity-10 rounded-sm p-4 mb-6">
                                    <p className="font-semibold">Edition: {selectedService.editionCount}</p>
                                    <p className="text-sm text-text-muted mt-1">
                                        This is a limited edition piece. Only a few remain available.
                                    </p>
                                </div>
                            )}

                            <p className="text-4xl font-bold text-primary mb-6">
                                ₹{selectedService.price?.toLocaleString()}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-2">Includes:</h4>
                                <ul className="text-sm text-text-muted space-y-1">
                                    <li>✓ Certificate of Authenticity</li>
                                    <li>✓ Artist Signature</li>
                                    <li>✓ Limited Edition Number</li>
                                    <li>✓ Premium Packaging</li>
                                </ul>
                            </div>

                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}
