'use strict'

const webpack = require('webpack')

module.exports = {
  output: {
    filename: 'app.[hash].min.js'
  },
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
      __STACK_ASSETS__: true,
      __PIWIK_TRACKER_URL__: JSON.stringify('https://piwik.cozycloud.cc/piwik.php'),
      __PIWIK_SITEID__: 8,
      __PIWIK_DIMENSION_ID_APP__: 1
    })
  ]
}
