/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: 
    {
      keyframes:{
        float: {
          "0%, 100%": {transform: "translateY(0)"},
          "50%": {transform: "translateY(-20px)"},
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },

      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        softGray: "#ECF4FC",
        gray: "#B3C4D4"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};