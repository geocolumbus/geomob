var tests = [];

for (var file in window.__karma__.files) {
    if (file.indexOf("/base/tests/unit") != -1 && file != "/base/tests/unit/config.js") {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/www/js',

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
