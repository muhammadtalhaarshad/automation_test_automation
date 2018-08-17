import {PageHelper} from '../../../components/html/page-helper';
import {CommonPageValidations} from '../../common/common-page.validations';
import {AndroidCommonPage} from '../android-common-pages/android-common.po';
import {WaitHelper} from '../../../components/html/wait-helper';
import {AndroidCameraPage} from '../android-camera-pages/android-camera.po';
import {AndroidCameraConstants} from '../android-camera-pages/android-camera-page.constants';
import {AndroidVideoConstants} from './android-video-page.constants';
import {AndroidVideoPage} from './android-video.po';
import {StepLogger} from "../../../core/logger/step-logger";
import {MobileHelper} from "../../../components/mobile/mobile-helper";

export class AndroidVideoPageHelper {

    // Video helpers
    static async verifyRecordAndPlayBackScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`User Navigates to Record and Playback Test.`);
        await expect(await PageHelper.isElementDisplayed(AndroidVideoPage.videoTestText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidVideoConstants.videoTestText));
    }

    static async recordVideoTest(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app->Once the Front camera test is completed new test Record a video and Playback starts.');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidVideoPage.videoTestText);
        await PageHelper.click(AndroidCameraPage.startCameraTestButton);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xxs);
    }

    static async skipRecordScreen(stepLogger: StepLogger) {
        stepLogger.verification(`The user is able to record a video.`);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xxs);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(AndroidVideoConstants.video + AndroidCameraConstants.before));
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
    }

    static async skipPlaybackScreen(stepLogger: StepLogger) {
        stepLogger.step('Once the video recording stops playback starts automatically.');
        await PageHelper.sleepForXSecond(PageHelper.timeout.xxs);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(AndroidVideoConstants.video + AndroidCameraConstants.after));
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
    }

    static async failVideoTest(stepLogger: StepLogger) {
        stepLogger.step('Click on Cross(X) mark for the question "Did the video playback as expected?"');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidVideoPage.didVideoPlayAsExpectedText);
        await PageHelper.click(AndroidCommonPage.buttonSelector.fail);
    }

    static async passVideoTest(stepLogger: StepLogger) {
        stepLogger.step('Click on tick mark for the question "Did the video playback as expected?"');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidVideoPage.didVideoPlayAsExpectedText);
        await PageHelper.click(AndroidCommonPage.buttonSelector.pass);
    }
}
