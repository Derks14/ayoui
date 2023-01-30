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
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeout: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        fadein: 'fadein 0.7s ease-in-out both',
        fadeinfast: 'fadein 0.5s ease-in both',
        fadeout: 'fadeout 1s ease-in'
      }
    },
  },
  plugins: [
    require("@thoughtbot/tailwindcss-aria-attributes"),
    require("@tailwindcss/forms"),
  ],
};
