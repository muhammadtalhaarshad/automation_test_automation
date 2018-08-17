import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import { browser } from 'protractor';
import { IPhoneCommonPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-common-pages/iphone-common-page.helper';
import { IPhoneDisplayTestPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-display-test-pages/iphone-display-test-page.helper';
import { IPhoneMultiTouchPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-multi-touch-pages/iphone-multi-touch-page.helper';
import { IPhoneMotionSensorPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-motion-sensor-pages/iphone-motion-sensor-page.helper';
import { IPhoneProximitySensorPageHelper} from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-proximity-sensor-pages/iphone-proximity-sensor-page.helper';
import { IPhoneCameraPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-camera-pages/iphone-camera-page.helper';
import { IPhoneVideoPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-video-pages/iphone-video-page.helper';
import { IPhoneSessionEndPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-session-end-pages/iphone-session-end.helper';
import { IPhoneScreenTouchPageHelper } from "../../../../../mobilogy-common-lib/page-objects/iphone/iphone-screen-touch-pages/iphone-screen-touch-page.helper";

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Run Pixelation Test(iPhone) and fail it - [14035535]', async () => {
        stepLogger.caseId = 14035535;
        await IPhoneCommonPageHelper.initiateApp();

        stepLogger.stepId(1);
        await IPhoneDisplayTestPageHelper.startDisplayTest(browser.driver, stepLogger);
        await IPhoneDisplayTestPageHelper.verifyDisplayColors(stepLogger);
        await IPhoneDisplayTestPageHelper.verifyDisplayScreenEncountered(stepLogger);

        stepLogger.stepId(2);
        await IPhoneDisplayTestPageHelper.failDisplayTest(browser.driver, stepLogger);
    });

    it('Run Screen Touch Test(iPhone) Timed out - [14035553]', async () => {
        stepLogger.caseId = 14035553;

        stepLogger.stepId(1);
        await IPhoneScreenTouchPageHelper.failScreenTouchTest(stepLogger);
        await IPhoneMultiTouchPageHelper.verifyMutiTouchScreenDisplay(stepLogger);
    });

    it('Run Multi Touch Test(iPhone) Timed out - [14035554]', async () => {
        stepLogger.caseId = 14035554;

        stepLogger.stepId(1);
        await IPhoneMultiTouchPageHelper.failMultiTouchTest(stepLogger);
        await IPhoneMotionSensorPageHelper.verifyMotionSensorScreenDisplay(stepLogger);
    });

    it('Run Motion Sensor Test(iPhone) Timed out - [14035555]', async () => {
        stepLogger.caseId = 14035555;

        stepLogger.stepId(1);
        await IPhoneMotionSensorPageHelper.failMotionSensorTest(stepLogger);
        await IPhoneProximitySensorPageHelper.verifyProximitySensorScreenDisplay(stepLogger);
    });

    it('Run Proximity Sensor Test(iPhone) Timed out - [14035556]', async () => {
        stepLogger.caseId = 14035556;

        stepLogger.stepId(1);
        await IPhoneProximitySensorPageHelper.failProximitySensorTest(stepLogger);
        await IPhoneCameraPageHelper.verifyRearCameraScreenDisplay(stepLogger);
    });

    it('Run Rear Camera Test(iPhone) and fail it - [14035557]', async () => {
        stepLogger.caseId = 14035557;

        stepLogger.stepId(1);
        await IPhoneCameraPageHelper.takePictureFromRareCamera(stepLogger);
        await IPhoneCameraPageHelper.verifyPictureTakenScreenDisplay('rear', stepLogger);

        stepLogger.stepId(2);
        await IPhoneCameraPageHelper.failCameraTest(stepLogger);
        await IPhoneCameraPageHelper.verifyFrontCameraScreenDisplay(stepLogger);
    });

    it('Run Front Camera Test(iPhone) and fail it - [14035558]', async () => {
        stepLogger.caseId = 14035558;

        stepLogger.stepId(1);
        await IPhoneCameraPageHelper.takePictureFromFrontCamera(stepLogger);
        await IPhoneCameraPageHelper.verifyPictureTakenScreenDisplay('front', stepLogger);

        stepLogger.stepId(2);
        await IPhoneCameraPageHelper.failCameraTest(stepLogger);
        await IPhoneVideoPageHelper.verifyRecordAndPlayBackScreenDisplay(stepLogger);
    });

    it('Record and PlayBack Test(iPhone) and fail it - [14035559]', async () => {
        stepLogger.caseId = 14035559;

        stepLogger.stepId(1);
        await IPhoneVideoPageHelper.recordVideoTest(stepLogger);
        await IPhoneVideoPageHelper.skipRecordScreen(stepLogger);


        stepLogger.stepId(2);
        await IPhoneVideoPageHelper.skipPlaybackScreen(stepLogger);

        stepLogger.stepId(3);
        await IPhoneVideoPageHelper.failVideoTest(stepLogger);
        await IPhoneSessionEndPageHelper.verifySessionEndedScreen(stepLogger);
    });

});
