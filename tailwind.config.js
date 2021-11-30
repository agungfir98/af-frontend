module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
      },
      colors: {
        white: {
          wdew: "#f1faee",
          imperial: "#e63946",
          blue1: "#a8dadc",
          blue2: "#457b9d",
          blue3: "#1d3557",
        },
        dark: {
          goldyellow: "#ffd60a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
