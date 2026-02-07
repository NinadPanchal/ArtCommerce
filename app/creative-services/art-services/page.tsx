'use client'

import { useState } from 'react'
import ServiceCard, { Service } from '@/components/service/ServiceCard'
import CommissionForm from '@/components/service/CommissionForm'
import servicesData from '@/data/services.json'

export default function ArtServicesPage() {
    const [commissionFormOpen, setCommissionFormOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)

    const services = (servicesData as Service[]).filter(s => s.type === 'art-service')

    const handleViewService = (service: Service) => {
        setSelectedService(service)
        setCommissionFormOpen(true)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Professional Art Services
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Expert creative services for businesses and individuals. From branding to illustration,
                        our artists deliver professional-grade work tailored to your needs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-green-50 border border-green-200 rounded-sm p-6 mb-8">
                    <h3 className="font-semibold text-lg mb-2">Service Process</h3>
                    <ol className="list-decimal list-inside space-y-2 text-text-muted">
                        <li>Submit project brief with your requirements</li>
                        <li>Receive personalized quote within 48 hours</li>
                        <li>Collaborate with artist through development phases</li>
                        <li>Receive final deliverables in your preferred format</li>
                    </ol>
                </div>

                <h2 className="text-2xl font-display font-bold mb-6">Our Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                        <p className="text-xl text-text-muted">No art services available at the moment.</p>
                    </div>
                )}

                {/* Additional Services List */}
                <div className="bg-white rounded-sm p-8 shadow-sm">
                    <h3 className="text-2xl font-display font-bold mb-6">Additional Services Available</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2">Design Services</h4>
                            <ul className="space-y-2 text-text-muted">
                                <li>• Logo & Brand Identity Design</li>
                                <li>• Book Cover & Editorial Design</li>
                                <li>• Packaging Design</li>
                                <li>• Social Media Graphics</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Specialized Services</h4>
                            <ul className="space-y-2 text-text-muted">
                                <li>• Exhibition Display Design</li>
                                <li>• Art Curation Services</li>
                                <li>• Art Consultancy</li>
                                <li>• Portfolio Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <CommissionForm
                isOpen={commissionFormOpen}
                onClose={() => setCommissionFormOpen(false)}
                serviceName={selectedService?.name}
            />
        </div>
    )
}
