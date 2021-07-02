const { guessProductionMode } = require("@ngneat/tailwind");
const colors = require('tailwindcss/colors')
process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      primaryColor: {
        100: "#292929"
      },
      secundaryColor: {
        100: "#2F205B"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
