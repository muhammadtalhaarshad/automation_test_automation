import {PageHelper} from '../../../components/html/page-helper';
import {TextboxHelper} from '../../../components/html/textbox-helper';
import {WaitHelper} from '../../../components/html/wait-helper';
import {StepLogger} from '../../../core/logger/step-logger';
import {CommonPageConstants} from "../../common/common-page-constants";
import {AndroidCommonPage} from "../android-common-pages/android-common.po";
import {CommonPageValidations} from "../../common/common-page.validations";
import {AndroidCommonPageConstants} from "../android-common-pages/android-common-page.constants";
import {AndroidDisplayTestPage} from "../android-display-test-pages/android-display-test.po";
import {AndroidLoginPage} from "./android-login.po";
import { browser } from '../../../../node_modules/protractor';



export class AndroidLoginPageHelper {

    static async initiateAppTransferApp(stepLogger: StepLogger) {
        stepLogger.step('Open the Transfer App on the source device');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCommonPage.appPermissions.managePhoneCalls);
        await PageHelper.click(AndroidCommonPage.buttonSelector.allow);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCommonPage.appPermissions.accessContacts);
        await PageHelper.click(AndroidCommonPage.buttonSelector.allow);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCommonPage.appPermissions.accessCalendar);
        await PageHelper.click(AndroidCommonPage.buttonSelector.allow);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCommonPage.appPermissions.viewSendSms);
        await PageHelper.click(AndroidCommonPage.buttonSelector.allow);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidCommonPage.appPermissions.accessMedia);
        await PageHelper.click(AndroidCommonPage.buttonSelector.allow);
        stepLogger.verification("Transfer app opens successfully and popup messages are displayed for access permissions on phone calls, contacts, calendar.");
    }

    static async enterActivationCode(stepLogger: StepLogger, passcode: string) {
        stepLogger.step('Click on the text field and enter activation code');
        await PageHelper.click(AndroidLoginPage.enterPasscode);
        await TextboxHelper.sendKeys(AndroidLoginPage.enterPasscode, passcode);
    }

    static async verifyLoginScreen(stepLogger: StepLogger, pageTitle: string) {
        stepLogger.verification('Authentication screen is displayed.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.enterPasscode))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(pageTitle));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.logoImage))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyLogo));


            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getLoginPtn))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAuthButton));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.agreementText))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAgreementText));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.welcomeText))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyWelcomeMsg));


    }


    static async verifyLoginScreenForProCareApp(stepLogger: StepLogger, pageTitle: string) {
        stepLogger.verification('Authentication screen is displayed.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.enterPasscode))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(pageTitle));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.logoImageProCare))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyLogo));


            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getLoginPtnProCare))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAuthButton));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.agreementTextProCare))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAgreementText));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.welcomeTextProCare))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyWelcomeMsg));
    }


    static async verifyLoginScreenForProCareAppStg(stepLogger: StepLogger, pageTitle: string) { // created by MUHAMMAD talha arshad 15-08-2018
        stepLogger.verification('Authentication screen is displayed.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.enterPasscode))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(pageTitle));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.logoImageProCareStg))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyLogo));


            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getLoginPtnProCareStg))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAuthButton));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.agreementTextProCareStg))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAgreementText));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.welcomeTextProCareStg))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyWelcomeMsg));
    }


    static async verifyLoginScreenForDiagnosticsApp(stepLogger: StepLogger, pageTitle: string) {
        stepLogger.verification('Authentication screen is displayed.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.enterPasscode))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(pageTitle));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.logoImageDiagnostics))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyLogo));


            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getLoginPtnDiagnostics))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAuthButton));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.agreementTextDiagnostics))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyAgreementText));

            await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.welcomeTextDiagnostics))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.mobilogyWelcomeMsg));
    }

    static async clickOnShowPasswordButton(stepLogger: StepLogger) {
        stepLogger.step('Click on the eye icon beside activation code');
        await PageHelper.click(AndroidCommonPage.buttonSelector.showPassword);
    }

    static async clickOnLoginButton(stepLogger: StepLogger) {
        stepLogger.step('Click Login button');
        await PageHelper.click(AndroidCommonPage.buttonSelector.login);
    }

    static async checkLoginButtonClickable(stepLogger: StepLogger) {
        stepLogger.step('Check id Login button is clickable');
        expect (await PageHelper.getAttributeValue(AndroidCommonPage.buttonSelector.login,"clickable"))
        .toEqual("true",CommonPageValidations.getEqualityValidation("true",await PageHelper.getAttributeValue(AndroidCommonPage.buttonSelector.login,"clickable")));
    }

    static async checkLoginButtonNotClickable(stepLogger: StepLogger) {
        stepLogger.step('Check id Login button is clickable');
        expect (await PageHelper.getAttributeValue(AndroidCommonPage.buttonSelector.login,"clickable"))
        .toEqual("false",CommonPageValidations.getEqualityValidation("false",await PageHelper.getAttributeValue(AndroidCommonPage.buttonSelector.login,"clickable")));
    }

    static async verifyPostLoginScreenTransferApp(stepLogger: StepLogger) {
        stepLogger.verification('A screen will be displayed to user asking him whether this is a Source or Target ' +
            'device, as shown below.');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.contentTransferText);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.srcTargetChoiceText);
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.srcTargetChoiceText))
            .toBe(true, CommonPageValidations.getDisplayedValidation(
                AndroidCommonPageConstants.srcTargetChoiceText));
    }

    static async verifyMaskedPassword(stepLogger: StepLogger) {
        stepLogger.verification('Once user click on text field, Numbers pad will be displayed' +
            'Entered activation code is displayed as masked.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getPasscodeText('••••••')))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(
                AndroidCommonPageConstants.pageTitles.transferApp));
    }

    static async verifyShowPassword(stepLogger: StepLogger, passcode: string) {
        stepLogger.verification('Once user click on text field, Numbers pad will be displayed' +
            'Entered activation code is displayed as masked.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getPasscodeText(
            CommonPageConstants.passcodeTransferApp)))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(passcode));
    }

    static async initiateAppDiagnostic(stepLogger: StepLogger) {
        stepLogger.step('Enter the passcode');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.enterPasscode);
        await this.enterActivationCode(stepLogger, CommonPageConstants.passcodeDiagnosticApp);
        await PageHelper.click(AndroidCommonPage.buttonSelector.continue);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.getMyDisplayLabel);
        await PageHelper.click(AndroidCommonPage.buttonSelector.start);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidDisplayTestPage.displayTestText);
    }
    static async openDiagnosticApp(stepLogger: StepLogger) {
        stepLogger.step('Open Diagnostic App');
    }

    static async initiateAppProcare(stepLogger: StepLogger) {
        stepLogger.step('Enter the passcode');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.enterPasscode);
        await this.enterActivationCode(stepLogger, CommonPageConstants.passcodeDiagnosticApp);
        await PageHelper.click(AndroidCommonPage.buttonSelector.continue);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.getMyDisplayLabel);
        await PageHelper.click(AndroidCommonPage.buttonSelector.start);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidDisplayTestPage.displayTestText);
    }
    static async verifyMyDeviceScreen(stepLogger: StepLogger) {
        stepLogger.verification('The Login is successful and "Mydevice" screen is displayed.');
        await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.getMyDisplayLabel))
            .toBe(true, CommonPageValidations.getScreenDisplayedValidation(AndroidCommonPageConstants.myDeviceText));
    }

    static async verifyMyDeviceScreenElements(stepLogger: StepLogger) {
        stepLogger.verification('"My Device" screen is displayed with below fields: ' +
            'Screenshot of the device, Phone Model, OS, Firmware, Device ID, "Start" button');
        await this.verifyMyDeviceScreen(stepLogger);

        stepLogger.subVerification('Screenshot of the device should be displayed');
        await expect(await PageHelper.isElementDisplayed(AndroidCommonPage.getScreenLabels.myDeviceScreen.phoneImage))
            .toBe(true, CommonPageValidations.getNotDisplayedValidation(AndroidCommonPageConstants.myDeviceText));

        stepLogger.subVerification('Model of the device should be displayed');
        await expect(await PageHelper.isElementDisplayed(
            AndroidCommonPage.getScreenLabels.myDeviceScreen.model, true))
            .toBe(true, CommonPageValidations.getNotDisplayedValidation(
                AndroidCommonPageConstants.screenLabels.myDeviceScreen.model));

        stepLogger.subVerification('OS of the device should be displayed');
        await expect(await PageHelper.isElementDisplayed(
            AndroidCommonPage.getScreenLabels.myDeviceScreen.os, true))
            .toBe(true, CommonPageValidations.getNotDisplayedValidation(
                AndroidCommonPageConstants.screenLabels.myDeviceScreen.os));

        stepLogger.subVerification('Firmware of the device should be displayed');
        await expect(await PageHelper.isElementDisplayed(
            AndroidCommonPage.getScreenLabels.myDeviceScreen.firmware, true))
            .toBe(true, CommonPageValidations.getNotDisplayedValidation(
                AndroidCommonPageConstants.screenLabels.myDeviceScreen.firmware));
    }

    static async clickContinueButton(stepLogger: StepLogger) {
        stepLogger.step(`Click on "Continue" button`);
        await PageHelper.click(AndroidCommonPage.buttonSelector.continue);
    }

    static async clickShowPasswordAndVerifyProCare(stepLogger: StepLogger) {
        stepLogger.step(`Click on Show Password icon`);
        await PageHelper.click(AndroidLoginPage.passwordToggleProCare);
        stepLogger.verification("The authentication code entered is displayed");
        await expect(await PageHelper.getText(AndroidLoginPage.enterPasscode))
      .toEqual(CommonPageConstants.passcodeProcareApp, CommonPageValidations.getEqualityValidation(CommonPageConstants.passcodeProcareApp,await PageHelper.getText(AndroidLoginPage.enterPasscode)));
    }
    static async clickShowPasswordAndVerifyEncryptedProCare(stepLogger: StepLogger) {
    stepLogger.step(`Click on Show Password icon`);
      await PageHelper.click(AndroidLoginPage.passwordToggleProCare);
      stepLogger.verification("The authentication code entered is displayed");
      await expect(await PageHelper.getText(AndroidLoginPage.enterPasscode))
      .toEqual(CommonPageConstants.passcodeProcareAppEncrypted, CommonPageValidations.getEqualityValidation(CommonPageConstants.passcodeProcareAppEncrypted,await PageHelper.getText(AndroidLoginPage.enterPasscode)));

    }

    static async clickStartButton(stepLogger: StepLogger) {
        stepLogger.step(`Click on "Start" button`);
        await PageHelper.click(AndroidCommonPage.buttonSelector.start);
    }

    static async initiateProcareAppWoPasscode(stepLogger: StepLogger) {
        stepLogger.step('Open the Buyback app in the android device.');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.enterPasscode);
    }

 /*   static async verifyWrongPasscodePopup(stepLogger: StepLogger, passcode: string){ // verifying the wrong passcode error
        stepLogger.verification('Error is displayed that the - The code entered is not valid '+passcode);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.getWrongPasscodeText);
    }*/


    static async verifyWrongPasscodePopup(stepLogger: StepLogger, passcode: string){
        stepLogger.verification('Error is displayed that ' + passcode);
            
        await expect(await PageHelper.getAttributeValue(AndroidLoginPage.getWrongPasscodeText,"text"))
        .toBe(passcode); 
            
    }
    

    static async initiateAppProcareWrongPasscode(stepLogger: StepLogger) { // initiate Procare App with wrong passcode
        stepLogger.step('Enter the wrong passcode');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.enterPasscode);
        await this.enterActivationCode(stepLogger, CommonPageConstants.wrongPasscodeProcareApp);
        await PageHelper.click(AndroidCommonPage.buttonSelector.continue);
     }

     static async addDelay(stepLogger: StepLogger, time_ms: number) //for adding delay on purpose in procare app
     {   
         stepLogger.step('Pausing for ' + time_ms.toString());
         let now = new Date(); 
         let exitTime = now.getTime() + time_ms; 
         while (true) { 
             now = new Date(); 
             if (now.getTime() > exitTime) 
             return; 
         }
     }

     static async verifyHelpProCare(stepLogger:StepLogger)
     {
        stepLogger.verification('Verifying Help Title');
     //   await WaitHelper.getInstance().waitForElementToBeDisplayed(AndroidLoginPage.getProCareHelpTitleText)

        await expect(await PageHelper.getAttributeValue(AndroidLoginPage.getProCareHelpTitleText,"text"))
        .toBe(AndroidCommonPageConstants.mobilogyHelpTitleTextProCareStg);
              /*

          await expect(await PageHelper.getAttributeValue(AndroidLoginPage.getWrongPasscodeText,"text"))
        .toBe(passcode);            

 await expect(await PageHelper.isElementDisplayed(AndroidLoginPage.srcTargetChoiceText))
            .toBe(true, CommonPageValidations.getDisplayedValidation(
                AndroidCommonPageConstants.srcTargetChoiceText));
  */

     }

     static async verifyBackButtonHelpProCare(stepLogger:StepLogger)
     {
         stepLogger.verification('Verifying the Back Button for Help');
         await PageHelper.isElementPresent(AndroidCommonPage.buttonSelector.back);

     }

     static async verifyPrivacyProCare(stepLogger : StepLogger)
     {
            stepLogger.verification('Verifying the Back Button for Privacy Policy');
            await PageHelper.isElementPresent(AndroidCommonPage.buttonSelector.back);

     }


     public static async tapByCoordinates(x: number, y: number) {
        const tapObject = { x: x, y: y };
        //return await browser.executeScript('mobile: tap', tapObject);
        return await browser.executeScript('mobile: tap', tapObject);
        
        
    }



    public static async switchOffInternet(stepLogger:StepLogger)
    {
        let ecounter = 0;
        stepLogger.step('Switching off Wifi and Data on Device ');
        try{await browser.driver.setNetworkConnection(6);}
        catch (e){

            console.log('Need to work on this error');
            ecounter=ecounter+1;
            
        }
        await this.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
        if (ecounter==0)
        {
        
        await browser.driver.toggleData();
        await this.addDelay(stepLogger, CommonPageConstants.MediumDelayProcare);
        await browser.driver.toggleWiFi();
        
        }
        else {
           // this.switchOffInternet(stepLogger);
            await browser.driver.toggleWiFi();
        }
    }
}
