import {ComponentHelpersFactory} from '@aurea/protractor-automation-helper';
import {HtmlHelper} from "../../misc-utils/html-helper";
import {MobileComponentSelectors} from "../component-types/mobile-component/mobile-component-selectors";

export class AndroidComponentHelpers extends ComponentHelpersFactory {

    public static getTypeEditTextXPathByLabel(label: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeText(
            HtmlHelper.androidXpathAttributes.typeEditText, label, isContains);
    }

    public static getTypeTextViewXPathByLabel(label: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeText(
            HtmlHelper.androidXpathAttributes.typeTextView, label, isContains);
    }

    public static getTypeTextViewByIndexXPath(index: string) {
        return MobileComponentSelectors.getElementXpathByAttributeIndex(
            HtmlHelper.androidXpathAttributes.typeTextView, index);
    }

    public static getTypeImageViewXPathLabel(label: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeText(
            HtmlHelper.androidXpathAttributes.typeImageView, label, isContains);
    }

    public static getTypeWidgetButtonByLabel(label: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeText(
            HtmlHelper.androidXpathAttributes.typeWidgetButton, label, isContains);
    }

    public static getTypeImageButtonByIndexXPath(index: string) {
        return MobileComponentSelectors.getElementXpathByAttributeIndex(
            HtmlHelper.androidXpathAttributes.typeImageButton, index);
    }

    public static getTypeWidgetButtonByResouceId(resourceId: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeResourceId(
            HtmlHelper.androidXpathAttributes.typeWidgetButton, resourceId, isContains);
    }
    public static getTypeImageButtonByResouceId(resourceId: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeResourceId(
            HtmlHelper.androidXpathAttributes.typeImageButton, resourceId, isContains);
    }

    public static getTypeImageViewByResouceId(resourceId: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeResourceId(
            HtmlHelper.androidXpathAttributes.typeImageView, resourceId, isContains);
    }

    public static getTypeImageViewByIndexXPath(index: string) {
        return MobileComponentSelectors.getElementXpathByAttributeIndex(
            HtmlHelper.androidXpathAttributes.typeImageView, index);
    }

    public static getTypeTextViewXPathByResouceId(label: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeResourceId(
            HtmlHelper.androidXpathAttributes.typeTextView, label, isContains);
    }

    public static getTypeTextViewXPathByText(label: string, isContains = false) {
        return MobileComponentSelectors.getElementXpathByAttributeText(
            HtmlHelper.androidXpathAttributes.typeTextView, label, isContains);
    }

    public static getTypeRecycleViewLinearLayoutView(index: string) {
        return MobileComponentSelectors.getXpathConcat(this.elementXpath.getRecyclerView,
            MobileComponentSelectors.getElementXpathByAttributeIndexSuffix(
                HtmlHelper.androidXpathAttributes.typeLinearLayout, index));
    }


    public static get elementXpath() {
        return {
            getTypeTextView: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeTextView),
            getTypeRelativeLayout: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeRelativeLayout),
            getTypeViewGroup: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeViewGroup),
            getTypeEditText: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeEditText),
            getTypeWidget: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeWidgetButton),
            getTypeImageButton: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeImageButton),
            getRecyclerView: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeRecyclerView),
            getLinearLayout: MobileComponentSelectors.getXpath(HtmlHelper.androidXpathAttributes.typeLinearLayout)
        }
    }
}
