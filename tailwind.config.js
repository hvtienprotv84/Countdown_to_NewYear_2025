/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Abel', 'sans-serif'],
      display: ['Maven Pro']
    },
    extend: {
      backgroundImage: {
        'image': "url('/src/assets/background.jpg')"
      },
      colors: {
        'bg': '#382d29',
      }

    },
  },
  plugins: [],
}