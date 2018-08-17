import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { AndroidSessionEndPage } from './android-session-end.po';
import { AndroidSessionEndConstants } from './android-session-end.constants';
import { StepLogger } from "../../../core/logger/step-logger";

export class AndroidSessionEndPageHelper {
    static async verifySessionEndedScreen(stepLogger: StepLogger) {
        stepLogger.verification(`The session should end successfully.`);
        await expect(await PageHelper.isElementDisplayed(AndroidSessionEndPage.buyBackCodeText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidSessionEndConstants.buyBackCodeText));
    }

    static async verifyLabelByText(stepLogger: StepLogger, label: string) {
        stepLogger.verification(`${label} should be displayed.`);
        await expect(await PageHelper.isElementDisplayed(AndroidSessionEndPage.verifySessionEndLabels(label), true))
            .toBe(true, CommonPageValidations.getDisplayedValidation(label));
    }

    static async verifySessionEndedScreenElements(stepLogger: StepLogger) {
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.title);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.batteryTest);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.factoryReset);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.os);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.deviceId);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.cosmeticCondition);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.carrierLock);

        // Enable verification when scrolling issues is fixed from framework
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.rooted);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.storageCapacity);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.operator);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.displayTest);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.screenTouchTest);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.multiTouchTest);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.motionSensor);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.proximitySensor);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.rearCameraSensor);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.frontCameraTest);
        // await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.videoTest);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.checkAgain);
        await this.verifyLabelByText(stepLogger, AndroidSessionEndConstants.screenLabels.sessionEnd.exit);
    }
}
