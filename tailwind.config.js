/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.js", "./src/assets/js/*.js", "./index.html"],
  theme: {
    colors: {
      Tomato: "hsl(4, 100%, 67%)",
      "Dark-Slate-Grey": "hsl(234, 29%, 20%)",
      "Charcoal-Grey": "hsl(235, 18%, 26%)",
      Grey: "hsl(231, 7%, 60%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      400: ["400"],
      700: ["700"],
    },
    screens: {
      max320: { max: "320px" },
      // => @media (max-width: 320px) { ... }
      mobile1: "320px",
      // => @media (min-width: 320px) { ... }
      mobile2: "375px",
      // => @media (min-width: 375px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      largeDesktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
