import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { AndroidScreenTouchPage } from './android-screen-touch.po';
import { AndroidScreenTouchConstants } from './android-screen-touch-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";

export class AndroidScreenTouchPageHelper {
    static async verifyScreenTouchScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Screen touch test screen is encountered`);
        await expect(await PageHelper.isElementDisplayed(AndroidScreenTouchPage.iTouchImage))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidScreenTouchConstants.iTouchImageText));
    }
}
