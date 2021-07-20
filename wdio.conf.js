exports.config = {
    //
    //  ================
    //  = BROWSERSTACK =
    //  ================
    // user: 'daulet2',
    // key: 'o6a2Wp7t6gp8pcQzMd89',
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    //  ================
    //  = BROWSERSTACK =
    //  ================
    // capabilities: [{
    //     'browser': 'chrome',
    //     'browser_version': '90.0',
    //     'os': 'Windows',
    //     'os_version': '7'
    // }],
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which tests specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    specs: [
        //'./tests/*.js',
        //'./tests/e2e-login.js'
        './tests/e2e-help.js'
        //'./tests/e2e-pay.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    //
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    //------------------------
    //
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    //-------------------------
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    //------------------------
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    //----------------------
    //
    connectionRetryCount: 3,
    //
    // Test runner services
    //---------------------
    //
    services: ['selenium-standalone'],
    //services: ['browserstack'],
    //
    // Framework you want to run your specs with.
    //-----------------------
    //
    framework: 'mocha',
    //
    // Test reporter for stdout.
    //----------------------
    //
    reporters: ['spec', 'dot', ['allure', {outputDir: 'allure-results'}]],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        // Babel setup
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
    //
    //
    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },


}
