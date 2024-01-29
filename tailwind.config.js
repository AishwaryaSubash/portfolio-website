/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Manrope"', "sans-serif"],
        headingFont: ['"Black Ops One"', "system-ui"],
        bodyFont: ['"Philosopher"', "sans-serif"],
        textFont: ['"Russo One"', "sans-serif"],
      },
      colors: {
        lightBg: "#f7f2f5",
        lightText: "#5d0560",
        lightHighlight: "#c2410c",
        darkBg: "#1d1b26",
        darkText: "#d3c1f0",
        darkHighlight: "#bef264",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
