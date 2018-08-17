import {StepLogger} from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import {SuiteNames} from '../../../../../mobilogy-common-lib/helpers/suit-names';
import {browser} from 'protractor';
// tslint:disable-next-line:max-line-length
import {AndroidDisplayTestPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-display-test-pages/android-display-test-page.helper';
import {AndroidMultiTouchPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-multi-touch-pages/android-multi-touch-page.helper';
import {AndroidMotionSensorPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-motion-sensor-pages/android-motion-sensor-page.helper';
import {AndroidProximitySensorPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-proximity-sensor-pages/android-proximity-sensor-page.helper';
import {AndroidCameraPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-camera-pages/android-camera-page.helper';
import {AndroidCameraConstants} from '../../../../../mobilogy-common-lib/page-objects/android/android-camera-pages/android-camera-page.constants';
import {AndroidSessionEndPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-session-end-pages/android-session-end.helper';
import {AndroidVideoPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-video-pages/android-video-page.helper';
import {AndroidVideoConstants} from '../../../../../mobilogy-common-lib/page-objects/android/android-video-pages/android-video-page.constants';
import {AndroidScreenTouchPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-screen-touch-pages/android-screen-touch-page.helper";
import {AndroidLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper";

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Run Pixelation Test(Android) - [13984328]', async () => {
        stepLogger.caseId = 13984328;
        await AndroidLoginPageHelper.initiateAppDiagnostic(stepLogger);

        // #1
        stepLogger.stepId(1);
        await AndroidDisplayTestPageHelper.startDisplayTest(browser.driver, stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayColors(stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayScreenEncountered(stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidDisplayTestPageHelper.passDisplayTest(browser.driver, stepLogger);
        await AndroidScreenTouchPageHelper.verifyScreenTouchScreenDisplay(stepLogger);
    });

    it('Run Rear Camera Test(Android) - [13984335]', async () => {
        stepLogger.caseId = 13984335;

        // #PreCondition
        await AndroidMultiTouchPageHelper.verifyMutiTouchScreenDisplayFailure(stepLogger);
        await AndroidMotionSensorPageHelper.verifyMotionSensorScreenDisplayFailure(stepLogger);
        await AndroidProximitySensorPageHelper.verifyProximitySensorScreenDisplayFailure(stepLogger);

        // #1
        stepLogger.stepId(1);
        await AndroidCameraPageHelper.takePictureFromRareCamera(stepLogger);
        await AndroidCameraPageHelper.verifyPicturetakenScreenDisplay(
            AndroidCameraConstants.rear + AndroidCameraConstants.after, stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidCameraConstants.rear, AndroidCameraConstants.imagesAreDiffMessage, stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidCameraPageHelper.passCameraTest(stepLogger);
        await AndroidCameraPageHelper.verifyFrontCameraScreenDisplay(stepLogger);
    });

    it('Run Front Camera Test(Android) - [13984336]', async () => {
        stepLogger.caseId = 13984336;

        // #1
        stepLogger.stepId(1);
        await AndroidCameraPageHelper.takePictureFromFrontCamera(stepLogger);
        await AndroidCameraPageHelper.verifyPicturetakenScreenDisplay(
            AndroidCameraConstants.front + AndroidCameraConstants.after, stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidCameraConstants.front, AndroidCameraConstants.imagesAreDiffMessage, stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidCameraPageHelper.passCameraTest(stepLogger);
        await AndroidVideoPageHelper.verifyRecordAndPlayBackScreenDisplay(stepLogger);
    });

    it('Record and PlayBack Test(Android) - [13984448]', async () => {
        stepLogger.caseId = 13984448;

        // #1
        stepLogger.stepId(1);
        await AndroidVideoPageHelper.recordVideoTest(stepLogger);
        await AndroidVideoPageHelper.skipRecordScreen(stepLogger);
        await AndroidVideoPageHelper.skipPlaybackScreen(stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidVideoConstants.video, AndroidVideoConstants.videosAreDiffMessage, stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidVideoPageHelper.passVideoTest(stepLogger);
        await AndroidSessionEndPageHelper.verifySessionEndedScreen(stepLogger);
    });
});
