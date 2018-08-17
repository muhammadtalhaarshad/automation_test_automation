import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
import {CommonPageValidations} from "../../../../../mobilogy-common-lib/page-objects/common/common-page.validations";
import {PageHelper} from "../../../../../mobilogy-common-lib/components/html/page-helper";
import {AndroidProCareMyDevicePage} from "./android-procare-app-mydevice-page.po";
import {AndroidProcareAppMydevicePageConstant} from "./android-procare-app-mydevice-page.constant";
// tslint:disable-next-line:max-line-length
import {AndroidCommonPage} from "../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common.po";

export class AndroidProCareMyDevicePageHelper {

    static async verifyCosmeticConditionScreen(stepLogger: StepLogger) {
        stepLogger.verification(`"Cosmetic condition" screen is displayed with below options: `);
        stepLogger.subVerification(`Excellent label is displayed`);
        await expect(await PageHelper.isElementDisplayed(
            AndroidProCareMyDevicePage.getElements.cosmeticCondition.labels.excellent, true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(
                AndroidProcareAppMydevicePageConstant.screenLabels.cosmeticCondition.excellent));
        stepLogger.subVerification(`Good label is displayed`);
        await expect(await PageHelper.isElementDisplayed(
            AndroidProCareMyDevicePage.getElements.cosmeticCondition.labels.good, true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(
                AndroidProcareAppMydevicePageConstant.screenLabels.cosmeticCondition.good));
        stepLogger.subVerification(`Damaged label is displayed`);
        await expect(await PageHelper.isElementDisplayed(
            AndroidProCareMyDevicePage.getElements.cosmeticCondition.labels.damaged, true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(
                AndroidProcareAppMydevicePageConstant.screenLabels.cosmeticCondition.damaged));
    }

    static async clickExcellent(stepLogger: StepLogger) {
        stepLogger.step(`Click on "Excellent" link and next`);
        await PageHelper.click(AndroidProCareMyDevicePage.getElements.cosmeticCondition.navigations.excellent);
        await PageHelper.click(AndroidCommonPage.buttonSelector.next);
    }

    static async verifyLockStatusScreen(stepLogger: StepLogger) {
        stepLogger.verification(`"Locked status" screen is displayed with below options:`);
        stepLogger.subVerification(`Lock status label is displayed`);
        const prefixElement = AndroidProCareMyDevicePage.getElements.lockStatus.labels;
        const prefixLabel = AndroidProcareAppMydevicePageConstant.screenLabels.lockStatus;
        await expect(await PageHelper.isElementDisplayed(prefixElement.pageTitle, true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(prefixLabel.pageTitle));
        stepLogger.subVerification(`Locked label is displayed`);
        await expect(await PageHelper.isElementDisplayed(prefixElement.locked, true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(prefixLabel.unlocked));
        stepLogger.subVerification(`Unlocked label is displayed`);
        await expect(await PageHelper.isElementDisplayed(prefixElement.unlocked, true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(prefixLabel.unlocked));
    }

    static async clickLocked(stepLogger: StepLogger) {
        stepLogger.step(`Click on "Locked" link and next`);
        await PageHelper.click(AndroidProCareMyDevicePage.getElements.lockStatus.navigations.locked);
        await PageHelper.click(AndroidCommonPage.buttonSelector.next);
    }

    static async verifyTestingScreen(stepLogger: StepLogger) {
        stepLogger.verification(`"Testing" screen is displayed for below types one after the other: 
            Root info, Storage info, Connectivity info, Battery info, Network info, Factory Reset Protection info`);
        const prefixLabel = AndroidProcareAppMydevicePageConstant.screenLabels.testingScreen;
        await expect(await PageHelper.getText(AndroidProCareMyDevicePage.getTestingScreenTitles))
            .toContain(prefixLabel.rootInfo, CommonPageValidations.getDisplayedValidation(prefixLabel.rootInfo));
    }
}