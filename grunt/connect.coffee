mountFolder = (connect, dir) ->
  connect.static require('path').resolve(dir)

module.exports =
  options:
    port: 9000
  dist:
    options:
      keepalive: true
      middleware: (connect) ->
        [mountFolder(connect, pkgConfig.dist)]
