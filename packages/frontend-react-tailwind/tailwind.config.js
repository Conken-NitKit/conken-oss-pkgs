// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createMariGoldColors } = require('@unwheel-pkg/tailwind-support');

const {
  backgroundColor,
  backgroundImage,
  textColor,
  borderColor,
} = createMariGoldColors();

module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
