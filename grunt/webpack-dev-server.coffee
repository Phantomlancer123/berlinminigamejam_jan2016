path = require 'path'

webpackDevConfig = require '../webpack.config.js'

module.exports =
  options:
    hot: true
    port: 9000
    webpack: webpackDevConfig
    publicPath: '/assets/'
    contentBase: './<%= package.src %>/'
  start:
    keepAlive: true
