import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { IPhoneScreenTouchPage } from './iphone-screen-touch.po';
import { IPhoneScreenTouchConstants } from './iphone-screen-touch-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";
import { IPhoneCommonPageHelper } from "../iphone-common-pages/iphone-common-page.helper";

export class IPhoneScreenTouchPageHelper {
    static async verifyScreenTouchScreenDisplay() {
        await expect(await PageHelper.isElementDisplayed(IPhoneScreenTouchPage.iTouchImage))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneScreenTouchConstants.iTouchImageText));
    }

    static async failScreenTouchTest(stepLogger: StepLogger) {
        stepLogger.step('On mobile app -> Screen Touch Test starts automatically once the previous Pixelation test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await IPhoneCommonPageHelper.waitFor30SecTimeout();

    }

}
