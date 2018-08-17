import { PageHelper } from '../../../../../mobilogy-common-lib/components/html/page-helper';
import { IPhoneCommonPage } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-common-pages/iphone-common.po';
import { TextboxHelper } from '../../../../../mobilogy-common-lib/components/html/textbox-helper';
import { WaitHelper } from '../../../../../mobilogy-common-lib/components/html/wait-helper';
import { IPhoneCommonPageConstants } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-common-pages/iphone-common-page.constants';
import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger'
import { IPhoneLoginPage } from "../../../../../mobilogy-common-lib/page-objects/iphone/iphone-login-pages/iphone-login.po";
import { IPhoneLoginPageConstants } from "../../../../../mobilogy-common-lib/page-objects/iphone/iphone-login-pages/iphone-login-page.constants";
import { CommonPageValidations } from "../../../../../mobilogy-common-lib/page-objects/common/common-page.validations";
import {CommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/common/common-page-constants";


export class IPhoneProcareAppLoginPageHelper {
    // Login Page Methods

    static async initiateApp(stepLogger: StepLogger) {
        stepLogger.step('Open the Buyback app in the iOS device');
        await PageHelper.click(IPhoneCommonPage.welcomeToProcareAppText);
    }

    static async verifyLoginScreen(stepLogger: StepLogger) {
        stepLogger.verification("Login screen is displayed allowing the user to enter the Password\n");

        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.welcomeToProcareText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.welcomeToProCareText));

        await expect(await PageHelper.isElementDisplayed(IPhoneCommonPage.enterPasscodeForProcareApp)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.enterActiviationCodeText));

    }

    static async enterActivationCode(stepLogger: StepLogger) {
        stepLogger.step('Enter the correct authentication code');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.enterPasscodeForProcareApp);
        await TextboxHelper.sendKeys(IPhoneCommonPage.enterPasscodeForProcareApp, CommonPageConstants.passcodeProcareApp);
        await PageHelper.click(IPhoneCommonPage.welcomeToProcareAppText);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.welcomeToProcareAppText);
    }

    static async verifyContinueButtonEnabled(stepLogger: StepLogger) {
        stepLogger.verification("\"Continue\" button becomes enabled\n");
        await expect(await PageHelper.isElementEnabled(IPhoneLoginPage.loginButton)).toBe(true,
            CommonPageValidations.getEnabledValidation(IPhoneCommonPageConstants.continueText));
    }

    static async clickOnLoginButton(stepLogger: StepLogger) {
        stepLogger.step('Click on "Continue" button');
        await PageHelper.click(IPhoneLoginPage.loginButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.myDeviceText);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.startTestButton);
    }

    static async verifyMydeviceScreen(stepLogger: StepLogger) {
        stepLogger.verification("\"My Device\" screen is displayed with below fields:\n");

        stepLogger.verification("Screenshot of the device\n");
        await expect(await PageHelper.isElementPresent(IPhoneCommonPage.iPhoneImage)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.iphoneImage));

        stepLogger.verification("My Device Text");
        await expect(await PageHelper.isElementDisplayed(IPhoneCommonPage.myDeviceText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.myDeviceText));

        stepLogger.verification("Phone Model");
        await expect(await PageHelper.isElementDisplayed(IPhoneCommonPage.modelText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.modelText));

        stepLogger.verification("OS");
        await expect(await PageHelper.isElementDisplayed(IPhoneCommonPage.osText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.osText));

        stepLogger.verification("Start button");
        await expect(await PageHelper.isElementDisplayed(IPhoneCommonPage.startTestButton)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.startText));

    }

}
