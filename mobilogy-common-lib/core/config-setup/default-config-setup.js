const mobileList = require('./device-list.js');
const setupUtilities = require('./setup-utilities');
const mobileConfiguration = mobileList[setupUtilities.getParam('', "--params.mobile", false)];
const maxBrowserInstances = process.env.MAX_INSTANCES || setupUtilities.getParam(1, "--params.maxInstances", false);
const configSetup = {
    restartBrowserBetweenTests: false,
    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 1900000,
    suites: {
        smoke_tests: './e2e/test-suites/smoke-test-suite/**/*.e2e-spec.ts',
        regression_tests: './e2e/test-suites/regression-test-suite/**/*.e2e-spec.ts'
    },
    capabilities: mobileConfiguration,
    bsMultiCapabilities: [{
        name: 'Mobilogy Apps',
        'browserName': '',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || setupUtilities.getParam('UserName', "--params.browserstack.user", false),
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || setupUtilities.getParam('Key', "--params.browserstack.key", false),
        'browserstack.local': process.env.BROWSERSTACK_LOCAL || setupUtilities.getParam(false, "--params.browserstack.local", false),
        'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER || setupUtilities.getParam("LocalIdentifier", "--params.browserstack.localIdentifier", false),
        'build': process.env.BROWSERSTACK_BUILD || setupUtilities.getParam('Local Build - Test' + new Date().toISOString(), "--params.browserstack.build", false),
        'browserstack.debug': 'true',
        'browserstack.networkLogs':true,
        'browserstack.timezone': 'UTC',
        shardTestFiles: true,
        'device': process.env.device || setupUtilities.getParam(``, "--params.browserstack.device", false),
        'app': process.env.app || setupUtilities.getParam('bs://App ID', "--params.browserstack.app", false),
        maxInstances: maxBrowserInstances,
        automationName: setupUtilities.getParam('', "--params.browserstack.automationName", false),
        'appium-version': '1.5.2',
        "nativeInstrumentsLib":true,
        'realMobile': true
    }],
    params: {
        maxInstances: 5,
        maxSessions: 5,
        testrail: {
            projectId: process.env.TESTRAIL_PROJECT_ID || setupUtilities.getParam(456, "--params.testrail.projectId", false),
            milestoneName: process.env.TESTRAIL_MILESTONE_NAME || setupUtilities.getParam("Automation milestone week", "--params.testrail.milestoneName", false),
            versionName: process.env.VERSION || setupUtilities.getParam("Default version name", "--params.testrail.versionName", false),
            host: process.env.TESTRAIL_HOST || setupUtilities.getParam("https://testrail.devfactory.com/", '--params.testrail.host', false),
            user: process.env.TESTRAIL_USER || setupUtilities.getParam('testrail.automation@aurea.com', "--params.testrail.user", false),
            password: process.env.TESTRAIL_PASSWORD || setupUtilities.getParam('w.Ry1gkMbAebV7dEUoF/-5iKNkzOHsTGyhrZIG1k3', '--params.testrail.password', false)
        },
        version: process.env.VERSION || setupUtilities.getParam('7.5.0', "--params.testrail.versionName", false),
        selenium: {
            hub: process.env.SELENIUM_URL || setupUtilities.getParam('http://localhost:4723/wd/hub', "--params.selenium.hub", false)
        },
        browserstack: {
            user: '', //Don't specify anything here it's just for a reference purpose that it can be a param
            key: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            local: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            localIdentifier: '',//Don't specify anything here it's just for a reference purpose that it can be a param
            build: '',//Don't specify anything here it's just for a reference purpose that it can be a param
        },

    },
    baseUrl: 'placeholder',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1750000,
        print: function () {
        }
    }
};
module.exports = configSetup;
