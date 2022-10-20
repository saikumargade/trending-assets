/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#0b1d3b',
          dark: '#041126',
        },
        purple: {
          0 : '#DC1FFF',
        }
      }
    },
  },
  plugins: [],
}
