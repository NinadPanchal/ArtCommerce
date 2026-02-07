import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-sm shadow-sm p-8">
                <h1 className="text-3xl font-display font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-center text-text-muted mb-8">Log in to your ArtCommerce account</p>

                <form className="space-y-4">
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

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-text-muted">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-accent hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <Button type="submit" variant="primary" className="w-full">
                        Log In
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
                    Don't have an account?{' '}
                    <Link href="/auth/signup" className="text-accent hover:underline font-medium">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
