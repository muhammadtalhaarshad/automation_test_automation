import {PageHelper} from '../../../components/html/page-helper';
import {CommonPageValidations} from '../../common/common-page.validations';
import {AndroidCameraPage} from './android-camera.po';
import {AndroidCameraConstants} from './android-camera-page.constants';
import {WaitHelper} from '../../../components/html/wait-helper';
import {MobileHelper} from '../../../components/mobile/mobile-helper';
import {AndroidCommonPage} from '../android-common-pages/android-common.po';
import {StepLogger} from "../../../core/logger/step-logger";

export class AndroidCameraPageHelper {

    static async takePictureFromRareCamera(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app->Take a picture from the Rear camera.');
        await PageHelper.click(AndroidCameraPage.startCameraTestButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCameraPage.takePictureButton);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(AndroidCameraConstants.rear + AndroidCameraConstants.before));
        await PageHelper.click(AndroidCameraPage.takePictureButton);
    }

    static async verifyPicturetakenScreenDisplay(image: string, stepLogger: StepLogger) {
        stepLogger.verification(`Picture taken from the camera is displayed.`);
        await expect(await PageHelper.isElementDisplayed(AndroidCameraPage.didCameraTakePicText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidCameraConstants.didCameraTakePictureText));
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(image));
    }

    static async failCameraTest(stepLogger: StepLogger) {
        stepLogger.step('Click on Cross(X) mark for the question "Did the camera take a picture?"');
        await PageHelper.click(AndroidCommonPage.buttonSelector.fail);
    }

    static async verifyFrontCameraScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves to Front Camera Test.`);
        await expect(await PageHelper.isElementDisplayed(AndroidCameraPage.frontCameraText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidCameraConstants.frontCameraText));
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCameraPage.startCameraTestButton);
    }

    static async takePictureFromFrontCamera(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app->Take a picture from the Front camera.');
        await PageHelper.click(AndroidCameraPage.startCameraTestButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCameraPage.takePictureButton);
        await PageHelper.saveScreenShot(
            MobileHelper.screenShotFolder(AndroidCameraConstants.front + AndroidCameraConstants.before));
        await PageHelper.click(AndroidCameraPage.takePictureButton);
    }

    static async passCameraTest(stepLogger: StepLogger) {
        stepLogger.step('Click on tick mark for the question "Did the camera take a picture?"');
        await PageHelper.click(AndroidCommonPage.buttonSelector.pass);
    }

    static async verifyCameraPictures(image: string, exception: string, stepLogger: StepLogger) {
        stepLogger.verification('The user is able to record a video.');
        // Take screenshots and compare them with each screen.
        await MobileHelper.cropAndMirrorImage(
            MobileHelper.screenShotFolder(image + AndroidCameraConstants.before),
            false, 800, 800);
        await MobileHelper.cropAndMirrorImage(
            MobileHelper.screenShotFolder(image + AndroidCameraConstants.after),
            false, 800, 800);
        await PageHelper.sleepForXSecond(PageHelper.timeout.s);
        const imageCompare = MobileHelper.compareTwoImages(
            MobileHelper.screenShotFolder(image + AndroidCameraConstants.beforeCropped),
            MobileHelper.screenShotFolder(image + AndroidCameraConstants.afterCropped));
        await expect(await imageCompare)
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(exception));
    }

    static async verifyRearCameraScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification('Navigation moves automatically to Proximity Sensor Test.');
        await expect(await PageHelper.isElementDisplayed(AndroidCameraPage.rareCameraText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidCameraConstants.rareCameraText));
    }

    static async verifyRearCameraScreenDisplayFailure(stepLogger: StepLogger) {
        stepLogger.step(
            'On the mobile app -> Proximity Sensor Test starts automatically once the previous Motion Sensor test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await expect(await PageHelper.isElementDisplayed(AndroidCameraPage.rareCameraText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidCameraConstants.rareCameraText));
    }

}
