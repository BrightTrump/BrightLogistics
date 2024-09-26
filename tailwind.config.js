/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#6366f1",
        tertiary: "#4b5563",
        white: "#f8fafc",
      },

      keyframes: {
        wiggle: {
          "0%": {
            primary: "#030712",
          },
          "25%": {
            secondary: "#6366f1",
          },
          "50%": {
            tertiary: "#4b5563",
          },
          "75%": {
            white: "#f8fafc",
          },
          "100%": {
            white: "#f8fafc",
          },
        },
      },
    },
  },
  plugins: [],
};
