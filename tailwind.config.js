/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-header': "#000407",
        'dark-gray': {
          100: '#060608',
          200: '#101014',
          300: '#1B1B21',
          400: '#1B1B21',
          500: '#1B1B21',
        },
        'gray-light': {
          100: '#C0C0CC',
          200: '#CECED9',
          300: '#CECED9',
          400: '#E6E6F2',
          500: '#E6E6F2',
        },
        'orange-main': {
          100: '#CF3302',
          200: '#E54917',
          300: '#F55827',
          400: '#FF7042',
          500: '#FF7042',
        }
      },
      maxWidth: {
        grid: '1216px',
      }
    },
  },
  plugins: [],
}
