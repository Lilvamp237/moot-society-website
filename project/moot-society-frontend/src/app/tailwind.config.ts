// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. We tell Tailwind to use our CSS variables for colors
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'secondary-bg': 'var(--secondary-bg)',
        'border-color': 'var(--border-color)',
        // We define our gold accents as a reusable palette
        gold: {
          DEFAULT: 'var(--accent-gold)',
          hover: 'var(--accent-gold-hover)',
        }
      },
      // 2. We tell Tailwind about our new font families
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Sets Inter as the default
        serif: ['var(--font-playfair)', 'serif'], // Creates a 'font-serif' utility
      },
      // 3. Optional: Add some subtle animations
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;