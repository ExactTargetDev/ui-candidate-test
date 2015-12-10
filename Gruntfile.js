module.exports = function(grunt) {

    var serveStatic = require('serve-static');
    var modRewrite = require('connect-modrewrite');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    livereload: 35729,
                    hostname: 'localhost',
                    open: true,
                    middleware: function (connect) {
                        return [
                            modRewrite(['^[^\\.]*$ /index.html [L]']),
                            connect.static('dist')
                        ];
                    }
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
