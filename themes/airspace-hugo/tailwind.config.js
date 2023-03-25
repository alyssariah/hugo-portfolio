/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.md",
    "layouts/*.html",
    "layouts/**/*.html",
    "layouts/**/**/*.html",
  ],
  theme: {
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#5998C5",
      border: "#ACB9C4",
      body: "#FFFFFC",
      text: "#666666",
      textDark: "#333333",
      textLight: "#7b7b7b",
      border: "#ACB9C4",
      black: "#000000",
      white: "#FFFFFC",
      light: "#f5f5f5",
    },
    fontFamily: {
      display: ["Barlow Condensed", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      logo: ["Great Vibes", "cursive"],
      code: ["Barlow Condensed", "sans-serif"],
    },
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px",
      "2xl": "16px",
      "3xl": "24px",
      full: "9999px",
      large: "12px",
    },
    extend: {},
  },
  plugins: [],
};
