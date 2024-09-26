/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "450px",
      // => @media (min-width: 450px) 

      md: "768px",
      // => @media (min-width: 768px) 

      lg: "1280px",
      // => @media (min-width: 1280px) 
      
      xl: "1536px",
      // => @media (min-width: 1536px) 
    },
    extend: {
      colors: {
        primary: "#030712",
        secondary: "#6366f1",
        tertiary: "#4b5563",
        white: "#f8fafc",
      },

      // animation: {
      //   "bounce-slow": "bounce 5s ease infinite",
      // },
      // keyframes: {
      //   wiggle: {
      //     "0%": {
      //       primary: "#030712",
      //     },
      //     "25%": {
      //       secondary: "#6366f1",
      //     },
      //     "50%": {
      //       tertiary: "#4b5563",
      //     },
      //     "75%": {
      //       white: "#f8fafc",
      //     },
      //     "100%": {
      //       white: "#f8fafc",
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
