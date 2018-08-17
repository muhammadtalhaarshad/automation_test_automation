module.exports = {
    onPrepareSetup(config) {
        const wd = require('wd');
        const protractor = require('protractor');
        const wdBridge = require('wd-bridge')(protractor, wd);
        wdBridge.initFromProtractor(config);
    }
};
