const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx)'],
  core: {
    builder: "webpack5",
  },
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      loader: require.resolve('babel-loader'),
      options: {
        cacheDirectory: true,
        presets: [require.resolve('@emotion/babel-preset-css-prop')],
      },
    });
    return config;
  },
};
