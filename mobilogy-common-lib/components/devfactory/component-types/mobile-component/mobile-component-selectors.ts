import {ComponentHelpers} from '../../component-helpers/component-helpers';
import {HtmlHelper} from '../../../misc-utils/html-helper';

export class MobileComponentSelectors {

    public static getStaticTextByNameXPath(text: string, isContains = false, ) {
        return  `//${HtmlHelper.iPhoneAttributes.typeStaticText}[${ComponentHelpers
            .getXPathFunctionForName(text, isContains)}]`;
    }

    public static getTypeApplicationByNameXPath(text: string, isContains = false, ) {
        return `//${HtmlHelper.iPhoneAttributes.typeApplication}[${ComponentHelpers
            .getXPathFunctionForName(text, isContains)}]`;
    }

    public static getTypeLinkByNameXPath(text: string, isContains = false, ) {
        return `//${HtmlHelper.iPhoneAttributes.typeLink}[${ComponentHelpers
            .getXPathFunctionForName(text, isContains)}]`;
    }

    public static getTypeButtonByNameXPath(text: string, isContains = false, ) {
        return `//${HtmlHelper.iPhoneAttributes.typeButton}[${ComponentHelpers
            .getXPathFunctionForName(text, isContains)}]`;
    }

    public static getTypeImageByNameXPath(text: string, isContains = false, ) {
        return `//${HtmlHelper.iPhoneAttributes.typeImage}[${ComponentHelpers
            .getXPathFunctionForName(text, isContains)}]`;
    }

    public static getTypeWindowByNameXPath(text: string, isContains = false, ) {
        return `//${HtmlHelper.iPhoneAttributes.typeWindow}[${ComponentHelpers
            .getXPathFunctionForName(text, isContains)}]`;
    }

    static getElementXpathByAttributeText(tag: string, attributeValue: string, isContains = false) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionForStringComparison(attributeValue,
            `@${HtmlHelper.extraAttributes.text}`,
            isContains)}]`;
    }

    static getElementXpathByAttributeName(tag: string, attributeValue: string, isContains = false) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionForStringComparison(attributeValue,
            `@${HtmlHelper.extraAttributes.name}`,
            isContains)}]`;
    }

    static getElementXpathByAttributeIndex(tag: string, attributeValue: string) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionForStringComparison(attributeValue,
            `@${HtmlHelper.mobileAttributes.index}`, false)}]`;
    }

    static getElementXpathByAttributeResourceId(tag: string, attributeValue: string, isContains = false) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionForStringComparison(attributeValue,
            `@${HtmlHelper.mobileAttributes.resourceId}`,
            isContains)}]`;
    }

    static getElementXpathByAttributeIndexSuffix(tag: string, attributeValue: string) {
        return `/${tag}[${ComponentHelpers.getXPathFunctionForStringComparison(attributeValue,
            `@${HtmlHelper.mobileAttributes.index}`, false)}]`;
    }

    public static getXpath(tag: string) {
        return `//${tag}`;
    }

    public static getXpathConcat(tag1: string, tag2: string) {
        return `${tag1}${tag2}`;
    }
}
