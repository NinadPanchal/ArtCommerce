import { Input, TextArea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function BecomeArtistPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary to-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-center">
                        Become an Artist
                    </h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Join our thriving community of talented artists. Showcase your work,
                        offer services, and grow your creative business with ArtCommerce.
                    </p>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-display font-bold text-center mb-12">
                    Why Sell on ArtCommerce?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-sm p-8 shadow-sm">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-xl font-semibold mb-3">Showcase Your Work</h3>
                        <p className="text-text-muted">
                            Create a beautiful portfolio and reach thousands of art enthusiasts actively looking for unique creations.
                        </p>
                    </div>

                    <div className="bg-white rounded-sm p-8 shadow-sm">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="text-xl font-semibold mb-3">Earn More</h3>
                        <p className="text-text-muted">
                            Keep 85% of your sales. Low commission rates and transparent pricing with no hidden fees.
                        </p>
                    </div>

                    <div className="bg-white rounded-sm p-8 shadow-sm">
                        <div className="text-4xl mb-4">📈</div>
                        <h3 className="text-xl font-semibold mb-3">Grow Your Business</h3>
                        <p className="text-text-muted">
                            Access analytics, marketing tools, and a supportive community to help your creative business thrive.
                        </p>
                    </div>
                </div>

                {/* Success Stories */}
                <div className="bg-white rounded-sm p-12 mb-16">
                    <h2 className="text-3xl font-display font-bold text-center mb-8">
                        Artist Success Stories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                                alt="Ananya"
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <p className="text-center text-text-muted italic mb-2">
                                "ArtCommerce helped me turn my passion into a full-time career. I've sold over 100 pieces!"
                            </p>
                            <p className="text-center font-semibold">- Ananya M.</p>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                                alt="Rajesh"
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <p className="text-center text-text-muted italic mb-2">
                                "The commission system works great for my custom portrait business. Highly recommend!"
                            </p>
                            <p className="text-center font-semibold">- Rajesh K.</p>
                        </div>

                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                                alt="Priya"
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <p className="text-center text-text-muted italic mb-2">
                                "Best platform for teaching workshops. The booking system is seamless and professional."
                            </p>
                            <p className="text-center font-semibold">- Priya S.</p>
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <div className="max-w-2xl mx-auto bg-white rounded-sm shadow-sm p-8">
                    <h2 className="text-3xl font-display font-bold mb-6">Apply Now</h2>
                    <p className="text-text-muted mb-8">
                        Fill out the form below and we'll review your application. You'll hear from us within 2-3 business days.
                    </p>

                    <form className="space-y-4">
                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="Your name"
                            required
                        />

                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            required
                        />

                        <Input
                            type="tel"
                            label="Phone Number"
                            placeholder="+91 XXXXX XXXXX"
                            required
                        />

                        <Input
                            type="text"
                            label="Art Specialization"
                            placeholder="e.g., Abstract Painting, Portrait Art, Digital Illustration"
                            required
                        />

                        <TextArea
                            label="Tell us about yourself"
                            placeholder="Share your artistic journey, experience, and what makes your work unique..."
                            required
                        />

                        <Input
                            type="url"
                            label="Portfolio/Website Link (Optional)"
                            placeholder="https://..."
                        />

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-text mb-2">
                                Upload Sample Work (Optional)
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="w-full px-4 py-2 border border-border rounded-sm"
                            />
                            <p className="text-xs text-text-muted mt-1">Upload up to 5 images of your best work</p>
                        </div>

                        <label className="flex items-start">
                            <input type="checkbox" className="mr-2 mt-1" required />
                            <span className="text-sm text-text-muted">
                                I confirm that all work submitted is my original creation and I agree to ArtCommerce's seller terms
                            </span>
                        </label>

                        <Button type="submit" variant="primary" size="lg" className="w-full">
                            Submit Application
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
