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
        "brisk-mist": "#F5F9FC",
        "brisk-sky": "#E8F3FB",
        "brisk-ink": "#0B1B33",
        "brisk-steel": "#5B6B7C",
        "brisk-blue": "#2F6BFF",
        "brisk-cyan": "#00C2FF",
        "brisk-lime": "#C8FF41",
        "brisk-glass": "rgba(255,255,255,0.55)",
        /* keep legacy token names remapped for safety */
        "brisk-dark": "#0B1B33",
        "brisk-navy": "#E8F3FB",
        "brisk-white": "#FFFFFF",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.25)",
        soft: "0 10px 28px rgba(11,27,51,0.06)",
      },
    },
  },
  plugins: [],
};
