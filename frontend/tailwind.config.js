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
        'fondo': "url('./src/assets/images/fondo_portfolio.jpg')",
      }
    },
  },
  plugins: [],
}

