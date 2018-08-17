import { PageHelper } from '../../../components/html/page-helper';
import { IPhoneDisplayTestPage } from '../iphone-display-test-pages/iphone-display-test.po';
import { WaitHelper } from '../../../components/html/wait-helper';
import { MobileHelper } from '../../../components/mobile/mobile-helper';
import { StepLogger } from '../../../core/logger/step-logger';
import { CommonPageValidations } from '../../common/common-page.validations';
import { IPhoneCommonPage } from '../iphone-common-pages/iphone-common.po';
import { IPhoneCommonPageConstants } from '../iphone-common-pages/iphone-common-page.constants';
import {CommonPageConstants} from "../../common/common-page-constants";

export class IPhoneDisplayTestPageHelper {
    // Display Test Page Methods

    static async startDisplayTest(driver: any, stepLogger: StepLogger) {
        stepLogger.step('On the mobile app click on the "Run" button for testing the Pixelation.');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneDisplayTestPage.displayTestText);
        await MobileHelper.tap(driver, IPhoneCommonPage.runButton);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xs);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white));
        await MobileHelper.tap(driver, IPhoneDisplayTestPage.pixelTestScreen);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.red));
        await MobileHelper.tap(driver, IPhoneDisplayTestPage.pixelTestScreen);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.green));
        await MobileHelper.tap(driver, IPhoneDisplayTestPage.pixelTestScreen);
        await PageHelper.saveScreenShot(MobileHelper.screenShotFolder(CommonPageConstants.colors.name.blue));
        await MobileHelper.tap(driver, IPhoneDisplayTestPage.pixelTestScreen);
    }

    static async verifyDisplayColors(stepLogger: StepLogger) {

        stepLogger.verification(`The mobile app should display colors
            White Red Green, Blue one after another without any missing pixels on the screen.`);
        await MobileHelper.verifyImageForIphone(stepLogger,
            MobileHelper.screenShotFolder(CommonPageConstants.colors.name.white),
            CommonPageConstants.colors.rgb.white);
        await MobileHelper.verifyImageForIphone(stepLogger,
            MobileHelper.screenShotFolder(CommonPageConstants.colors.name.red),
            CommonPageConstants.colors.rgb.red);
        await MobileHelper.verifyImageForIphone(stepLogger,
            MobileHelper.screenShotFolder(CommonPageConstants.colors.name.green),
            CommonPageConstants.colors.rgb.green);
        await MobileHelper.verifyImageForIphone(stepLogger,
            MobileHelper.screenShotFolder(CommonPageConstants.colors.name.blue),
            CommonPageConstants.colors.rgb.blue);
    }

    static async verifyDisplayScreenEncountered(stepLogger: StepLogger) {
        stepLogger.verification(`Display Test screen is encountered`);
        await expect(await PageHelper.isElementDisplayed(IPhoneCommonPage.testPassButton))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneCommonPageConstants.btnVText));
    }

    static async passDisplayTest(driver: any, stepLogger: StepLogger) {
        stepLogger.step(`On mobile app click on Cross(X) option on Display Test screen
            for the question "Did each color display smoothly and without empty spaces?"`);
        await MobileHelper.tap(driver, IPhoneCommonPage.testPassButton);
    }

    static async failDisplayTest(driver: any, stepLogger: StepLogger) {
        stepLogger.step(`On mobile app click on Cross(X) option on Display Test screen
            for the question "Did each color display smoothly and without empty spaces?"`);

        await MobileHelper.tap(driver, IPhoneCommonPage.testFailButton);
    }
}
