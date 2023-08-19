/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'mobile': '390px',
      // => @media (min-width: 390px) { ... }
    },

    extend: {
      colors:{
        'primary':'#f3c614',
        'secundary':'#353535'
      },
      height:{
        '100':'25rem'
      }
    },
  },
  plugins: [],
}

