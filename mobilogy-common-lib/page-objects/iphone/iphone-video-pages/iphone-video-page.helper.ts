import {PageHelper} from '../../../components/html/page-helper';
import {CommonPageValidations} from '../../common/common-page.validations';
import {IPhoneCommonPage} from '../iphone-common-pages/iphone-common.po';
import {WaitHelper} from '../../../components/html/wait-helper';
import {IPhoneVideoPage} from './iphone-video.po';
import {IPhoneVideoConstants} from './iphone-video-page.constants';
import {IPhoneCameraPage} from '../iphone-camera-pages/iphone-camera.po';
import {IPhoneCameraConstants} from '../iphone-camera-pages/iphone-camera-page.constants';
import {StepLogger} from "../../../core/logger/step-logger";
import {MobileHelper} from '../../../components/mobile/mobile-helper';

export class IPhoneVideoPageHelper {

// Video helpers
    static async verifyRecordAndPlayBackScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`User Navigates to Record and Playback Test.`);
        await expect(await PageHelper.isElementDisplayed(IPhoneVideoPage.videoTestText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneVideoConstants.videoTestText));
    }

    static async recordVideoTest(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app->Once the Front camera test is completed new test Record a video and Playback starts.');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneVideoPage.videoTestText);
        await PageHelper.click(IPhoneCameraPage.startCameraTestButton);
        await PageHelper.click(IPhoneCommonPage.okAlert);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xxs);
    }

    static async skipRecordScreen(stepLogger: StepLogger) {
        stepLogger.verification('The user is able to record a video.');
        await PageHelper.sleepForXSecond(PageHelper.timeout.xxs);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(IPhoneVideoConstants.video + IPhoneCameraConstants.before));
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
    }

    static async skipPlaybackScreen(stepLogger: StepLogger) {
        stepLogger.step('Once the video recording stops playback starts automatically.');
        await PageHelper.sleepForXSecond(PageHelper.timeout.xxs);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(IPhoneVideoConstants.video + IPhoneCameraConstants.after));
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
        stepLogger.verification(`The user is able to playback the recorded video.`);

    }

    static async failVideoTest(stepLogger: StepLogger) {
        stepLogger.step('Click on Cross(X) mark for the question "Did the video playback as expected?"');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneVideoPage.didVideoPlayAsExpectedText);
        await PageHelper.click(IPhoneCommonPage.testFailButton);
    }

    static async passVideoTest(stepLogger: StepLogger) {
        stepLogger.step('Click on tick mark for the question "Did the video playback as expected?"');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneVideoPage.didVideoPlayAsExpectedText);
        await PageHelper.click(IPhoneCommonPage.testPassButton);
    }
}
