const defaultConfigSetup = require('./default-config-setup');
const reportersSetup = require('./reporters-setup');
const mobileSetup = require('./mobile-setup');
const configGenerator={
    getConfigs(suites, seleniumAddress, cap, multiCap) {
        const defaultConf= {
            seleniumAddress: seleniumAddress,
            restartBrowserBetweenTests: defaultConfigSetup.restartBrowserBetweenTests,
            SELENIUM_PROMISE_MANAGER: defaultConfigSetup.SELENIUM_PROMISE_MANAGER,
            suites: suites,
            allScriptsTimeout: defaultConfigSetup.allScriptsTimeout,
            params: defaultConfigSetup.params,
            baseUrl: defaultConfigSetup.baseUrl,
            framework: defaultConfigSetup.framework,
            jasmineNodeOpts: defaultConfigSetup.jasmineNodeOpts,
            onPrepare() {
                mobileSetup.onPrepareSetup(configGenerator.getConfigs(suites, seleniumAddress, cap, multiCap));
                reportersSetup.configureAllReporters();
            },
            onComplete: reportersSetup.testRailSetupOnComplete
        };
        if(cap){
            defaultConf.capabilities=defaultConfigSetup.capabilities;
        }
        if(multiCap){
            defaultConf.multiCapabilities=defaultConfigSetup.bsMultiCapabilities;
        }

        return defaultConf;
    }
};

module.exports = configGenerator;
