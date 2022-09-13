/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amp: {
          bg: "#0d0e12",
          card: "#1c1f25",
          text: "#ffffff",
          subtext: "#b4bccb",
          border: "#282c34",
        },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/bg.png')",
      },
    },
    screens: {
      xxs: "100px",
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
    },
  },
  plugins: [],
};
