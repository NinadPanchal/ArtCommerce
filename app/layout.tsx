import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'ArtCommerce - Buy. Commission. Create.',
    description: 'Digital Trade of Creative Products and Services. Purchase physical art, digital art, merchandise, commission artists, and book educational workshops.',
    keywords: ['art marketplace', 'digital art', 'commission art', 'art workshops', 'creative services'],
    icons: {
        icon: '/favicon.ico',
        apple: '/icon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body>
                <CartProvider>
                    <Header />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    )
}
