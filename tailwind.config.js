/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#161616',
        'secondary': '#787cfe',
        'offwhite': '#c2c2c2',
        'grey': '#343434'
      },
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}
