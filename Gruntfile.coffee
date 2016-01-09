module.exports = (grunt) ->
  require('time-grunt')(grunt)

  require('load-grunt-config') grunt,
    jitGrunt:
      staticMappings:
        'webpack-dev-server': 'grunt-webpack'

  grunt.registerTask 'serve', (target) ->
    if target is 'dist'
      grunt.task.run ['build', 'open:dist', 'connect:dist']
    else
      grunt.task.run [
        'open:dev',
        'webpack-dev-server'
      ]

  grunt.registerTask 'test', ['karma']

  grunt.registerTask 'build', ['clean', 'copy', 'webpack']

  grunt.registerTask 'deploy', ['build', 'gh-pages']

  grunt.registerTask 'default', ['serve']
