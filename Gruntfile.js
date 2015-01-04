module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      files: ['tests/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js', 'jsanddom.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/styles/css"]
        },
        files: {
          "assets/styles/css/main.css": "assets/styles/less/*.less"
        }
      }
    },
    watch: {
      files: ['assets/styles/less/*.less', 'Gruntfile.js', 'src/**/*.js', 'tests/**/*.js', 'jsanddom.js'],
      tasks: ['less', 'jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('default', ['jshint', 'qunit']);

};
