/** @type {import('tailwindcss').Config} */
import {} from './src/assets/'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato']
    },
    extend: {
      backgroundImage: {
        'fondo': "url('./src/assets/images/background_portfolio.jpg')",
      },
      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

