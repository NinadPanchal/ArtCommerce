'use client'

import { useState } from 'react'
import ServiceCard, { Service } from '@/components/service/ServiceCard'
import CommissionForm from '@/components/service/CommissionForm'
import servicesData from '@/data/services.json'

export default function CommissionsPage() {
    const [commissionFormOpen, setCommissionFormOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<Service | null>(null)

    const services = (servicesData as Service[]).filter(s => s.type === 'commission')

    const handleViewService = (service: Service) => {
        setSelectedService(service)
        setCommissionFormOpen(true)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Customised & Commission-Based Art
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Bring your vision to life with custom artwork created by professional artists.
                        From portraits to murals, we make your creative dreams a reality.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 mb-8">
                    <h3 className="font-semibold text-lg mb-2">How It Works</h3>
                    <ol className="list-decimal list-inside space-y-2 text-text-muted">
                        <li>Select a service and fill out the commission request form</li>
                        <li>Artist reviews your requirements and provides a quote</li>
                        <li>Upon approval, artist begins work with regular updates</li>
                        <li>Final artwork delivered within agreed timeline</li>
                    </ol>
                </div>

                <h2 className="text-2xl font-display font-bold mb-6">Available Services</h2>

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
                        <p className="text-xl text-text-muted">No commission services available at the moment.</p>
                    </div>
                )}
            </div>

            <CommissionForm
                isOpen={commissionFormOpen}
                onClose={() => setCommissionFormOpen(false)}
                serviceName={selectedService?.name}
            />
        </div>
    )
}
