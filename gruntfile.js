module.exports = function(grunt){
    "use strict";

    // Load each grunt dependency automatically
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        // HTML Validation
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        },


        // JS Concat -> Minify
        concat: {
            dist: {
                src: ['source/scripts/frameworks.js', 'source/scripts/xenolib.js', 'source/scripts/app.js', 'source/scripts/pages/*.js'],
                dest: 'assets/scripts/app.min.js',
            }
        },
        uglify: {
            build: {
                files: {
                    'assets/scripts/app.min.js': ['assets/scripts/app.min.js']
                }
            }
        },


        // SASS Compile -> Compress -> Minify
        sass: {
            dist: {
                files: {
                    'assets/css/master.min.css': 'source/css/master.scss'
                }
            }
        },
        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'assets/css/master.min.css': 'assets/css/master.min.css'
                }
            }
        },
        cssmin: {
            build: {
                src: 'assets/css/master.min.css',
                dest: 'assets/css/master.min.css'
            }
        },


        // Watch Tasks
        watch: {
            html: {
                files: ['test.html'],
                tasks: ['buildhtml']
            },
            js: {
                files: ['source/scripts/**/*.js'],
                tasks: ['buildjs']
            },
            css: {
                files: ['source/css/**/*.scss'],
                tasks: ['buildcss']
            }
        }
    });

    grunt.registerTask('default',   []);
    grunt.registerTask('buildhtml', ['htmlhint']);
    grunt.registerTask('buildjs',   ['concat', 'uglify']);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
};
