
module.exports = function(grunt) {
    "use strict";
    // Project configuration.
    grunt.initConfig({
        buildTempFolder: 'grunt-tmp',
        pkg: grunt.file.readJSON('package.json'),
        clean: {
        },
        copy: {
        },
        cssmin: {
        },
        concat: {
        },
        grunticon: {
        },
        shell: {
            bumpVersion: {
                command: 'npm version patch'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-grunticon');

    grunt.registerTask('bendro', ['shell', 'copy', 'clean']);
    grunt.registerTask('default', ['bendro']);
};