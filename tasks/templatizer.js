'use strict';

var templatizer = require('templatizer');
var path = require('path');

module.exports = function(grunt) {

  grunt.registerMultiTask('templatizer', 'Grunt plugin for Henrik Jotereg templatizer', function() {
      var options = this.data;

      console.log(JSON.stringify(this, null, 4));

      this.files.forEach(function (el) {

        templatizer(el.src[0], el.dest, options);
        console.log('');
      });
  });

};
