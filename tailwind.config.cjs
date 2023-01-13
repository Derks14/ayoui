/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ascircular: ["ascircular", "sans"],
      basis: ["basis", "sans-serif"],
    },
    extend: {
      colors: {
        antique: "#F2e7d5",
        pine: "#6D9886",
        onyx: "#393E46",
      },
    },
  },
  plugins: [
    require("@thoughtbot/tailwindcss-aria-attributes"),
    require("@tailwindcss/forms"),
  ],
};
