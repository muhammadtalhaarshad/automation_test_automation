import { ComponentHelpersFactory } from '@aurea/protractor-automation-helper';
import { HtmlHelper } from '../../misc-utils/html-helper';

export class ComponentHelpers extends ComponentHelpersFactory {
    public static getXPathFunctionForClass(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.class}`, isContains);
    }

    public static getXPathFunctionForId(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.id}`, isContains);
    }

    public static getXPathFunctionForType(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.type}`, isContains);
    }

    public static getXPathFunctionForAlt(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.alt}`, isContains);
    }

    public static getXPathFunctionForName(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.name}`, isContains);
    }

    public static getXPathFunctionForDatatip(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.dataTip}`, isContains);
    }

    public static getXPathFunctionForRole(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.role}`, isContains);
    }

    public static getXPathFunctionForAriaLabelledBy(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.ariaLabelledBy}`, isContains);
    }

    public static getXPathFunctionForDatafor(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.dataFor}`, isContains);
    }

    public static getXPathFunctionForDfTableId(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.dfTableId}`, isContains);
    }

    public static getXPathFunctionForDataHeader(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.dataHeader}`, isContains);
    }

    public static getXPathFunctionForTitle(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.title}`, isContains);
    }

    public static getXPathFunctionForPlaceholder(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.placeholder}`, isContains);
    }

    public static getXPathFunctionForStyle(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.attributes.style}`, isContains);
    }

    public static getXPathFunctionForCustomText(attributeValue: string, isContains = false) {
        return ComponentHelpersFactory.getXPathFunctionForStringComparison(
            attributeValue, `@${HtmlHelper.extraAttributes.text}`, isContains);
    }
}
