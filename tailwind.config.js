/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brisk-dark": "#050810",
        "brisk-navy": "#0A0F1E",
        "brisk-blue": "#1A3A6E",
        "brisk-cyan": "#00C2FF",
        "brisk-white": "#E8EDF5",
        "brisk-glass": "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
