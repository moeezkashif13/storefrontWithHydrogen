const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

    screens: {
      'xs': '320px',
      'SMMax': {'max': '500px'},

      ...defaultTheme.screens,
    },


  },
  plugins: [require('@tailwindcss/typography')],
}
