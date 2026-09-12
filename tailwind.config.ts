import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eefbfc",
          100: "#d4f3f6",
          200: "#ade7ed",
          300: "#78d4de",
          400: "#3fb7c6",
          500: "#219bac",
          600: "#1a7c91",
          700: "#1a6376",
          800: "#1c5162",
          900: "#0f2e3a",
          950: "#0a1e26",
        },
        seafoam: {
          50: "#eefcf5",
          100: "#d5f7e5",
          200: "#aeecce",
          300: "#78dbb0",
          400: "#42c28e",
          500: "#22a874",
          600: "#16875f",
          700: "#136c4e",
          800: "#135640",
          900: "#114736",
          950: "#08281f",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "ocean-gradient":
          "linear-gradient(135deg, #0a1e26 0%, #1a6376 50%, #16875f 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
