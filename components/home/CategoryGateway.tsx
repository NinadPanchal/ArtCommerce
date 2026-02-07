import Link from 'next/link'
import Card, { CardContent } from '@/components/ui/Card'

const categories = [
    {
        title: 'Physical Art Products',
        description: 'Original artworks, handcrafted items, and prints',
        icon: '🎨',
        href: '/e-commerce/physical-art',
        color: 'from-blue-50 to-blue-100',
    },
    {
        title: 'Art-Based Merchandise',
        description: 'T-shirts, mugs, tote bags, and home décor',
        icon: '👕',
        href: '/e-commerce/merchandise',
        color: 'from-purple-50 to-purple-100',
    },
    {
        title: 'Digital Art Products',
        description: 'Digital illustrations, templates, and downloads',
        icon: '💻',
        href: '/e-commerce/digital-art',
        color: 'from-green-50 to-green-100',
    },
    {
        title: 'Creative Services',
        description: 'Commissions, workshops, and consultancy',
        icon: '✨',
        href: '/creative-services/commissions',
        color: 'from-amber-50 to-amber-100',
    },
]

export default function CategoryGateway() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                    Explore Categories
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link key={category.href} href={category.href}>
                            <Card hover className="h-full">
                                <div className={`bg-gradient-to-br ${category.color} p-8 text-center`}>
                                    <div className="text-6xl mb-4">{category.icon}</div>
                                </div>
                                <CardContent>
                                    <h3 className="text-xl font-semibold text-primary mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-text-muted">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
