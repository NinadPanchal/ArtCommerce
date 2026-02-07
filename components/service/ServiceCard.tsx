'use client'

import Card, { CardImage, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export interface Service {
    id: string
    name: string
    type: 'commission' | 'limited-edition' | 'art-service' | 'educational'
    category: string
    artistId?: string
    artistName?: string
    priceRange?: string
    price?: number
    description: string
    turnaround?: string
    images: string[]
    editionCount?: string
    date?: string
    duration?: string
    mode?: string
    seatsAvailable?: number
}

interface ServiceCardProps {
    service: Service
    onView: (service: Service) => void
}

export default function ServiceCard({ service, onView }: ServiceCardProps) {
    const displayPrice = service.price
        ? `₹${service.price.toLocaleString()}`
        : service.priceRange
            ? `₹${service.priceRange}`
            : 'Get Quote'

    return (
        <Card hover onClick={() => onView(service)}>
            <CardImage
                src={service.images[0]}
                alt={service.name}
            />
            <CardContent>
                {service.artistName && (
                    <p className="text-sm text-text-muted mb-1">{service.artistName}</p>
                )}
                <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                    {service.name}
                </h3>
                <p className="text-sm text-text-muted mb-3 line-clamp-2">
                    {service.description}
                </p>

                {service.editionCount && (
                    <p className="text-sm font-medium text-accent mb-2">
                        Edition: {service.editionCount}
                    </p>
                )}

                {service.date && (
                    <p className="text-sm text-text-muted mb-2">
                        📅 {service.date} • {service.duration}
                    </p>
                )}

                {service.seatsAvailable !== undefined && (
                    <p className="text-sm text-text-muted mb-2">
                        {service.seatsAvailable > 0
                            ? `${service.seatsAvailable} seats available`
                            : 'Fully booked'
                        }
                    </p>
                )}

                <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-bold text-primary">
                        {displayPrice}
                    </p>
                    <Button size="sm">
                        View Details
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
