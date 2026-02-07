'use client'

import { useState } from 'react'
import ServiceCard, { Service } from '@/components/service/ServiceCard'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import servicesData from '@/data/services.json'
import Link from 'next/link'

export default function EducationalPage() {
    const [selectedService, setSelectedService] = useState<Service | null>(null)
    const [modalOpen, setModalOpen] = useState(false)

    const services = (servicesData as Service[]).filter(s => s.type === 'educational')

    const handleViewService = (service: Service) => {
        setSelectedService(service)
        setModalOpen(true)
    }

    const handleEnroll = () => {
        if (selectedService) {
            alert(`Enrolled in ${selectedService.name}! You will receive confirmation via email.`)
            setModalOpen(false)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Educational Art Programs
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl">
                        Learn from master artists through workshops, certificate courses, and masterclasses.
                        Develop your skills and unlock your creative potential.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-indigo-50 border border-indigo-200 rounded-sm p-6 mb-8">
                    <h3 className="font-semibold text-lg mb-2">What to Expect</h3>
                    <ul className="space-y-2 text-text-muted">
                        <li>• Learn from award-winning professional artists</li>
                        <li>• Hands-on practice with personalized feedback</li>
                        <li>• Small batch sizes for individual attention</li>
                        <li>• Certificate of completion for courses</li>
                        <li>• Access to exclusive learning materials</li>
                    </ul>
                </div>

                <div className="flex gap-4 mb-6">
                    <button className="px-4 py-2 bg-primary text-white rounded-sm">
                        All Programs
                    </button>
                    <button className="px-4 py-2 bg-white text-text border border-border rounded-sm hover:bg-gray-50">
                        Workshops
                    </button>
                    <button className="px-4 py-2 bg-white text-text border border-border rounded-sm hover:bg-gray-50">
                        Online Courses
                    </button>
                    <button className="px-4 py-2 bg-white text-text border border-border rounded-sm hover:bg-gray-50">
                        Masterclasses
                    </button>
                </div>

                <h2 className="text-2xl font-display font-bold mb-6">Upcoming Programs</h2>

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
                        <p className="text-xl text-text-muted">No educational programs available at the moment.</p>
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
                                className="w-full aspect-square object-cover rounded-sm mb-4"
                            />

                            {selectedService.artistName && (
                                <Link
                                    href={`/artist/${selectedService.artistId}`}
                                    className="text-accent hover:underline inline-block"
                                >
                                    Instructor: {selectedService.artistName}
                                </Link>
                            )}
                        </div>

                        <div>
                            <p className="text-text mb-6">{selectedService.description}</p>

                            <div className="space-y-4 mb-6">
                                {selectedService.date && (
                                    <div>
                                        <p className="font-semibold">Date</p>
                                        <p className="text-text-muted">{selectedService.date}</p>
                                    </div>
                                )}

                                {selectedService.duration && (
                                    <div>
                                        <p className="font-semibold">Duration</p>
                                        <p className="text-text-muted">{selectedService.duration}</p>
                                    </div>
                                )}

                                {selectedService.mode && (
                                    <div>
                                        <p className="font-semibold">Mode</p>
                                        <p className="text-text-muted">{selectedService.mode}</p>
                                    </div>
                                )}

                                {selectedService.seatsAvailable !== undefined && (
                                    <div>
                                        <p className="font-semibold">Availability</p>
                                        <p className={`${selectedService.seatsAvailable > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {selectedService.seatsAvailable > 0
                                                ? `${selectedService.seatsAvailable} seats available`
                                                : 'Fully booked'
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>

                            <p className="text-4xl font-bold text-primary mb-6">
                                ₹{selectedService.price?.toLocaleString()}
                            </p>

                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full"
                                onClick={handleEnroll}
                                disabled={selectedService.seatsAvailable === 0}
                            >
                                {selectedService.seatsAvailable === 0 ? 'Fully Booked' : 'Enroll Now'}
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}
