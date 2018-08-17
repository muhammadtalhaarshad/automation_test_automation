import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { IPhoneMultiTouchPage } from './iphone-multi-touch.po';
import { IPhoneMultiTouchConstants } from './iphone-multi-touch-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";
import { IPhoneCommonPageHelper } from "../iphone-common-pages/iphone-common-page.helper";

export class IPhoneMultiTouchPageHelper {
    static async verifyMutiTouchScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`The multi-touch test starts automatically.`);

        await expect(await PageHelper.isElementDisplayed(IPhoneMultiTouchPage.mutiTouchText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneMultiTouchConstants.multiTouchText));
    }

    static async failMultiTouchTest(stepLogger: StepLogger) {
        stepLogger.step('On mobile app -> multi-touch test starts automatically once the previous Screen Touch test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await IPhoneCommonPageHelper.waitFor30SecTimeout();

    }

}
