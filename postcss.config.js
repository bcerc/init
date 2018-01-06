module.exports = {
  plugins: {
    'postcss-cssnext': {
      features: {
        customProperties: {
          // variables: require('./src/js/ThemeVars.js')
        },
      },
    },
    'postcss-for': {},
    // needed to transform children in a pseudo class (:first-child)
    'postcss-nested': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {},
  },
}
