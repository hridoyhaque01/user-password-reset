/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},

    colors: {
      transparent: "transparent",
      black: "#212121",
      pureBlackColor: "#000000",
      fadeReg: "#BDBDBD",
      white: "#fff",
      whiteSemi: "#FAFAFA",
      primaryColor: "#515EDB",
    },

    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },

    backgroundImage: {
      authBg: "url('./assets/images/authBg.png')",
    },
  },
  plugins: [require("preline/plugin")],
};
