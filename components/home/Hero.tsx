import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6">
                    ArtCommerce
                </h1>
                <p className="text-2xl md:text-3xl text-secondary mb-4 font-light">
                    Buy. Commission. Create.
                </p>
                <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10">
                    A unified digital marketplace for physical art, digital creations, merchandise,
                    and creative services. Connect with artists and bring your vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/explore">
                        <Button variant="primary" size="lg">
                            Explore Marketplace
                        </Button>
                    </Link>
                    <Link href="/creative-services/commissions">
                        <Button variant="outline" size="lg">
                            Hire an Artist
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
