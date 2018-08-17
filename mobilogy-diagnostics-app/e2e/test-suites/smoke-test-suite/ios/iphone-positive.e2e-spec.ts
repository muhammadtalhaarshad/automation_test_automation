import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { browser } from 'protractor';
import { IPhoneCommonPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-common-pages/iphone-common-page.helper';
import { IPhoneDisplayTestPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-display-test-pages/iphone-display-test-page.helper';
import { IPhoneCameraPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-camera-pages/iphone-camera-page.helper';
import { IPhoneMultiTouchPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-multi-touch-pages/iphone-multi-touch-page.helper';
import { IPhoneMotionSensorPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-motion-sensor-pages/iphone-motion-sensor-page.helper';
import { IPhoneProximitySensorPageHelper
    } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-proximity-sensor-pages/iphone-proximity-sensor-page.helper';
import { IPhoneVideoPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-video-pages/iphone-video-page.helper';
import { IPhoneSessionEndPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-session-end-pages/iphone-session-end.helper';
import { IPhoneCameraConstants } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-camera-pages/iphone-camera-page.constants';
import { IPhoneVideoConstants } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-video-pages/iphone-video-page.constants';

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Run Pixelation Test(iPhone) - [13993852]', async () => {
        stepLogger.caseId =  13993852;
        await IPhoneCommonPageHelper.initiateApp();

        stepLogger.stepId(1);
        await IPhoneDisplayTestPageHelper.startDisplayTest(browser.driver, stepLogger);
        await IPhoneDisplayTestPageHelper.verifyDisplayColors(stepLogger);
        await IPhoneDisplayTestPageHelper.verifyDisplayScreenEncountered(stepLogger);

        stepLogger.stepId(2);
        await IPhoneDisplayTestPageHelper.passDisplayTest(browser.driver, stepLogger);
    });

    it('Run Rear Camera Test(iPhone) - [13993858]', async () => {
        stepLogger.caseId = 13993858;
        // Pre
        await IPhoneCommonPageHelper.waitFor30SecTimeout(); // Skip Screen Touch
        await IPhoneMultiTouchPageHelper .verifyMutiTouchScreenDisplay(stepLogger);
        await IPhoneCommonPageHelper.waitFor30SecTimeout(); // Skip Multi Touch
        await IPhoneMotionSensorPageHelper.verifyMotionSensorScreenDisplay(stepLogger);
        await IPhoneCommonPageHelper.waitFor30SecTimeout(); // Skip Motion
        await IPhoneProximitySensorPageHelper.verifyProximitySensorScreenDisplay(stepLogger);
        await IPhoneCommonPageHelper.waitFor30SecTimeout(); // Skip Proximity
        await IPhoneCameraPageHelper.verifyRearCameraScreenDisplay(stepLogger);

        stepLogger.stepId(1);
        await IPhoneCameraPageHelper.takePictureFromRareCamera(stepLogger);
        await IPhoneCameraPageHelper.verifyPictureTakenScreenDisplay(
            `${IPhoneCameraConstants.rear}${IPhoneCameraConstants.after}`, stepLogger);
        await IPhoneCameraPageHelper.verifyCameraPictures(
            IPhoneCameraConstants.rear, IPhoneCameraConstants.imagesAreDiffMessage);

        stepLogger.stepId(2);
        await IPhoneCameraPageHelper.passCameraTest(stepLogger);
        await IPhoneCameraPageHelper.verifyFrontCameraScreenDisplay(stepLogger);
    });

    it('Run Front Camera Test(iPhone) - [13993859]', async () => {
        stepLogger.caseId = 13993859;

        stepLogger.stepId(1);
        await IPhoneCameraPageHelper.takePictureFromFrontCamera(stepLogger);
        await IPhoneCameraPageHelper.verifyPictureTakenScreenDisplay(
            `${IPhoneCameraConstants.front}${IPhoneCameraConstants.after}`, stepLogger);
        await IPhoneCameraPageHelper.verifyCameraPictures(
            IPhoneCameraConstants.front, IPhoneCameraConstants.imagesAreDiffMessage);

        stepLogger.stepId(2);
        await IPhoneCameraPageHelper.passCameraTest(stepLogger);
        await IPhoneVideoPageHelper.verifyRecordAndPlayBackScreenDisplay(stepLogger);
    });

    it('Record and PlayBack Test(iPhone) - [13993860]', async () => {
        stepLogger.caseId = 13993860;

        stepLogger.stepId(1);
        await IPhoneVideoPageHelper.recordVideoTest(stepLogger);
        await IPhoneVideoPageHelper.skipRecordScreen(stepLogger);

        stepLogger.stepId(2);
        await IPhoneVideoPageHelper.skipPlaybackScreen(stepLogger);
        await IPhoneCameraPageHelper.verifyCameraPictures(
            IPhoneVideoConstants.video, IPhoneVideoConstants.videosAreDiffMessage);

        stepLogger.stepId(3);
        await IPhoneVideoPageHelper.passVideoTest(stepLogger);
        await IPhoneSessionEndPageHelper.verifySessionEndedScreen(stepLogger);
    });
});
