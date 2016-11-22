// Generated on 2014-02-06 using generator-angular-fullstack 1.2.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Umweg, damit der Pfad zum Private Key nicht in den getrackten Files steht
    // Zur Konfiguration s. http://tech.toptable.co.uk/blog/2013/08/08/grunt-your-deployments-too/
    var pathToPrivateKey = require('./ssh-configuration').pathToKey;

    // Erzeugt einen Ordnernamen für die Releases beim Deployment
    var dirname = (new Date()).toISOString();

    // Define the configuration for all the tasks
    grunt.initConfig({



        sshconfig: {
            "uberspace": grunt.file.readJSON('.secret-uberspace.json'),
            "jiffy": grunt.file.readJSON('.secret-jiffy.json')
        },

        privateKey: grunt.file.read(pathToPrivateKey),

        sshexec: {
            'pre-copy': {
                command: [
                    // "mkdir -m 777 -p /var/www/virtual/kwst/kompetenzcheck/releases/" + dirname
                    "mkdir -m 777 -p /home/xl/kompetenzcheck/releases/" + dirname
                ].join(' && '),
                options: {
                    config: 'jiffy',
                    //privateKey: '<%= privateKey %>',
                    readyTimeout: 10000
                }
            },
            'post-copy': {
                command: [
                    //'cd /var/www/virtual/kwst/kompetenzcheck/releases/' + dirname,
                    'cd /home/xl/kompetenzcheck/releases/' + dirname,
                    'unzip ' + dirname + '.zip',
                    //'cd /var/www/virtual/kwst/kompetenzcheck/releases/' + dirname + '/dist',
                    'cd /home/xl/kompetenzcheck/releases/' + dirname + '/dist',
                    'export NODE_ENV=production',
                    'export PORT=3045',
                    'npm install --production',
                    'node loadFixtures.js',
                    "rm -rf /home/xl/kompetenzcheck/production && ln -s /home/xl/kompetenzcheck/releases/" + dirname + "/dist /home/xl/kompetenzcheck/production",
                    "sudo stop node",
                    "sudo start node"
                ].join(' && '),
                options: {
                    config: 'jiffy',
                    //privateKey: '<%= privateKey %>',
                    readyTimeout: 10000
                }
            }

        },
        sftp: {
            copy: {
                files: {
                    "./": ".tmp/" + dirname + ".zip"
                },
                options: {
                    srcBasePath: ".tmp/",
                    createDirectories: true,
                    config: 'jiffy',
                    //privateKey: '<%= privateKey %>',
                    path: '/home/xl/kompetenzcheck/releases/' + dirname,
                    showProgress: true
                }
            }
        },

        zip: {
            // As well as standard grunt sytax
            widgets: {
                // Files to zip together
                src: 'dist/**',

                // Destination of zip file
                dest: '.tmp/' + dirname + '.zip',
                dot: true
            }
        },

        ngtemplates: {
            desktopApp: {
                cwd: '<%= yeoman.app %>',
                src: 'views/**/*.html',
                dest: '<%= yeoman.app %>/scripts/templates.js'
            }
        },

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },
        express: {
            options: {
                port: process.env.PORT || 8080
            },
            dev: {
                options: {
                    script: 'server.js',
                    debug: false
                }
            },
            prod: {
                options: {
                    script: 'dist/server.js',
                    node_env: 'production'
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
            }
        },
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: false
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            //livereload: {
            //    files: [
            //        '<%= yeoman.app %>/views/{,*//*}*.{html,jade}',
            //        '{.tmp,<%= yeoman.app %>}/styles/{,*//*}*.css',
            //        '{.tmp,<%= yeoman.app %>}/scripts/{,*//*}*.js',
            //        '<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
            //    ],
            //
            //    options: {
            //        livereload: true
            //    }
            //},
            express: {
                files: [
                    'server.js',
                    'lib/**/*.{js,json}'
                ],
                tasks: ['newer:jshint:server', 'express:dev'],
                options: {
                    livereload: false,
                    nospawn: true //Without this option specified express won't be reloaded
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            server: {
                options: {
                    jshintrc: 'lib/.jshintrc'
                },
                src: [ 'lib/{,*/}*.js']
            },
            all: [
                '<%= yeoman.app %>/scripts/{,*/}*.js'
            ],
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/views/*',
                            '<%= yeoman.dist %>/public/*',
                            '<%= yeoman.dist %>/lib/*',
                            '!<%= yeoman.dist %>/public/.git*',
                            '!<%= yeoman.dist %>/.htaccess*'
                        ]
                    }
                ]
            },
            heroku: {
                files: [
                    {
                        dot: true,
                        src: [
                            'heroku/*',
                            '!heroku/.git*',
                            '!heroku/Procfile'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }
                ]
            }
        },

        // Automatically inject Bower components into the app
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/views/index.html',
                ignorePath: '<%= yeoman.app %>/',
                exclude: ['sass-bootstrap']
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/public/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/public/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/public/styles/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: ['<%= yeoman.app %>/views/index.html',
                '<%= yeoman.app %>/views/index.jade'],
            options: {
                dest: '<%= yeoman.dist %>/public'
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/views/{,*/}*.html',
                '<%= yeoman.dist %>/views/{,*/}*.jade'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>/public']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.{png,jpg,jpeg,gif}',
                        dest: '<%= yeoman.dist %>/public/images'
                    }
                ]
            }
        },

        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/images',
                        src: '{,*/}*.svg',
                        dest: '<%= yeoman.dist %>/public/images'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    //collapseWhitespace: true,
                    //collapseBooleanAttributes: true,
                    //removeCommentsFromCDATA: true,
                    //removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.app %>/views',
                        src: ['*.html', 'partials/*.html'],
                        dest: '<%= yeoman.dist %>/views'
                    }
                ]
            }
        },

        // Allow the use of non-minsafe AngularJS files. Automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/concat/scripts',
                        src: '*.js',
                        dest: '.tmp/concat/scripts'
                    }
                ]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/views/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>/public',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'bower_components/**/*',
                            'images/{,*/}*.{webp}',
                            'fonts/**/*',
                            'icicle.json',
                            'scripts/templates.js'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>/views',
                        dest: '<%= yeoman.dist %>/views',
                        src: '**/*.jade'
                    },
                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/public/images',
                        src: ['generated/*']
                    },
                    {
                        expand: true,
                        dest: '<%= yeoman.dist %>',
                        src: [
                            'package.json',
                            'server.js',
                            'lib/**/*',
                            'loadFixtures.js',
                            'mongo-secrets.json',
                            '.htaccess'
                        ]
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= yeoman.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
//        background: true
            }
        }
    });

    grunt.registerTask('express-keepalive', 'Keep grunt running', function () {
        this.async();
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'express:prod', 'open', 'express-keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'bower-install',
            'concurrent:server',
            'autoprefixer',
            'express:dev',
            // 'open',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'bower-install',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'ngtemplates',
        'uglify',
        'rev',
        'usemin'
    ]);

    grunt.loadNpmTasks('grunt-zip');

    grunt.loadNpmTasks('grunt-ssh');

    grunt.registerTask('heroku', function () {
        grunt.log.warn('The `heroku` task has been deprecated. Use `grunt build` to build for deployment.');
        grunt.task.run(['build']);
    });

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'zip',
        'sshexec:pre-copy',
        'sftp:copy',
        'sshexec:post-copy'
    ]);
};
