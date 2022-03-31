// PostCSS configuration
module.exports = (cfg) => {
  const variables = require("./tokens.json");

  const dev = cfg.env === "development",
    scss = cfg.file.extname === ".scss";

  return {
    map: dev ? { inline: false } : false,
    parser: scss ? "postcss-scss" : false,
    plugins: [
      require("postcss-advanced-variables")({ variables }),
      require("postcss-map-get")(),
      require("postcss-nested")(),
      require("postcss-sort-media-queries")(),
      require("postcss-calc")(),
      require("postcss-svg-slim"),
      require("postcss-assets")({
        loadPaths: ["./src/assets/"],
      }),
      require("postcss-preset-env")({
        stage: 0,
        features: {
          "has-pseudo-class": true,
          "place-properties": true,
          "media-query-ranges": true,
        },
      }),
      require("autoprefixer"),
      dev ? null : require("cssnano")(),
    ],
  };
};
