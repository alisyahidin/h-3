const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['components/**/*.js', 'pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          default: '#B72842'
        },
      }
    }
  },
  variants: {},
  plugins: [],
}