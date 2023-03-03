/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#0F0E0E',
        'btn-color': '#010101',
        'btn-hover': '#000701',
      }
    },
  },
  plugins: [],
}
