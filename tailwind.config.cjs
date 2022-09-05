/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'uwqhd-gradient': "url('/src/assets/bg-uwqhd-gradient-1000.webp')",
      },
      screens: {
        xs: '374px',
        ...defaultTheme.screens,
        md: '790px',
      },
    },
  },
  important: '#root',
  plugins: [require('tailwind-scrollbar-hide')],
}
