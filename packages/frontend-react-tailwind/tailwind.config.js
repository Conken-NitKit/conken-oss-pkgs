// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createMariGoldColors } = require('@unwheel-pkg/tailwind-support');

const {
  backgroundColor,
  backgroundImage,
  textColor,
  borderColor,
} = createMariGoldColors();

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extends: {
      backgroundColor,
      backgroundImage,
      textColor,
      borderColor,
    }
  }
}
