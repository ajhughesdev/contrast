module.exports = {
  plugins: [
    require("postcss-nesting"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
