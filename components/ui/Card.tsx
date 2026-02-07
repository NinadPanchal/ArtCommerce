import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    onClick?: () => void
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
    const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''

    return (
        <div
            className={`bg-surface rounded-sm shadow-sm transition-all duration-300 ${hoverStyles} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export function CardImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
    return (
        <div className={`relative w-full aspect-square overflow-hidden bg-gray-100 ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    )
}
