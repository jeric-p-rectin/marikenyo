import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1D1912",
        secondary: "#F3F3E6",
        tertuary: "#EECD5C",
        quartery: "#D2A63C",
        quinary: "#BB8525", 
      },
    },
  },
  plugins: [],
} satisfies Config;
