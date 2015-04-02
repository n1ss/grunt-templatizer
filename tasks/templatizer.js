'use strict';

var templatizer = require('templatizer');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('templatizer', 'Grunt plugin for Henrik Jotereg templatizer', function() {
      var options = this.data;

      this.files.forEach(function (el) {

        templatizer(el.src, el.dest, options);
      });
  });

};
