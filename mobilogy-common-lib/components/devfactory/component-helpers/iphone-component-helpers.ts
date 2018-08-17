import {ComponentHelpersFactory} from '@aurea/protractor-automation-helper';
import {HtmlHelper} from "../../misc-utils/html-helper";
import {MobileComponentSelectors} from "../component-types/mobile-component/mobile-component-selectors";

export class IphoneComponentHelpers extends ComponentHelpersFactory {

    public static getStaticTextByNameXPath(text: string, isContains = false, ) {
        return MobileComponentSelectors.getElementXpathByAttributeName(
            HtmlHelper.iPhoneAttributes.typeStaticText, text, isContains);
    }

    public static getTypeApplicationByNameXPath(text: string, isContains = false, ) {
        return MobileComponentSelectors.getElementXpathByAttributeName(
            HtmlHelper.iPhoneAttributes.typeApplication, text, isContains);
    }

    public static getTypeLinkByNameXPath(text: string, isContains = false, ) {
        return MobileComponentSelectors.getElementXpathByAttributeName(
            HtmlHelper.iPhoneAttributes.typeLink, text, isContains);
    }

    public static getTypeButtonByNameXPath(text: string, isContains = false, ) {
        return MobileComponentSelectors.getElementXpathByAttributeName(
            HtmlHelper.iPhoneAttributes.typeButton, text, isContains);
    }

    public static getTypeImageByNameXPath(text: string, isContains = false, ) {

        return MobileComponentSelectors.getElementXpathByAttributeName(
            HtmlHelper.iPhoneAttributes.typeImage, text, isContains);
    }

    public static getTypeWindowByNameXPath(text: string, isContains = false, ) {

        return MobileComponentSelectors.getElementXpathByAttributeName(
            HtmlHelper.iPhoneAttributes.typeWindow, text, isContains);
    }

    public static getTypeOtherTypeTextView(){
        return MobileComponentSelectors.getXpathConcat(this.elementXpath.getTypeOtherXPath,
                                                       this.elementXpath.getTypeTextView);
    }

    public static getTypeOtherTypeTextField () {
        return MobileComponentSelectors.getXpathConcat(this.elementXpath.getTypeOtherXPath,
            this.elementXpath.getTypeTextField);
    }
    public static getTypeOtherTypeSecureTextField() {
        return MobileComponentSelectors.getXpathConcat(this.elementXpath.getTypeOtherXPath,
            this.elementXpath.getTypeSecureTextFieldPath);
    }
    public static getTypeCellTextView() {
        return MobileComponentSelectors.getXpathConcat(this.elementXpath.getTypeCell,
            this.elementXpath.getTypeTextView);
    }
    public static getTypeOtherTextView() {
        return MobileComponentSelectors.getXpathConcat(this.elementXpath.getTypeOtherXPath,
            this.elementXpath.getTypeTextView);
    }

    public static getTypeImageByNameParentTypeOtherTypeButtonXPath(text: string, isContains = false) {
        return `${this.getTypeImageByNameXPath(text, isContains)}
                        //${HtmlHelper.xpathExpressions.parent}::${HtmlHelper.iPhoneAttributes.typeOther}${this.elementXpath.getTypeButtonXPath}`;
    }

    public static getTypeApplicationByNameSecureTextFieldPath(text: string) {
        return MobileComponentSelectors.getXpathConcat(this.getTypeApplicationByNameXPath(text),
                                                       this.elementXpath.getTypeSecureTextFieldPath);
    }
    public static getTypeApplicationByNameTypeWindowIndexOne(text: string) {
        return `${MobileComponentSelectors.getXpathConcat(this.getTypeApplicationByNameXPath(text),
                                                       this.elementXpath.getTypeWindowXPath)}[1]`;
    }
    public static getTypeOtherIndexTwoTypeKeyboard() {
        return `${this.elementXpath.getTypeOtherXPath}[2]${this.elementXpath.getTypeKeyboard}`;
    }

    public static getTypeButtonByNameIndexOne(name: string) {
        return `(${this.getTypeButtonByNameXPath(name)})[1]`
    }

    public static getTypeButtonByNameIndexTwo(name: string) {
        return `(${this.getTypeButtonByNameXPath(name)})[2]`
    }


    public static get elementXpath () {
        return {
            getTypeCell: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeCell),
            getTypeTextView: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeTextView),
            getTypeOtherXPath: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeOther),
            getTypeKeyboard: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeKeyboard),
            getTypeTextField: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeTextField),
            getTypeSecureTextFieldPath: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeSecureTextField),
            getTypeButtonXPath: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeButton),
            getTypeWindowXPath: MobileComponentSelectors.getXpath(HtmlHelper.iPhoneAttributes.typeWindow)
        }
    }
}


