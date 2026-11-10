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
        "brisk-cloud": "#F0F7FC",
        "brisk-ink": "#0B1B33",
        "brisk-steel": "#5B6B7C",
        "brisk-blue": "#2F6BFF",
        "brisk-cyan": "#1EC8FF",
        "brisk-lime": "#C8FF41",
        "brisk-glass": "rgba(255,255,255,0.55)",
        /* legacy aliases remapped to light theme so leftover classnames stay safe */
        "brisk-dark": "#0B1B33",
        "brisk-navy": "#E8F3FB",
        "brisk-white": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 20px 55px rgba(47, 107, 255, 0.10), 0 6px 18px rgba(11, 27, 51, 0.05)",
        soft: "0 10px 28px rgba(11, 27, 51, 0.06)",
      },
      borderRadius: {
        glass: "28px",
      },
    },
  },
  plugins: [],
};
