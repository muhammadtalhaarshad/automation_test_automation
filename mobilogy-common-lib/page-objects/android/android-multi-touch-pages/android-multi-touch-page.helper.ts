import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { AndroidMultiTouchPage } from './android-multi-touch.po';
import { AndroidMultiTouchConstants } from './android-multi-touch-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";

export class AndroidMultiTouchPageHelper {
    static async verifyMutiTouchScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Multi touch screen is encountered`);
        await expect(await PageHelper.isElementDisplayed(AndroidMultiTouchPage.mutiTouchScreen))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidMultiTouchConstants.multiTouchText));
    }

    static async verifyMutiTouchScreenDisplayFailure(stepLogger: StepLogger) {
        stepLogger.step('On mobile app -> Screen Touch Test starts automatically once the previous Pixelation test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await this.verifyMutiTouchScreenDisplay(stepLogger)
    }
}
