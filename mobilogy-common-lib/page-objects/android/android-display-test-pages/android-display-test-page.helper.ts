import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { MobileHelper } from '../../../components/mobile/mobile-helper';
import { StepLogger } from '../../../core/logger/step-logger';
import { CommonPageValidations } from '../../common/common-page.validations';
import { AndroidCommonPage } from '../android-common-pages/android-common.po';
import { AndroidCommonPageConstants } from '../android-common-pages/android-common-page.constants';
import { AndroidDisplayTestPage } from './android-display-test.po';
import {CommonPageConstants} from "../../common/common-page-constants";

export class AndroidDisplayTestPageHelper {
    // Display Test Page Methods

    static async startDisplayTest(driver: any, stepLogger: StepLogger) {
        stepLogger.step('On the mobile app click on the "Run" button for testing the Pixelation.');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidDisplayTestPage.displayTestText);
        await MobileHelper.tap(driver, AndroidCommonPage.buttonSelector.run);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white));
        await MobileHelper.tap(driver, AndroidDisplayTestPage.pixelTestScreen);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.red));
        await MobileHelper.tap(driver, AndroidDisplayTestPage.pixelTestScreen);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.green));
        await MobileHelper.tap(driver, AndroidDisplayTestPage.pixelTestScreen);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.blue));
        await MobileHelper.tap(driver, AndroidDisplayTestPage.pixelTestScreen);
    }

    static async verifyDisplayColors(stepLogger: StepLogger) {
        stepLogger.verification(`The mobile app should display colors
            White Red Green, Blue one after another without any missing pixels on the screen.`);
        await MobileHelper.verifyImage(stepLogger,
            MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white),
            CommonPageConstants.colors.rgb.white);
        await MobileHelper.verifyImage(stepLogger, MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white),
            CommonPageConstants.colors.rgb.red);
        await MobileHelper.verifyImage(stepLogger, MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white),
            CommonPageConstants.colors.rgb.green);
        await MobileHelper.verifyImage(stepLogger, MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white),
            CommonPageConstants.colors.rgb.blue);
    }

    static async verifyDisplayScreenEncountered(stepLogger: StepLogger) {
        stepLogger.verification('Display Test screen is encountered');
        await expect(await PageHelper.isElementDisplayed(AndroidCommonPage.buttonSelector.pass))
            .toBe(true, CommonPageValidations.getButtonDisplayedValidation(AndroidCommonPageConstants.buttonLabels.pass));
    }

    static async passDisplayTest(driver: any, stepLogger: StepLogger) {
        stepLogger.step(`On mobile app click on Cross(X) option on Display Test screen
            for the question "Did each color display smoothly and without empty spaces?"`);
        await MobileHelper.tap(driver, AndroidCommonPage.buttonSelector.pass);
    }

    static async failDisplayTest(driver: any, stepLogger: StepLogger) {
        stepLogger.step(`On mobile app click on Cross(X) option on Display Test screen
            for the question "Did each color display smoothly and without empty spaces?"`);
        await MobileHelper.tap(driver, AndroidCommonPage.buttonSelector.fail);
    }

    static async verifyDisplayScreenScreen(stepLogger: StepLogger) {
        stepLogger.verification('Then "Display test" screen is displayed with four colors (White, Red, Green and Blue)');
        await expect(await PageHelper.isElementDisplayed(AndroidDisplayTestPage.displayTestText))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.displayTestText));
    }
}
