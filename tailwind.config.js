/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0d0c',
          green: '#1a2b26',
          sage: '#b4c4b5',
          earth: '#d2b48c',
          gold: '#c5a059'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.04em',
        widest: '0.1em',
      },
      lineHeight: {
        relaxed: '1.7',
        loose: '2.0',
      }
    },
  },
  plugins: [],
}
