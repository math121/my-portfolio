/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ribeye: ['"Ribeye Marrow"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
