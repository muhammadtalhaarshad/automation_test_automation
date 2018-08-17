import { HtmlHelper } from '../../../misc-utils/html-helper';
import { ComponentHelpers } from '../../component-helpers/component-helpers';

export class TextComponentSelectors {
    public static getDotXpath(tag: string, text: string, isContains = false) {
        return `//${tag}[${ComponentHelpers
            .getXPathFunctionForDot(text, isContains)}]`;
    }

    public static getSpanByDotXpath(text: string, isContains = false) {
        return this.getDotXpath(HtmlHelper.tags.span, text, isContains);
    }

    public static getDivByDotXpath(text: string, isContains = false) {
        return this.getDotXpath(HtmlHelper.tags.div, text, isContains);
    }



    public static getSpanByTextXpath(text: string, isContains = false) {
        return this.getTextXpath(HtmlHelper.tags.span, text, isContains);
    }

    public static getDivByTextXpath(text: string, isContains = false) {
        return this.getTextXpath(HtmlHelper.tags.div, text, isContains);
    }

    public static getLiByTextXpath(text: string, isContains = false) {
        return this.getTextXpath(HtmlHelper.tags.li, text, isContains);
    }

    public static getClassXpath(tag: string, classValue: string, isContains = false) {
        return `//${tag}[${ComponentHelpers
            .getXPathFunctionForClass(classValue, isContains)}]`;
    }

    public static getDivByClassXpath(classValue: string, isContains = false) {
        return this.getClassXpath(HtmlHelper.tags.div, classValue, isContains);
    }

    public static getDivByDotInsideDivByClassXpath(
        divClassValue: string,
        divTextValue: string,
        divIsContains = false,
        divTextIsContains = false
        ) {
        return `${TextComponentSelectors
            .getClassXpath(HtmlHelper.tags.div, divClassValue, divIsContains)}${TextComponentSelectors
                .getDotXpath(HtmlHelper.tags.div, divTextValue, divTextIsContains)}`;
    }

    public static getLabelByDotXpath(text: string, isContains = false) {
        return this.getDotXpath(HtmlHelper.tags.label, text, isContains);
    }

    public static getLiByClassXpath(classValue: string, isContains = false) {
        return this.getClassXpath(HtmlHelper.tags.li, classValue, isContains);
    }

    public static getLiByClassAndDotXpath(
        classValue: string, classIsContains = false,
        text: string, textIsContains = false
        ) {
        const liByClassXpath = `${this.getLiByClassXpath(classValue, classIsContains)}`;
        const byDotXpath = `[${ComponentHelpers.getXPathFunctionForDot(text, textIsContains)}]`;
        return `${liByClassXpath}${byDotXpath}`;
    }

    public static getSpanByClassXpath(classValue: string, isContains = false) {
        return this.getClassXpath(HtmlHelper.tags.span, classValue, isContains);
    }

    public static getFollowingDivByDivTextXpath(
        divTextValue: string,
        textIsContains = false) {
        return `${this.getDivByTextXpath(divTextValue, textIsContains)}/${HtmlHelper.xpathExpressions.following}::${HtmlHelper.tags.div}`;
    }

    public static getListByDotXpath(textValue: string, isContains = false) {
        return this.getDotXpath(HtmlHelper.tags.li, textValue, isContains);
    }

    public static getListByTextXpath(textValue: string, isContains = false) {
        return this.getTextXpath(HtmlHelper.tags.li, textValue, isContains);
    }

    public static getAnchorByDotXpath(text: string, isContains = false) {
        return this.getDotXpath(HtmlHelper.tags.anchor, text, isContains);
    }

    public static getSpanUnderHeaderTwoByClassXpath(classValue: string, isContains = false) {
        return `//${HtmlHelper.tags.h2}[${ComponentHelpers
            .getXPathFunctionForClass(classValue, isContains)}]//${HtmlHelper
                .tags.span}`;
    }

    public static getHeaderThreeByClassXpath(classValue: string, isContains = false) {
        return `//${HtmlHelper.tags.h3}[${ComponentHelpers
            .getXPathFunctionForClass(classValue, isContains)}]`;
    }

    public static getIdXpath(tag: string, idAttributeValue: string, isContains = false) {
        return `//${tag}[${ComponentHelpers
            .getXPathFunctionForId(idAttributeValue, isContains)}]`;
    }

    public static getTextXpath(tag: string, text: string, isContains = false) {
        return `//${tag}[${ComponentHelpers.getXPathFunctionForText(text, isContains)}]`;
    }

    /**
     * Returns the text
     * @param idAttributeValue
     * @param classValue
     * @param text
     * @param isContains
     * @returns Xpath = //div[@id='idAttributeValue']//a[@class='classValue'//span[normalize-space(text())='text']
     */
    public static getSpanTextByHyperlinkIDInsideDivClassXpath(
        idAttributeValue: string, classValue: string, text: string, isContains = false) {
        return `${TextComponentSelectors
            .getIdXpath(HtmlHelper.tags.div, idAttributeValue, isContains)}${TextComponentSelectors
                .getClassXpath(HtmlHelper.tags.anchor, classValue, isContains)}${TextComponentSelectors
                    .getSpanByTextXpath(text, isContains)}`;
    }

    /**
     * Returns the header text
     * @param tag
     * @param classValue
     * @param text
     * @param tagIsContains
     * @param textIsContains
     * @returns Xpath = //div[contains(@class,'classValue')]//span[normalize-space(text())='text']
     */
    public static getSpanByTextInsideTagByClassXpath(
        tag: string, classValue: string, text: string, tagIsContains = false, textIsContains = false) {
        return `${TextComponentSelectors
            .getClassXpath(tag, classValue, tagIsContains)}${TextComponentSelectors
                .getSpanByTextXpath(text, textIsContains)}`;
    }

    /**
     * Returns the text
     * @param tag
     * @param idValue
     * @param text
     * @param tagIsContains
     * @param textIsContains
     * @returns Xpath = //div[@id='idValue']//span[normalize-space(text())='text']
     */
    public static getSpanByTextInsideTagByIdXpath(
        tag: string, idValue: string, text: string, tagIsContains = false, textIsContains = false) {
        return `${TextComponentSelectors
            .getIdXpath(tag, idValue, tagIsContains)}${TextComponentSelectors
                .getSpanByTextXpath(text, textIsContains)}`;
    }

    public static getPHeaderByDotXpath(text: string, isContains = false) {
        return this.getDotXpath(HtmlHelper.tags.pHeader, text, isContains);
    }

    public static getHeaderTwoByClassXpath(classValue: string, isContains = false) {
        return `//${HtmlHelper.tags.h2}[${ComponentHelpers
            .getXPathFunctionForClass(classValue, isContains)}]`;
    }

}
