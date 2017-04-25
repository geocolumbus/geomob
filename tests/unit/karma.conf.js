// Karma configuration
// Generated on Fri Oct 14 2016 10:07:14 GMT-0400 (EDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],

        // this makes it easier to find the views instead of ../../../www
        proxies: {
            '/views/': '/base/www/views/',
            '/resources/': '/base/tests/unit/resources/'
        },

        // list of files / patterns to load in the browser
        files: [
            // Load test utilities
            {pattern: 'www/components/jquery/dist/jquery.min.js', included: true},
            {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', included: true},

            // Load source files and resources
            {pattern: 'www/style/**/*.css', included: false},
            {pattern: 'www/img/**/*.png', included: false},
            {pattern: 'www/components/**/*.js', included: false},
            {pattern: 'www/js/**/*.js', included: false},
            {pattern: 'www/views/**/*.js', included: false},

            // Load tests
            {pattern: 'tests/unit/resources/*.xml', included: false},
            {pattern: 'tests/unit/!(karma.conf).js', included: false},

            {pattern: 'platforms/browser/www/**/*.js', included: false},
            "platforms/browser/www/cordova.js",
            "www/js/require.js",
            "tests/unit/config.js"
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        //    'www/js/*.js': ['coverage'],
        //    'www/js/services/**/!(cps)/*.js': ['coverage'],
        //    'www/js/util/**/*.js': ['coverage'],
        //    'www/views/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'/*, 'coverage'*/],

        // configure spec reporter
        // maxLogLines (number)
        // true or false switches:
        // suppressErrorSummary, suppressFailed, suppressPassed, suppressSkipped, showSpecTiming
        specReporter: {
            maxLogLines: 5,
            showSpecTiming: true
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // Test coverage options
        // html - creates a web view of each code file's coverage, line by line
        // text - logs to the console when 'npm test' is executed.
        /*
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {type: 'html', subdir: 'report-html'},
                {type: 'text'}
            ]
        }
        */
    })
};
