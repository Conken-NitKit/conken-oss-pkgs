const path = require('path');
path.resolve(__dirname, "../src/styles/global.css");

export const parameters = {
  controls: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
