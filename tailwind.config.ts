import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E88C7",
          dark: "#166ba0",
          light: "#3aa0dc",
        },
        secondary: {
          DEFAULT: "#2C3E50",
          dark: "#1A252F",
          light: "#3e5871",
        },
        accent: {
          DEFAULT: "#2C3E50",
          light: "#A8D5E8",
          dark: "#1A252F",
        },
        highlight: "#A8D5E8",
        background: "#FFFFFF",
        surface: "#FAFAFA",
        "text-main": "#1E293B",
        "text-secondary": "#4A4A4A",
        "text-muted": "#64748B",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
