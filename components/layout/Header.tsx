'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { itemCount } = useCart()

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="ArtVPP - Art Commerce Platform"
                            width={180}
                            height={60}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="text-text hover:text-primary transition-colors font-medium">
                                E-Commerce
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <Link href="/e-commerce/physical-art" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Physical Art Products
                                </Link>
                                <Link href="/e-commerce/merchandise" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Art-Based Merchandise
                                </Link>
                                <Link href="/e-commerce/digital-art" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Digital Art Products
                                </Link>
                            </div>
                        </div>

                        <div className="relative group">
                            <button className="text-text hover:text-primary transition-colors font-medium">
                                Creative Services
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <Link href="/creative-services/commissions" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Commissions
                                </Link>
                                <Link href="/creative-services/limited-edition" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Limited Edition Works
                                </Link>
                                <Link href="/creative-services/art-services" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Art Services
                                </Link>
                                <Link href="/creative-services/educational" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                                    Educational Programs
                                </Link>
                            </div>
                        </div>

                        <Link href="/explore" className="text-text hover:text-primary transition-colors font-medium">
                            Explore
                        </Link>

                        <Link href="/become-artist" className="text-text hover:text-primary transition-colors font-medium">
                            Become an Artist
                        </Link>
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        <Link href="/auth/login" className="hidden md:block text-text hover:text-primary transition-colors font-medium">
                            Login
                        </Link>
                        <Link href="/cart" className="relative">
                            <svg className="w-6 h-6 text-text hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                {itemCount}
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-text"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="space-y-1">
                            <div className="py-2">
                                <p className="font-semibold text-sm text-text-muted px-3 mb-2">E-Commerce</p>
                                <Link href="/e-commerce/physical-art" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Physical Art Products
                                </Link>
                                <Link href="/e-commerce/merchandise" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Art-Based Merchandise
                                </Link>
                                <Link href="/e-commerce/digital-art" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Digital Art Products
                                </Link>
                            </div>

                            <div className="py-2">
                                <p className="font-semibold text-sm text-text-muted px-3 mb-2">Creative Services</p>
                                <Link href="/creative-services/commissions" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Commissions
                                </Link>
                                <Link href="/creative-services/limited-edition" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Limited Edition Works
                                </Link>
                                <Link href="/creative-services/art-services" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Art Services
                                </Link>
                                <Link href="/creative-services/educational" className="block px-3 py-2 text-text hover:bg-gray-50">
                                    Educational Programs
                                </Link>
                            </div>

                            <Link href="/explore" className="block px-3 py-2 text-text hover:bg-gray-50">
                                Explore
                            </Link>
                            <Link href="/become-artist" className="block px-3 py-2 text-text hover:bg-gray-50">
                                Become an Artist
                            </Link>
                            <Link href="/auth/login" className="block px-3 py-2 text-text hover:bg-gray-50">
                                Login / Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
