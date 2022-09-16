/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        black: {
          50: "#DFE4F1",
          100: "#BBC5E2",
          200: "#7A8FC7",
          300: "#435B9E",
          400: "#27365D",
          500: "#0B0F1A",
          600: "#090C15",
          700: "#06080E",
          800: "#05060B",
          900: "#020204",
        },
      },
    },
  },
  plugins: [],
};
