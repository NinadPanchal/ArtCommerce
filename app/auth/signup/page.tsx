import Link from 'next/link'
import { Input, Select } from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-sm shadow-sm p-8">
                <h1 className="text-3xl font-display font-bold text-center mb-2">Create Account</h1>
                <p className="text-center text-text-muted mb-8">Join ArtCommerce today</p>

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
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                        required
                    />

                    <Select
                        label="I want to"
                        options={[
                            { value: 'buyer', label: 'Buy art and services' },
                            { value: 'artist', label: 'Sell my art and services' },
                            { value: 'both', label: 'Both buy and sell' },
                        ]}
                        required
                    />

                    <label className="flex items-start">
                        <input type="checkbox" className="mr-2 mt-1" required />
                        <span className="text-sm text-text-muted">
                            I agree to the{' '}
                            <a href="#" className="text-accent hover:underline">Terms of Service</a>
                            {' '}and{' '}
                            <a href="#" className="text-accent hover:underline">Privacy Policy</a>
                        </span>
                    </label>

                    <Button type="submit" variant="primary" className="w-full">
                        Create Account
                    </Button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-text-muted">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="w-full inline-flex justify-center py-2 px-4 border border-border rounded-sm shadow-sm bg-white text-sm font-medium text-text hover:bg-gray-50">
                            Google
                        </button>
                        <button className="w-full inline-flex justify-center py-2 px-4 border border-border rounded-sm shadow-sm bg-white text-sm font-medium text-text hover:bg-gray-50">
                            Facebook
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-center text-sm text-text-muted">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-accent hover:underline font-medium">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}
