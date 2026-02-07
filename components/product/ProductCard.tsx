'use client'

import Card, { CardImage, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export interface Product {
    id: string
    name: string
    type: 'physical' | 'digital' | 'merchandise'
    category: string
    artistId: string
    artistName: string
    price: number
    images: string[]
    description: string
    shipping?: string
    customizable?: boolean
    inStock: boolean
}

interface ProductCardProps {
    product: Product
    onView: (product: Product) => void
    onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onView, onAddToCart }: ProductCardProps) {
    return (
        <Card hover onClick={() => onView(product)}>
            <CardImage
                src={product.images[0]}
                alt={product.name}
            />
            <CardContent>
                <p className="text-sm text-text-muted mb-1">{product.artistName}</p>
                <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-1">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-primary">
                        ₹{product.price.toLocaleString()}
                    </p>
                    {product.inStock ? (
                        <Button
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation()
                                onAddToCart(product)
                            }}
                        >
                            Add to Cart
                        </Button>
                    ) : (
                        <span className="text-sm text-red-600">Out of Stock</span>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
