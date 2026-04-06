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
        // High-end gallery palette
        background: "#FAF9F6", // Bone White/Off-white
        foreground: "#1A1A1A", // Off-black for better readability than pure black
        accent: "#704214",     // Sepia/Umber for subtle highlights
      },
      fontFamily: {
        // Use a Serif font for headers to look "Artistic"
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;