const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true
      }
    }, {
      minimumVendorImplementations: 2
    })
  ]
}