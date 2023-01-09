/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#161616',
        'secondary': '#787cfe'
      },
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}
