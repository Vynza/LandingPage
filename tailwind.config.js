/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        vynza: {
          purple: '#8B5CF6',
          dark: '#08080C',
          card: '#12121A',
          border: '#20202C'
        }
      }
    },
  },
  plugins: [],
}
