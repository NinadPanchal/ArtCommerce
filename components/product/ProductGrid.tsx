'use client'

import ProductCard, { Product } from './ProductCard'

interface ProductGridProps {
    products: Product[]
    onViewProduct: (product: Product) => void
    onAddToCart: (product: Product) => void
}

export default function ProductGrid({ products, onViewProduct, onAddToCart }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onView={onViewProduct}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    )
}
