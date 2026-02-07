/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a1a1a',
                secondary: '#7c7c7c',
                accent: '#d4af37',
                background: '#fafafa',
                surface: '#ffffff',
                text: '#2d2d2d',
                'text-muted': '#6b6b6b',
                border: '#e5e5e5',
            },
            fontFamily: {
                display: ['var(--font-display)', 'serif'],
                sans: ['var(--font-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
