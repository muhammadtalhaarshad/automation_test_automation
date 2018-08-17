const setupUtilities = require('./setup-utilities');
const cmdParam = '--params.mobile';
const appParam = `${cmdParam}.app`;
const deviceNameParam = `${cmdParam}.deviceName`;
const appLocation = process.env.APP_LOCATION;
const deviceName = process.env.DEVICE_NAME_PARAM;
module.exports =
    {
        android: {
            browserName: '',
            app: appLocation || setupUtilities.getParam('', appParam, false), //--params.mobile.app
            
            platformVersion: process.env.PLATFORM_VERSION
                || setupUtilities.getParam(``, `${cmdParam}.platformVersion`, false),//--params.mobile.platformVersion

            deviceName: deviceName
                || setupUtilities.getParam(``, deviceNameParam, false),//--params.mobile.deviceName

            platformName: 'Android'
        },
        ios: {
            browserName: '',
            app: appLocation || setupUtilities
                .getParam('',
                    appParam,
                    false),//--params.mobile.app

            platformVersion: process.env.PLATFORM_VERSION
                || setupUtilities.getParam('', `${cmdParam}.platformVersion`, false),//--params.mobile.platformVersion

            deviceName: deviceName
                || setupUtilities.getParam(``, deviceNameParam, false), //--params.mobile.deviceName

            platformName: 'IOS',
            automationName: 'XCUITest'
        }
    };
