import {By, element} from 'protractor';
import {IPhoneCommonPageConstants} from '../iphone-common-pages/iphone-common-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneCommonPage {

    static get mobilogyLogo() {
        return element(By.xpath(`${IphoneComponentHelpers.getTypeImageByNameXPath(IPhoneCommonPageConstants.mobilogyLogo)}`));
    }

    static get enterPasscode() {
        return element(By.xpath(IphoneComponentHelpers.getTypeApplicationByNameSecureTextFieldPath(
            IPhoneCommonPageConstants.diagnosticTextStaging)));
    }

    static get enterPasscodeForProcareApp() {
        return element(By.xpath(IphoneComponentHelpers.getTypeOtherTypeSecureTextField()));
    }

    static get continueButton() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.continueText)));
    }

    static get loginButton() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.loginText)));
    }


    static get myDeviceText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.myDeviceText)));
    }

    static get welcomeToDiagnosticsText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.welcomeToDiagnosticsText)));
    }
    static get welcomeText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.welcomeToProCareText)));
    }

    static get welcomeToProcareAppText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.welcomeToProCareText)));
    }

    static get startTestButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeImageByNameParentTypeOtherTypeButtonXPath(
            IPhoneCommonPageConstants.iNextText)));
    }

    static get excellentDeviceText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.excellentText)));
    }

    static get unlockedText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.unlockedText)));
    }

    static get displayTestText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.displayTestText)));
    }

    static get runButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneCommonPageConstants.btnNextText)));
    }

    static get testPassButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneCommonPageConstants.btnVText)));
    }

    static get testFailButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneCommonPageConstants.btnXText)));
    }

    static get okAlert() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneCommonPageConstants.okAlert)));
    }

    static get modelText() {
        return element(By.xpath(IphoneComponentHelpers.getTypeOtherTextView()));
    }

    static get iPhoneImage() {
        return element(By.xpath(IphoneComponentHelpers.getTypeImageByNameXPath(
            IPhoneCommonPageConstants.genericIPhone)));
    }

    static get osText() {
        return element(By.xpath(IphoneComponentHelpers.getTypeCellTextView()));
    }


}
