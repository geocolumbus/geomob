// Karma configuration
// Generated on Fri Oct 14 2016 10:07:14 GMT-0400 (EDT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../../',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],

        proxies: {},

        // list of files / patterns to load in the browser
        files: [
            // Load test utilities
            {pattern: 'www/js/libs/jquery/jquery.js', included: true},
            {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', included: true},

            // Load the compiled application
            //{pattern: "/base/www/js/libs/requirejs/require.js", included: true},
            {pattern: "www/js/*.js", included: false},
            {pattern: "www/js/app/*.js", included: false},

            // Do not load karma.conf
            //{pattern: 'tests/unit/!(karma.conf).js', included: false},

            // Load the test
            {pattern: "tests/unit/*-spec.js", included: false},

            // Load the test configuration file
            "tests/unit/config.js"
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

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

        browserNoActivityTimeout: 10000,

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
