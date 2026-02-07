import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Dr. Özgür Oktay Nar
        brand: {
          DEFAULT: "#01CAB8",
          50: "#E6FAF8",
          100: "#B3F0EB",
          200: "#80E6DE",
          300: "#4DDCD1",
          400: "#1AD2C4",
          500: "#01CAB8",
          600: "#01A899",
          700: "#01867A",
          800: "#00645B",
          900: "#00423D",
        },
        accent: {
          DEFAULT: "#34C5A1",
          light: "#5DD4B8",
          dark: "#28A085",
        },
        highlight: {
          DEFAULT: "#9D57FF",
          light: "#B87FFF",
          dark: "#7D3DD9",
        },
        // Text colors
        heading: "#1A1A1A",
        body: "#4D4D4D",
        muted: "#666666",
        // Medical/Professional feel
        medical: {
          blue: "#E3F2FD",
          green: "#E8F5E9",
          orange: "#FFF3E0",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
