import { By, element } from 'protractor';
import { IPhoneLoginPageConstants } from './iphone-login-page.constants';
import {IPhoneCommonPageConstants} from "../iphone-common-pages/iphone-common-page.constants";
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneLoginPage {

    static get enterVisiblePasscode() {
        return element(By.xpath(IphoneComponentHelpers.getTypeOtherTypeTextField()));
    }

    static get enterPasscode() {
        return element(By.xpath(IphoneComponentHelpers.getTypeOtherTypeSecureTextField()));
    }

    static get continueButton() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.continueText)));
    }

    static get keyBoard() {
        return element(By.xpath(IphoneComponentHelpers.getTypeOtherIndexTwoTypeKeyboard()));
    }


    static get loginButton() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.loginText)));
    }
    static get eyeOff() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneLoginPageConstants.eyeOff)));
    }

    static get eyeOn() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneLoginPageConstants.eyeOn)));
    }

    static get myDeviceText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.myDeviceText)));
    }

    static get welcomeText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.welcomeToTransferText)));
    }

    static get welcomeToProcareText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.welcomeToProCareText)));
    }

    static get welcomeToDiagnosticsText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.welcomeToDiagnosticsText)));
    }



    static get enterActivationCodeText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.enterActiviationCodeText)));
    }

    static get privacyPolicyText() {
        return element(By.xpath(IphoneComponentHelpers.getTypeLinkByNameXPath(IPhoneLoginPageConstants.privacyPolicyText)));
    }

    static get eulaPolicyText() {
        return element(By.xpath(IphoneComponentHelpers.getTypeLinkByNameXPath(IPhoneLoginPageConstants.eulaPolicyText)));
    }

    static get startTestButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeImageByNameParentTypeOtherTypeButtonXPath(
            IPhoneLoginPageConstants.iNextText)));
    }

    static get excellentDeviceText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.excellentText)));
    }

    static get unlockedText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.unlockedText)));
    }

    static get displayTestText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneLoginPageConstants.displayTestText)));
    }

    static get runButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneLoginPageConstants.btnNextText)));
    }



    static get pixelTestScreen() {
        return element(By.xpath(IphoneComponentHelpers.getTypeApplicationByNameTypeWindowIndexOne(
            IPhoneLoginPageConstants.proCareText)));
    }

    static get testPassButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(
            IPhoneLoginPageConstants.btnVText)));
    }

    static get iTouchImage() {
        return element(By.xpath(IphoneComponentHelpers.getTypeImageByNameXPath(
            IPhoneLoginPageConstants.iTouchImageText)));
    }

    static get mainElement() {
        return element(By.xpath(IphoneComponentHelpers.getTypeImageByNameXPath(
            IPhoneLoginPageConstants.iTouchImageText)));
    }

    static get OKButton(){
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(
            IPhoneLoginPageConstants.ok)));
    }

    static get dontallowButton(){
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(
            IPhoneLoginPageConstants.dontAllow)));
    }


    static get contactAccessRequestPopup() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.accessContactsText)));
    }

    static get contactAccessDetailsPopupText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.accessContactsDescriptionText)));
    }

    static get calendarAccessDetailsPopupText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.accessCalendarDescriptionText)));
    }


    static get calendarAccessRequestPopup(){
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.accessCalendarText)));
    }

    static get photosAccessRequestPopup(){
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.accessPhotosText)));
    }

    static get photosAccessDetailsPopupText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.accessPhotosDescriptionText)));
    }


    static get pairingDevicesText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.pairingDeviceText)));
    }

    static get transferAppText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.transferAppText)));
    }

    static get whichPhoneText(){
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneLoginPageConstants.whichPhoneText)));
    }


    static get srcPhoneImage(){
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameIndexOne(IPhoneCommonPageConstants.genericPhoneBigText)));

    }

    static get destPhoneImage(){
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameIndexTwo(IPhoneCommonPageConstants.genericPhoneBigText)));
    }

}
