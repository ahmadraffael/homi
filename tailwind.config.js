/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.php", "./components/**/*.php", "./pages/**/*.php"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}