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
      // --- START: ADD THE NEW FONT FAMILY ---
      fontFamily: {
        // This creates the 'font-lora' utility class
        lora: ['var(--font-lora)'], 
      },
      // --- END: ADD THE NEW FONT FAMILY ---
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;