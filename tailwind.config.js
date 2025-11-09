/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css,scss}",
    ],
    theme: {
        extend: {
            fontFamily: {
                robotoMono: ['Roboto Mono', 'monospace'],
            },
            colors: {
                'primary': '#B3BCBB', 
                'secondary': '#99BCC0',
                'tertiary': '#C36868',
                'black': '#000000',
                'white': '#FFFFFF',
                'dark-gray': '#323232'
            },
            fontSize: {
                'sm': ['1rem', {lineHeight: 'normal', fontWeight: '400'}],
                'md': ['1.5rem', {lineHeight: 'normal', fontWeight: '500'}],
                'lg': ['2rem', {lineHeight: 'normal', fontWeight: '500'}],
                'xl': ['5.625rem', {lineHeight: '92.9%', fontWeight: '700'}]
            },
            borderRadius: {
                DEFAULT: '1.25rem',
                'lg': '1.5rem',
                'sm': '12px'
            },
        },
    },
    plugins: [],
}

