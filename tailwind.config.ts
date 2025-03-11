import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4A90E2",
          DEFAULT: "#357ABD",
          dark: "#245A8D",
        },
        background: {
          light: "#ffffff",
          DEFAULT: "#f8f8f8",
          dark: "#1a1a1a",
        },
        text: {
          light: "#1a1a1a",
          DEFAULT: "#333333",
          dark: "#f8f8f8",
        },
      },
      fontFamily: {
        freesentation: ["FreesentationVF", "sans-serif"],
        cafe24: ["Cafe24Ohsquare", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
