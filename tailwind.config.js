/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      tablet: "795px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        none: "none",
      },
      fontFamily: {
        headingFont: ['"Philosopher"', "sans-serif"],
        textFont: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        lightBg: "#f7f2f5",
        lightText: "#707070",
        lightHighlightOpacity: "#936993",
        lightHighlight: "#5d0560",
        lightAltHighlight: "#450A0A",
        lightHighlightBg: "#9CA3AF",
        darkBg: "#0b0b0b",
        darkText: "#fff",
        darkHighlightOpacity: "#c272e0",
        darkHighlight: "#f0b6fe",
        darkAltHighlight: "#FEF9C3",
        darkHighlightBg: "#525252",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
