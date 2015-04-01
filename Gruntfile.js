'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    templatizer: {
      options: {
      },
      target: {
        files: [{
            expand: true,
            cwd: 'test',
            src: ['**/*.jade'],
            dest: 'test/result', 
            ext: '.js'
        }]
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    clean: {
      tests: ['tmp']
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['jshint', 'clean', 'templatizer']);
};
