/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f7f2f5",
        lightText: "#5d0560",
        darkBg: "#1d1b26",
        darkText: "#d3c1f0",
      },
    },
  },
  darkMode:"class",
  plugins: [],
};
