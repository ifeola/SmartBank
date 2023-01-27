/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560px",
    },
    extend: {
      fontFamily: {
        sans: ["General sans", "Montserrat"],
        serif: ["ui-serif", "Georgia"],
      },
      colors: {
        primaryColor: "#5A45FE",
        secondaryColor: "#5A45FE",
        bodyFont: "#0F0B2E",
        darkBlue: "rgb(15,23,42)",
      },
    },
  },
  plugins: [],
};
