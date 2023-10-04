/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}',
  './src/**/*.{html,js}'
],
  theme: {
    extend: {
      colors: {
        'bg': '#192022',
        'main': '#12896F',
        'second': '#19C79F',
        'third': '#C7E2C1',
        'popup': '#cbd5e1',
      },
    },
  }
}

