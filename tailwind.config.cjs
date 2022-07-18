/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-orange": "hsl(25, 97%, 53%)",
        "n-white": "hsl(0, 0%, 100%)",
        "n-light-gray": "hsl(217, 12%, 63%)",
        "n-medium-gray": "hsl(210, 19%, 18%)",
        "n-dark-blue": "hsl(215, 20%, 16%)",
        "n-very-dark-blue": "hsl(228, 11%, 9%)",
      },
      fontFamily: {
        body: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
