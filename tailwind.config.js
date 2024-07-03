/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT ( {
    content: [
      "./public/**/*.{html,js}",
      "./node_modules/tw-elements/js/**/*.js"
    ],

  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/plugin.cjs")],
});

