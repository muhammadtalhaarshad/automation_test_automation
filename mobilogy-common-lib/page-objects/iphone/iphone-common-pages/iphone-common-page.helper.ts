import {PageHelper} from '../../../components/html/page-helper';
import {IPhoneCommonPage} from './iphone-common.po';
import {TextboxHelper} from '../../../components/html/textbox-helper';
import {WaitHelper} from '../../../components/html/wait-helper';
import {CommonPageConstants} from "../../common/common-page-constants";
import {StepLogger} from "../../../core/logger/step-logger";

export class IPhoneCommonPageHelper {
    // Login Page Methods

    static async openApp(stepLogger: StepLogger) {
        stepLogger.step('Open Diagnostics app');
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.welcomeToDiagnosticsText);
        await PageHelper.click(IPhoneCommonPage.welcomeToDiagnosticsText);
    }

    static async initiateApp() {
        await TextboxHelper.sendKeys(IPhoneCommonPage.enterPasscode, CommonPageConstants.passcodeDiagnosticApp);
        await PageHelper.click(IPhoneCommonPage.welcomeToDiagnosticsText);
        await PageHelper.click(IPhoneCommonPage.loginButton);
        await WaitHelper.getInstance().waitForElementToBeDisplayed(IPhoneCommonPage.myDeviceText);
        await PageHelper.click(IPhoneCommonPage.startTestButton);
        await PageHelper.click(IPhoneCommonPage.excellentDeviceText);
        await PageHelper.click(IPhoneCommonPage.startTestButton);
        await PageHelper.click(IPhoneCommonPage.unlockedText);
        await PageHelper.click(IPhoneCommonPage.startTestButton);
        await PageHelper.sleepForXSecond(PageHelper.timeout.xl);
    }

    static async waitFor30SecTimeout() {
        await PageHelper.sleepForXSecond(PageHelper.timeout.l + PageHelper.timeout.s);
    }
}
