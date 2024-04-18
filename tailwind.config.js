/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      tablet: "795px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        lightTextOpacity: "#5d0560ea",
        lightHighlight: "#c2410c",
        lightAltHighlight: "#450A0A",
        lightHighlightBg: "#9CA3AF",
        darkBg: "#1d1b26",
        darkText: "#d3c1f0",
        darkTextOpacity: "#d3c1f0ea",
        darkHighlight: "#bef264",
        darkAltHighlight: "#FEF9C3",
        darkHighlightBg: "#525252",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      // animation: {
      //   marquee: "marquee 25s linear infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(0%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
    },
  },
  darkMode: "class",
  plugins: [],
};
