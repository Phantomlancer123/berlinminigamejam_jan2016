module.exports =
  dist:
    files: [
      # includes files within path
      {
        flatten: true,
        expand: true,
        src: ['<%= package.src %>/*'],
        dest: '<%= package.dist %>/',
        filter: 'isFile'
      },
      {
        flatten: true,
        expand: true,
        src: ['<%= package.src %>/images/*'],
        dest: '<%= package.dist %>/images/'
      }
    ]
