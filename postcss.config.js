module.exports = {
  plugins: [
    require("postcss-nesting"),
    require("postcss-nested"),
    require("css-has-pseudo"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
