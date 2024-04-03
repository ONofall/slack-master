/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(\"../src/img/lidye-1Shk_PkNkNw-unsplash.jpg \")",
        'sky': "url(\"../src/img/pexels-photo-1072179.jpeg \")",
      }
    },
  },
  plugins: [],
}