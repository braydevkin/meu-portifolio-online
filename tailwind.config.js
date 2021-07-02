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
