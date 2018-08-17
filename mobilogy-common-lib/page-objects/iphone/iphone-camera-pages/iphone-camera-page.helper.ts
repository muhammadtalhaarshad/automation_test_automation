import {PageHelper} from '../../../components/html/page-helper';
import {CommonPageValidations} from '../../common/common-page.validations';
import {IPhoneCameraPage} from './iphone-camera.po';
import {IPhoneCameraConstants} from './iphone-camera-page.constants';
import {IPhoneCommonPage} from '../iphone-common-pages/iphone-common.po';
import {WaitHelper} from '../../../components/html/wait-helper';
import {MobileHelper} from '../../../components/mobile/mobile-helper';
import {StepLogger} from "../../../core/logger/step-logger";

export class IPhoneCameraPageHelper {

    static async verifyRearCameraScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves automatically to Proximity Sensor Test.`);
        await expect(await PageHelper.isElementDisplayed(IPhoneCameraPage.rareCameraText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneCameraConstants.rareCameraText));
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCameraPage.startCameraTestButton);
    }

    static async takePictureFromRareCamera(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app->Take a picture from the Rear camera.');
        await PageHelper.click(IPhoneCameraPage.startCameraTestButton);
        await PageHelper.click(IPhoneCommonPage.okAlert);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCameraPage.takePictureButton);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(`${IPhoneCameraConstants.rear}${IPhoneCameraConstants.before}`));
        await PageHelper.click(IPhoneCameraPage.takePictureButton);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
    }

    static async verifyPictureTakenScreenDisplay(image: string, stepLogger: StepLogger) {
        stepLogger.verification(`The picture is taken successfully from Front camera.`);
        await expect(await PageHelper.isElementDisplayed(IPhoneCameraPage.didCameraTakePicText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneCameraConstants.didCameraTakePictureText));
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(image));
    }

    static async failCameraTest(stepLogger: StepLogger) {
        stepLogger.step('Click on Cross(X) mark for the question "Did the camera take a picture?"');
        await PageHelper.click(IPhoneCommonPage.testFailButton);
    }

    static async verifyFrontCameraScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves to Front Camera Test.`);
        await expect(await PageHelper.isElementDisplayed(IPhoneCameraPage.frontCameraText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneCameraConstants.frontCameraText));
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCameraPage.startCameraTestButton);
    }

    static async takePictureFromFrontCamera(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app->Take a picture from the Front camera.');
        await PageHelper.click(IPhoneCameraPage.startCameraTestButton);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCameraPage.takePictureButton);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(`${IPhoneCameraConstants.front}${IPhoneCameraConstants.before}`));
        await PageHelper.click(IPhoneCameraPage.takePictureButton);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
    }

    static async passCameraTest(stepLogger: StepLogger) {
        stepLogger.step('Click on tick mark for the question "Did the camera take a picture?"');
        await PageHelper.click(IPhoneCommonPage.testPassButton);
    }

    static async verifyCameraPictures(image: string, exception: string) {
        await MobileHelper.cropAndMirrorImage(
            MobileHelper.screenShotFolder(`${image}${IPhoneCameraConstants.before}`), false);
        await MobileHelper.cropAndMirrorImage(
            MobileHelper.screenShotFolder(`${image}${IPhoneCameraConstants.after}`), false);
        await PageHelper.sleepForXSecond(PageHelper.timeout.s);
        const imageCompare = await MobileHelper.compareTwoImages(
            MobileHelper.screenShotFolder(`${image}${IPhoneCameraConstants.beforeCropped}`),
            MobileHelper.screenShotFolder(`${image}${IPhoneCameraConstants.afterCropped}`));
        await expect(await imageCompare)
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(exception));
    }
}
