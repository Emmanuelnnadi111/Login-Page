/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],

  theme: {
    fontFamily: {
      Commissioner: ["Commissioner", "sans - serif"],
    },

    extend: {
      colors: {
        offWhite: "#FFFFFF",
        activeBorderColor: "#D2397E",
        iconsBgCol: "#F6F6F6",
        faceboolCol: "#3B5998",
        regTextCol: "#9197B3",
        borderCol: "#5932EA",
        footerCol: "#1B1F3B",
        textCol: "#1A0710",
        numPagesCol: " #6BC62D",
        manual: "#5932EA",
        dabTextCol: "#9197B3",
        someCol: "rgba(26, 7, 16, 0.65)",
        successBgCol: "rgba(239, 73, 143, 0.14)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
