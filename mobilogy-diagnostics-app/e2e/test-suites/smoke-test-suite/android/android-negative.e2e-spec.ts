import {StepLogger} from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import {SuiteNames} from '../../../../../mobilogy-common-lib/helpers/suit-names';
import {browser} from 'protractor';
// tslint:disable-next-line:max-line-length
import {AndroidDisplayTestPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-display-test-pages/android-display-test-page.helper';
import {AndroidMultiTouchPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-multi-touch-pages/android-multi-touch-page.helper';
import {AndroidMotionSensorPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-motion-sensor-pages/android-motion-sensor-page.helper';
import {AndroidProximitySensorPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-proximity-sensor-pages/android-proximity-sensor-page.helper';
import {AndroidCameraPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-camera-pages/android-camera-page.helper';
import {AndroidSessionEndPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-session-end-pages/android-session-end.helper';
import {AndroidVideoPageHelper} from '../../../../../mobilogy-common-lib/page-objects/android/android-video-pages/android-video-page.helper';
import {AndroidCameraConstants} from '../../../../../mobilogy-common-lib/page-objects/android/android-camera-pages/android-camera-page.constants';
import {AndroidVideoConstants} from '../../../../../mobilogy-common-lib/page-objects/android/android-video-pages/android-video-page.constants';
import {AndroidScreenTouchPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-screen-touch-pages/android-screen-touch-page.helper";
import {AndroidLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper";

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Run Pixelation Test(Android) and fail it - [14027402]', async () => {
        stepLogger.caseId = 14027402;

        // #1
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateAppDiagnostic(stepLogger);
        await AndroidDisplayTestPageHelper.startDisplayTest(browser.driver, stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayColors(stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayScreenEncountered(stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidDisplayTestPageHelper.failDisplayTest(browser.driver, stepLogger);
        await AndroidScreenTouchPageHelper.verifyScreenTouchScreenDisplay(stepLogger);

    });

    it('Run Screen Touch Test(Android) Timed out - [14027429]', async () => {
        stepLogger.caseId = 14027429;

        // #1
        stepLogger.stepId(1);
        await AndroidMultiTouchPageHelper.verifyMutiTouchScreenDisplayFailure(stepLogger);
    });

    it('Run Multi Touch Test(Android) Timed out - [14027430]', async () => {
        stepLogger.caseId = 14027430;

        // #1
        stepLogger.stepId(1);
        await AndroidMotionSensorPageHelper.verifyMotionSensorScreenDisplay(stepLogger);
    });

    it('Run Motion Sensor Test(Android) Timed out - [14035525]', async () => {
        stepLogger.caseId = 14035525;

        // #1
        stepLogger.stepId(1);
        await AndroidProximitySensorPageHelper.verifyProximitySensorScreenDisplay(stepLogger);
    });

    it('Run Proximity Sensor Test(Android) Timed out - [14035526]', async () => {
        stepLogger.caseId = 14035526;

        // #1
        stepLogger.stepId(1);
        await AndroidCameraPageHelper.verifyRearCameraScreenDisplayFailure(stepLogger);
    });

    it('Run Rear Came Test(Android) and fail it - [14027403]', async () => {
        stepLogger.caseId = 14027403;

        // #1
        stepLogger.stepId(1);
        await AndroidCameraPageHelper.takePictureFromRareCamera(stepLogger);
        await AndroidCameraPageHelper.verifyPicturetakenScreenDisplay(
            AndroidCameraConstants.rear + AndroidCameraConstants.after, stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidCameraConstants.rear, AndroidCameraConstants.imagesAreDiffMessage, stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidCameraPageHelper.failCameraTest(stepLogger);
        await AndroidCameraPageHelper.verifyFrontCameraScreenDisplay(stepLogger);
    });

    it('Run Front Camera Test(Android) and fail it  - [14035527]', async () => {
        stepLogger.caseId = 14035527;

        // #1
        stepLogger.stepId(1);
        await AndroidCameraPageHelper.takePictureFromFrontCamera(stepLogger);
        await AndroidCameraPageHelper.verifyPicturetakenScreenDisplay(
            AndroidCameraConstants.front + AndroidCameraConstants.after, stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidCameraConstants.front, AndroidCameraConstants.imagesAreDiffMessage, stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidCameraPageHelper.failCameraTest(stepLogger);
        await AndroidVideoPageHelper.verifyRecordAndPlayBackScreenDisplay(stepLogger);
    });

    it('Record and PlayBack Test(Android) and fail it  - [14035528]', async () => {
        stepLogger.caseId = 14035528;

        // #1
        stepLogger.stepId(1);
        await AndroidVideoPageHelper.recordVideoTest(stepLogger);
        await AndroidVideoPageHelper.skipRecordScreen(stepLogger);

        // #1
        stepLogger.stepId(2);
        await AndroidVideoPageHelper.skipPlaybackScreen(stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidVideoConstants.video, AndroidVideoConstants.videosAreDiffMessage, stepLogger);

        // #3
        stepLogger.stepId(3);
        await AndroidVideoPageHelper.failVideoTest(stepLogger);
        await AndroidSessionEndPageHelper.verifySessionEndedScreen(stepLogger);
    });
});
