const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Comic Neue', ...defaultTheme.fontFamily.sans],
      'serif': ['Open Sans', ...defaultTheme.fontFamily.serif]
    },
    extend: {},
  },
  plugins: [],
}

