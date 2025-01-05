/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      colors: {
        mycolor: '#da373d',
      }
    },
  },
  plugins: [],
}