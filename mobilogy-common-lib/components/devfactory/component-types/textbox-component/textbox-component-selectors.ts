import { TextBoxComponentSelectorsFactory } from '@aurea/protractor-automation-helper';
import { ComponentHelpers } from '../../component-helpers/component-helpers';
import { HtmlHelper } from '../../../misc-utils/html-helper';
import { TextComponentSelectors } from '../text-component/text-component-selectors';

export class TextBoxComponentSelectors extends TextBoxComponentSelectorsFactory {
    public static getInputByClassXpath(classValue: string, isContains = false) {
        return `//${HtmlHelper.tags.input}[${ComponentHelpers.getXPathFunctionForClass(classValue, isContains)}]`;
    }

    public static getInputByIdXpath(idValue: string, isContains = false) {
        return `//${HtmlHelper.tags.input}[${ComponentHelpers.getXPathFunctionForId(idValue, isContains)}]`;
    }

    public static getInputByTypeXpath(typeValue: string, isContains = false) {
        return `//${HtmlHelper.tags.input}[${ComponentHelpers.getXPathFunctionForType(typeValue, isContains)}]`;
    }

    public static getInputByClassInsideDivByClassXpath(
        divClassValue: string, inputClassValue: string,
        divIsContains = false, inputIsContains = false) {
        return `${TextComponentSelectors
            .getClassXpath(HtmlHelper.tags.div, divClassValue, divIsContains)}${TextComponentSelectors
                .getClassXpath(HtmlHelper.tags.input, inputClassValue, inputIsContains)}`;
    }
    public static getInputByLabel(
        divClassValue: string, inputClassValue: string,
        divIsContains = false, inputIsContains = false) {
        return `${TextComponentSelectors
            .getClassXpath(HtmlHelper.tags.div, divClassValue, divIsContains)}${TextComponentSelectors
                .getClassXpath(HtmlHelper.tags.input, inputClassValue, inputIsContains)}`;
    }
    public static getXpathForInputByIdFollowingSiblingByLabel(
        id: string, label: string,
        idIsContains = false,
        labelIsContains = false) {
        return `//${HtmlHelper.tags.label}[${ComponentHelpers
            .getXPathFunctionForDot(label, labelIsContains)}]//${HtmlHelper
            .xpathExpressions.followingSibling}::${HtmlHelper.tags.input}[${ComponentHelpers
            .getXPathFunctionForId(id, idIsContains)}]`;
    }
    public static getXpathForInputFollowingSiblingByLabel(
        label: string,
        isContains = false) {
        const modelPopupXpath = ``;
        const labelXpath = `//${HtmlHelper.tags.label}[${ComponentHelpers
            .getXPathFunctionForDot(label, isContains)}]`;
        const followingInputXpath = `//${HtmlHelper.xpathExpressions.followingSibling}`
            + `::${HtmlHelper.tags.input}`;
        return `${modelPopupXpath}${labelXpath}${followingInputXpath}`;
    }

    public static getInputByPlaceholderXpath(
        placeholder: string, isContains = false) {
        const modelPopupXpath = ``;
        const inputByPlaceholderXpath = `//${HtmlHelper.tags.input}[${ComponentHelpers
            .getXPathFunctionForPlaceholder(placeholder, isContains)}]`;
        return `${modelPopupXpath}${inputByPlaceholderXpath}`;
    }

    public static getTextAreaByTitleXpath(titleValue: string, isContains = false) {
        return `//${HtmlHelper.tags.textarea}[${ComponentHelpers.getXPathFunctionForTitle(titleValue, isContains)}]`;
    }

    public static getTextAreaByTextXpath(text: string, isContains = false) {
        return `//${HtmlHelper.tags.textarea}[${ComponentHelpers.getXPathFunctionForText(text, isContains)}]`;
    }
}
