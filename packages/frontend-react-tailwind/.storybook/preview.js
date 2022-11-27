export const parameters = {
  controls: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
