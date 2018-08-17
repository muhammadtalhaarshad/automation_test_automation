import { PageHelper } from '../../../components/html/page-helper';
import { IPhoneLoginPage } from './iphone-login.po';
import { TextboxHelper } from '../../../components/html/textbox-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { StepLogger } from '../../../core/logger/step-logger';
import { IPhoneLoginPageConstants } from './iphone-login-page.constants';
import { CommonPageValidations } from "../../common/common-page.validations";
import {IPhoneCommonPage} from "../iphone-common-pages/iphone-common.po"
import {IPhoneCommonPageConstants} from "../iphone-common-pages/iphone-common-page.constants";
import {CommonPageConstants} from "../../common/common-page-constants";

export class IPhoneLoginPageHelper {
    // Login Page Methods

    static async openTransferApp(stepLogger: StepLogger) {
        stepLogger.step(`Open the Transfer App on the source iOS device.`);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneLoginPage.welcomeText);
        await PageHelper.click(IPhoneLoginPage.welcomeText);
    }

    static async verifyTransferAppLoginScreenElements(stepLogger: StepLogger) {
        stepLogger.verification("Screen to enter Activation Code is displayed with following details - " +
            "Mobilogy Logo on top");
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.mobilogyLogo);

        await expect(await PageHelper.isElementPresent(IPhoneCommonPage.mobilogyLogo)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.mobilogyLogo));

        stepLogger.verification("Transfer App heading is present");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.welcomeText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.welcomeToTransferText));

        stepLogger.verification("Field labelled as Enter activation code");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.enterActivationCodeText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.enterActiviationCodeText));

        stepLogger.verification("Login button which is disabled");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.loginButton)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.loginText));

        stepLogger.verification("Text about agreement");
        await expect(await PageHelper.isElementPresent(IPhoneLoginPage.privacyPolicyText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.privacyPolicyText));
        await expect(await PageHelper.isElementPresent(IPhoneLoginPage.eulaPolicyText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.eulaPolicyText));
    }

    static async verifyDiagnosticsAppLoginScreenElements(stepLogger: StepLogger) {
        stepLogger.verification("Screen to enter Activation Code is displayed with following details - " +
            "Mobilogy Logo on top");

        await expect(await PageHelper.isElementPresent(IPhoneCommonPage.mobilogyLogo)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneCommonPageConstants.mobilogyLogo));

        stepLogger.verification("Diagnostics App heading is present");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.welcomeToDiagnosticsText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.welcomeToDiagnosticsText));

        stepLogger.verification("Field labelled as Enter activation code");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.enterActivationCodeText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.enterActiviationCodeText));

        stepLogger.verification("Login button which is disabled");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.loginButton)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.loginText));

        stepLogger.verification("Text about agreement");
        await expect(await PageHelper.isElementPresent(IPhoneLoginPage.privacyPolicyText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.privacyPolicyText));
        await expect(await PageHelper.isElementPresent(IPhoneLoginPage.eulaPolicyText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.eulaPolicyText));

    }


    static async enterActivationCode(stepLogger: StepLogger) {
        stepLogger.step(`Enter provided activation code from precondition (eg. 123321)`);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneLoginPage.enterPasscode);
        await TextboxHelper.sendKeys(IPhoneLoginPage.enterPasscode, CommonPageConstants.passcodeTransferApp);
    }

    static async verifyActivationCodeEntered(stepLogger: StepLogger) {
        stepLogger.verification("Once user clicks on field, keypad is displayed\n");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.keyBoard)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.keyboard));

        stepLogger.verification("Entered activation code is displayed as masked");
        await expect(PageHelper.getText(IPhoneLoginPage.enterPasscode)).toBe('••••••',
            CommonPageValidations.getEqualityValidation(await PageHelper.getText(IPhoneLoginPage.enterPasscode), '••••••'));
        await PageHelper.click(IPhoneLoginPage.welcomeText);
    }

    static async clickOnEyeIcon(stepLogger: StepLogger) {
        stepLogger.step(`Click on the eye icon beside activation code`);
        await PageHelper.click(IPhoneLoginPage.eyeOff);
    }

    static async verifyCodeIsVisible(stepLogger: StepLogger) {
        stepLogger.verification('The numeric value of activation code is displayed instead of masked characters.\n' +
            'The Eye icon itself is updated as shown below\n');

        await expect(await PageHelper.isElementEnabled(IPhoneLoginPage.loginButton)).toBe(true,
            CommonPageValidations.getDisabledValidation(IPhoneLoginPageConstants.loginText));

        await expect(PageHelper.getText(IPhoneLoginPage.enterVisiblePasscode)).toBe(CommonPageConstants.passcodeTransferApp,
            CommonPageValidations.getEqualityValidation(await PageHelper.getText(IPhoneLoginPage.enterVisiblePasscode), CommonPageConstants.passcodeTransferApp));

        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.eyeOn)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.eyeOn));
    }

    static async clickOnLoginButton(stepLogger: StepLogger) {
        stepLogger.step(`Click on Login button`);
        await PageHelper.click(IPhoneLoginPage.loginButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneLoginPage.calendarAccessRequestPopup);
    }

    static async verifyCalendarAccessPopupAppears(stepLogger: StepLogger) {
        stepLogger.verification('Popup appears as:\n' +
            'Text shown as : "Transfer App" would like to access your calendar');

        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.calendarAccessRequestPopup)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.accessCalendarText));

        stepLogger.verification("Further text displayed about access details");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.calendarAccessDetailsPopupText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.accessCalendarDescriptionText));

        stepLogger.verification("Options are displayed as 'Don\\'t Allow\  and 'OK'");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.OKButton)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.ok));
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.dontallowButton)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.dontAllow));

    }

    static async giveAccessToCalendar(stepLogger: StepLogger) {
        stepLogger.step(`Click 'OK' and allow Transfer App access to calendar.`);
        await PageHelper.click(IPhoneLoginPage.OKButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneLoginPage.contactAccessRequestPopup);
    }

    static async verifyContactsAccessPopupAppears(stepLogger: StepLogger) {
        stepLogger.verification('Popup appears as:\n' +
            'Text shown as : "Transfer App" would like to access your contacts.\n');
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.contactAccessRequestPopup)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.accessContactsText));

        stepLogger.verification("Further text displayed about access details");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.contactAccessDetailsPopupText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.accessCalendarDescriptionText));

        stepLogger.verification("Options are displayed as 'Don\\'t Allow\  and 'OK'");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.OKButton)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.ok));
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.dontallowButton)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.dontAllow));
    }


    static async giveAccessToContacts(stepLogger: StepLogger) {
        stepLogger.step(`Click 'OK' and allow Transfer App access contacts.`);
        await PageHelper.click(IPhoneLoginPage.OKButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneLoginPage.photosAccessRequestPopup);
    }

    static async verifyPhotosAccessPopupAppears(stepLogger: StepLogger) {
        stepLogger.verification('Popup appears as:\n' +
            'Text shown as : "Transfer App" would like to access your photos');
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.photosAccessRequestPopup)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.accessPhotosText));

        stepLogger.verification("Further text displayed about access details");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.photosAccessDetailsPopupText)).toBe(true,
            CommonPageValidations.getDisplayedValidation(IPhoneLoginPageConstants.accessPhotosDescriptionText));

        stepLogger.verification("Options are displayed as 'Don\\'t Allow\  and 'OK'");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.OKButton)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.ok));
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.dontallowButton)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.dontAllow));
    }

    static async giveAccessToPhotos(stepLogger: StepLogger) {
        stepLogger.step(`Click 'OK' and allow Transfer App access photos on device.`);
        await PageHelper.click(IPhoneLoginPage.OKButton);
        await PageHelper.sleepForXSecond(5);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneLoginPage.transferAppText);
    }

    static async verifySourceTargetScreen(stepLogger: StepLogger) {
        stepLogger.verification('Source/Target selection Screen is displayed with following details:\n');

        stepLogger.verification('App name is displayed under Logo as "TRANSFER APP"\n');
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.transferAppText)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.transferAppText));

        stepLogger.verification("Text is displayed as : Secure and fast content transfer between devices");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.pairingDevicesText)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.pairingDeviceText));

        stepLogger.verification("Source Mobile icon is shown for selection");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.srcPhoneImage)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.srcPhoneText));
        stepLogger.verification("Target Mobile icon is shown for selection");
        await expect(await PageHelper.isElementDisplayed(IPhoneLoginPage.destPhoneImage)).toBe(true,
            CommonPageValidations.getButtonDisplayedValidation(IPhoneLoginPageConstants.dstPhoneText));
    }

}
