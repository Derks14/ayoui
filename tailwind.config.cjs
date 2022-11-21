/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ascircular': ['ascircular', 'sans'],
      'basis': ['basis', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require("@thoughtbot/tailwindcss-aria-attributes"),
    require('@tailwindcss/forms'),
  ],
}
