module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url"),
    require("postcss-preset-env")({
      stage: 0,
    }), // autoprefixer
    require("postcss-nested"), // nested
    require("css-has-pseudo"), // css-has-pseudo
    require("cssnano")({
      autoprefixer: false,
      discardComments: { removeAll: true }, // remove comments
    }),
  ],
};
