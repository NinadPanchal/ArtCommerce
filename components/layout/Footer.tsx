import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-primary text-white mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4">ArtCommerce</h3>
                        <p className="text-gray-300 text-sm">
                            Digital Trade of Creative Products and Services
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/e-commerce/physical-art" className="text-gray-300 hover:text-white transition-colors">
                                    Physical Art
                                </Link>
                            </li>
                            <li>
                                <Link href="/e-commerce/merchandise" className="text-gray-300 hover:text-white transition-colors">
                                    Merchandise
                                </Link>
                            </li>
                            <li>
                                <Link href="/e-commerce/digital-art" className="text-gray-300 hover:text-white transition-colors">
                                    Digital Art
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/creative-services/commissions" className="text-gray-300 hover:text-white transition-colors">
                                    Commissions
                                </Link>
                            </li>
                            <li>
                                <Link href="/creative-services/art-services" className="text-gray-300 hover:text-white transition-colors">
                                    Art Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/creative-services/educational" className="text-gray-300 hover:text-white transition-colors">
                                    Workshops
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/become-artist" className="text-gray-300 hover:text-white transition-colors">
                                    Become an Artist
                                </Link>
                            </li>
                            <li>
                                <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2026 ArtCommerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
