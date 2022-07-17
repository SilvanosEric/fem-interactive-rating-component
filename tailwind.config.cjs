/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-orange": "hsl(25, 97%, 53%)",
        "n-white": "hsl(0, 0%, 100%)",
        "n-light-gray": "hsl(217, 12%, 63%)",
        "n-medium-gray": "hsl(216, 12%, 54%)",
        "n-dark-blue": " hsl(213, 19%, 18%)",
        "n-very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        body: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
