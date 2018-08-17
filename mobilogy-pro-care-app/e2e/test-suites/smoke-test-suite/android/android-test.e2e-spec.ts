import { browser } from 'protractor';
import {SuiteNames} from "../../../../../mobilogy-common-lib/helpers/suit-names";
import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
// tslint:disable-next-line:max-line-length
import {AndroidLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidCommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common-page.constants";
// tslint:disable-next-line:max-line-length
import {AndroidDisplayTestPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-display-test-pages/android-display-test-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidScreenTouchPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-screen-touch-pages/android-screen-touch-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidMultiTouchPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-multi-touch-pages/android-multi-touch-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidMotionSensorPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-motion-sensor-pages/android-motion-sensor-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidProximitySensorPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-proximity-sensor-pages/android-proximity-sensor-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidCameraPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-camera-pages/android-camera-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidVideoConstants} from "../../../../../mobilogy-common-lib/page-objects/android/android-video-pages/android-video-page.constants";
// tslint:disable-next-line:max-line-length
import {AndroidVideoPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-video-pages/android-video-page.helper";
// tslint:disable-next-line:max-line-length
import {AndroidSessionEndPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-session-end-pages/android-session-end.helper";
// tslint:disable-next-line:max-line-length
import {AndroidCameraConstants} from "../../../../../mobilogy-common-lib/page-objects/android/android-camera-pages/android-camera-page.constants";
import {CommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/common/common-page-constants";
import {AndroidProCareMyDevicePageHelper} from "../../../page-objects/android/android-procare-app-mydevice-pages/android-procare-app-mydevice-page.helper";

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Run Buyback Session - Android  - [13853837]', async () => {
        stepLogger.caseId = 13853837;

        // #1 #2 #3 #4 Handled in pre-setup
        stepLogger.stepId(5);
        await AndroidLoginPageHelper.initiateProcareApp(stepLogger);
        await AndroidLoginPageHelper.verifyLoginScreen(stepLogger, AndroidCommonPageConstants.pageTitles.procareApp)
    });

    it('Log into Buyback app in Android device using the correct authentication code  - [13912303]', async () => {
        stepLogger.caseId = 13912303;

        // #1
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateProcareApp(stepLogger);
        await AndroidLoginPageHelper.verifyLoginScreenForProCareApp(stepLogger, AndroidCommonPageConstants.pageTitles.procareApp);

        // #2
        stepLogger.stepId(2);
        await AndroidLoginPageHelper.enterActivationCode(stepLogger, CommonPageConstants.passcodeProcareApp);

        // #3
        stepLogger.stepId(3);
        await AndroidLoginPageHelper.clickContinueButton(stepLogger);
        await AndroidLoginPageHelper.verifyMyDeviceScreenElements(stepLogger);
    });

    it('Run Buyback session for an Android device which is in excellent condition and a locked SIM - Part 1  - [13853839]', async () => {
        stepLogger.caseId = 13853839;

        // #1
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.clickStartButton(stepLogger);
        await AndroidProCareMyDevicePageHelper.verifyCosmeticConditionScreen(stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidProCareMyDevicePageHelper.clickExcellent(stepLogger);
        await AndroidProCareMyDevicePageHelper.verifyLockStatusScreen(stepLogger);

        // #3
        stepLogger.stepId(3);
        await AndroidProCareMyDevicePageHelper.clickLocked(stepLogger);
        await AndroidProCareMyDevicePageHelper.verifyTestingScreen(stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayScreenScreen(stepLogger);

        // #4
        stepLogger.stepId(4);
        await AndroidDisplayTestPageHelper.startDisplayTest(browser.driver, stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayColors(stepLogger);
        await AndroidDisplayTestPageHelper.verifyDisplayScreenEncountered(stepLogger);

        // #5
        stepLogger.stepId(5);
        await AndroidDisplayTestPageHelper.passDisplayTest(browser.driver, stepLogger);
        await AndroidScreenTouchPageHelper.verifyScreenTouchScreenDisplay(stepLogger);

        // #6
        stepLogger.stepId(6);
        await AndroidMultiTouchPageHelper.verifyMutiTouchScreenDisplayFailure(stepLogger);

        // #7
        stepLogger.stepId(7);
        await AndroidMotionSensorPageHelper.verifyMotionSensorScreenDisplayFailure(stepLogger);

        // #8
        stepLogger.stepId(8);
        await AndroidProximitySensorPageHelper.verifyProximitySensorScreenDisplayFailure(stepLogger);

        // #9
        stepLogger.stepId(9);
        await AndroidCameraPageHelper.verifyRearCameraScreenDisplayFailure(stepLogger);
    });

    it('Run Buyback session for an Android device which is in excellent condition and a locked SIM - Part 2' +
        ' - [14014758]', async () => {
        stepLogger.caseId = 14014758;

        // #1
        stepLogger.stepId(1);
        await AndroidCameraPageHelper.takePictureFromRareCamera(stepLogger);
        await AndroidCameraPageHelper.verifyPicturetakenScreenDisplay(
            `${AndroidCameraConstants.rear}${AndroidCameraConstants.after}`, stepLogger);

        // #2
        stepLogger.stepId(2);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidCameraConstants.rear, AndroidCameraConstants.imagesAreDiffMessage, stepLogger);

        // #3
        stepLogger.stepId(3);
        await AndroidCameraPageHelper.passCameraTest(stepLogger);
        await AndroidCameraPageHelper.verifyFrontCameraScreenDisplay(stepLogger);

        // #4
        stepLogger.stepId(4);
        await AndroidCameraPageHelper.takePictureFromFrontCamera(stepLogger);
        await AndroidCameraPageHelper.verifyPicturetakenScreenDisplay(
            `${AndroidCameraConstants.front}${AndroidCameraConstants.after}`, stepLogger);

        // #5
        stepLogger.stepId(5);
        await AndroidCameraPageHelper.verifyCameraPictures(
            AndroidCameraConstants.front, AndroidCameraConstants.imagesAreDiffMessage, stepLogger);

        // #6
        stepLogger.stepId(6);
        await AndroidCameraPageHelper.passCameraTest(stepLogger);
        await AndroidVideoPageHelper.verifyRecordAndPlayBackScreenDisplay(stepLogger);

        // #7
        stepLogger.stepId(7);
        await AndroidVideoPageHelper.recordVideoTest(stepLogger);
        await AndroidVideoPageHelper.skipRecordScreen(stepLogger);
        await AndroidVideoPageHelper.skipPlaybackScreen(stepLogger);
        await AndroidCameraPageHelper.verifyCameraPictures(
        AndroidVideoConstants.video, AndroidVideoConstants.videosAreDiffMessage, stepLogger);

        // #8
        stepLogger.stepId(8);
        await AndroidVideoPageHelper.passVideoTest(stepLogger);
        await AndroidSessionEndPageHelper.verifySessionEndedScreenElements(stepLogger);
    });
});
