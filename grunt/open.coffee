module.exports =
  options:
    delay: 500
  dev:
    path: 'http://localhost:<%= connect.options.port %>/webpack-dev-server/'
  dist:
    path: 'http://localhost:<%= connect.options.port %>/'
