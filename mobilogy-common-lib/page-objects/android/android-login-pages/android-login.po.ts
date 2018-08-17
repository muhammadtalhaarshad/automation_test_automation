import { By, element } from "protractor";
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";
import {AndroidCommonPageConstants} from "../android-common-pages/android-common-page.constants";

export class AndroidLoginPage {

    static get enterPasscode() {
        return element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeEditText));
    }

    static getPasscodeText(label: string) {
        return element(By.xpath(AndroidComponentHelpers.getTypeEditTextXPathByLabel(label)));
    }

    static get contentTransferText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidCommonPageConstants.contentTransferText)));
    }

    static get srcTargetChoiceText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidCommonPageConstants.srcTargetChoiceText)));
    }

    static get getMyDisplayLabel() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidCommonPageConstants.myDeviceText)));
    }

    static get logoImage() {
        return element(By.xpath(AndroidComponentHelpers.getTypeImageViewByResouceId(AndroidCommonPageConstants.mobilogyLogoResourceId)));
    }

    static get logoImageProCare() {
        return element(By.xpath(AndroidComponentHelpers.getTypeImageViewByResouceId(AndroidCommonPageConstants.mobilogyLogoResourceIdProCare)));
    }

    static get logoImageProCareStg() {
        return element(By.xpath(AndroidComponentHelpers.getTypeImageViewByResouceId(AndroidCommonPageConstants.mobilogyLogoResourceIdProCareStg)));
    }

    static get logoImageDiagnostics() {
        return element(By.xpath(AndroidComponentHelpers.getTypeImageViewByResouceId(AndroidCommonPageConstants.mobilogyLogoResourceIdDiagnostics)));
    }

    static get welcomeText(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyWelcomeMsgResourceId)));
    }

    static get agreementText(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyAgreementTextResourceId)));
    }

    static get welcomeTextProCare(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyWelcomeMsgResourceIdProCare)));
    }

    static get welcomeTextProCareStg(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyWelcomeMsgResourceIdProCareStg)));
    }

    static get agreementTextProCare(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyAgreementTextResourceIdProcare)));
    }

    static get agreementTextProCareStg(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyAgreementTextResourceIdProcareStg)));
    }
    static get welcomeTextDiagnostics(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyWelcomeMsgResourceIdDiagnostics)));
    }

    static get agreementTextDiagnostics(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyAgreementTextResourceIdDiagnostics)));
    }

    static get getCodeText(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyHelpTextReourceId)));
    }

    static get getCodeTextProCare(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyHelpTextReourceIdProCare)));
    }

    static get getCodeTextDiagnostics(){
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyHelpTextReourceIdDiagnostics)));
    }

    static get getLoginPtn(){
        return element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId(AndroidCommonPageConstants.mobilogyAuthButtonResourceId)));
    }

    static get getLoginPtnProCare(){
        return element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId(AndroidCommonPageConstants.mobilogyAuthButtonResourceIdProcare)));
    }

    static get getLoginPtnProCareStg(){
        return element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId(AndroidCommonPageConstants.mobilogyAuthButtonResourceIdProcareStg)));
    }

    static get getLoginPtnDiagnostics(){
        return element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId(AndroidCommonPageConstants.mobilogyAuthButtonResourceIdDiagnostics)));
    }

    static get passwordToggleProCare() {
        return element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId(AndroidCommonPageConstants.mobilogyPasswordToggleResourceIdProCare)));
    }

    /**retrieving element by text, which in return will get the attribute of that element */
 /*   static get getWrongPasscodeText (){ // extracting reourceID (Xpath) for wrong message popup
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByText
        (AndroidCommonPageConstants.mobilogyWrongPasscodeMsgTextProcare)));
       }*/

//---------retrieving text by resourceID--------------
    static get getWrongPasscodeText (){
     //  mobilogyWrongPasscodeMsgResourceIDprocare is a new staitic readonly variable in AndroidCommonPageConstants
            return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId
            (AndroidCommonPageConstants.mobilogyWrongPasscodeMsgResourceIDProcareStg)));
        }


       static get getProCareHelpTitleText (){ // extracting reourceID (Xpath) for wrong message popup
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId
            (AndroidCommonPageConstants.mobilogyHelpTitleResourceIdProCareStg)));
       }
}