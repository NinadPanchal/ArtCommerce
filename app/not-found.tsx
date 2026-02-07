export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
                <p className="text-2xl text-text-muted mb-8">Page not found</p>
                <a
                    href="/"
                    className="inline-block bg-primary text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-colors"
                >
                    Back to Homepage
                </a>
            </div>
        </div>
    )
}
