const webpack = require('webpack')
module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    // Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
      symlinks: false
    }
  },
  chainWebpack: config => {
    config.output.chunkFilename('[name].[chunkhash].js')
  },
  css: {
    extract: {
      filename: '[name].[chunkhash].css'
    }
  },
  publicPath: '',
  'transpileDependencies': [
    '@coreui/utils'
  ]
}
