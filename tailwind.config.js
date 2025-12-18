/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                mlab: {
                    navy: '#0a192f', // Deep navy from logo
                    cyan: '#00d4ff', // Bright cyan
                    purple: '#7c3aed', // Purple accent
                    dark: '#0f172a',
                    orange: '#ff7e67', // M-LAB Orange
                    energy: '#FFC107', // Amber Yellow
                    infrastructure: '#616161', // Dark Gray
                    waste: '#795548', // Earth Brown
                    transport: '#2196F3', // Transportation Blue
                    nature: '#4CAF50', // Grass Green
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('data:image/svg+xml,...')", // Placeholder
            }
        },
    },
    plugins: [],
}
