module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
      autoprefixer: true,
    }),
  ],
};