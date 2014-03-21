module.exports = function (grunt) {
    "use strict";
    // Project configuration.
    grunt.initConfig({
        buildTempFolder: 'grunt-tmp',
        cssDir: 'css',
        jsDir: 'js',
        jsExtDir: 'js/ext',
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ['<%=buildTempFolder%>/*']
            }
        },
        copy: {
            css: {
                cwd: '<%=cssDir%>',
                src: '*',
                dest: '<%=buildTempFolder%>/<%=cssDir%>',
                expand: true,
                flatten: false
            },
            jsExt: {
                cwd: '<%=jsExtDir%>',
                src: '*',
                dest: '<%=buildTempFolder%>/<%=jsExtDir%>',
                expand: true,
                flatten: false
            },
            js: {
                cwd: '<%=jsDir%>',
                src: '*',
                dest: '<%=buildTempFolder%>/<%=jsDir%>',
                expand: true,
                flatten: false
            }
        },
        uglify: {
            options: {
                compress: { drop_console: true }
            },
            extjs: {
                files: [
                    {
                        expand: true,
                        cwd: '<%=buildTempFolder%>/<%=jsExtDir%>',
                        src: '**/*.js',
                        dest: '<%=buildTempFolder%>/<%=jsExtDir%>'
                    }
                ]
            },
            js: {
                files: {
                    '<%=jsDir%>/site.min.js': ['<%=buildTempFolder%>/<%=jsDir%>/site.js']
                }
            }
        },
        cssmin: {
            site: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    '<%=cssDir%>/website.min.css': ['<%=buildTempFolder%>/<%=cssDir%>/website.css']
                }
            }
        },
        concat: {
            extjs: {
                files: {
                    '<%=jsDir%>/plugins.min.js': ['<%=buildTempFolder%>/<%=jsExtDir%>/*.js']
                }
            },
            css: {
                src: ['<%=buildTempFolder%>/<%=cssDir%>/site.css'],
                dest: '<%=buildTempFolder%>/<%=cssDir%>/website.css'
            }
        },
        grunticon: {
            businessimages: {
                files: [
                    {
                        expand: true,
                        cwd: 'images',
                        src: ['*.png'],
                        dest: "<%=cssDir%>"
                    }
                ],
                options: {
                    // optional grunticon config properties
                    // SVGO compression, false is the default, true will make it so
                    svgo: false,
                    // PNG compression, false is the default, true will make it so
                    pngcrush: false,
                    // CSS filenames
                    datasvgcss: "s.data.svg.css",
                    datapngcss: "s.data.png.css",
                    urlpngcss: "s.fallback.css",
                    cssprefix: ".site-sprite-",
                    // preview HTML filename
                    previewhtml: "site.html",
                    // grunticon loader code snippet filename
                    loadersnippet: "grunticon.loader.js",
                    // folder name (within dest) for png output
                    pngfolder: "../images/png-fallback/",
                    // css file path prefix - this defaults to "/" and will be placed before the "dest" path when stylesheets are loaded.
                    // This allows root-relative referencing of the CSS. If you don't want a prefix path, set to to ""
                    cssbasepath: "css/",
                    customselectors: {
                        "arrow-right-white": ["#inh-list .active .arrow-right"],
                        "arrow-right": [".arrow-right"],
                        "email-icon": [".email-icon"],
                        "mobile-icon": [".mobile-icon"],
                        "cotweet-icon": [".cotweet-icon"],
                        "etsites-logo": [".etsites-icon"],
                        "automation-icon": [".automation-icon"],
                        "gear-icon": [".gear-icon"],
                        "pop-icon": [".pop-icon"],
                        "tab-icon": [".tab-icon"],
                        "x-icon": [".x-icon"],
                        "triangle-up": [".triangle-up-icon"],
                        "imh-icon": [".imh-logo"],
                        "builder-icon": [".builder-icon"],
                        "pulse-logo": [".pulse-logo"],
                        "audience-icon": [".audience-icon"]
                    }
                }
            }
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

    grunt.registerTask('minifycss', ['newer:concat:css', 'newer:cssmin:site']);
    grunt.registerTask('minifyjs', ['newer:uglify:extjs', 'newer:uglify:js', 'newer:concat:extjs']);


    grunt.registerTask('bendro', ['shell', 'clean', 'copy', 'minifycss', 'minifyjs', 'grunticon', 'clean']);
    grunt.registerTask('default', ['bendro']);
};