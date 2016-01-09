webpackDistConfig = require '../webpack.dist.config.js'

module.exports =
  options: webpackDistConfig
  dist:
    cache: false
