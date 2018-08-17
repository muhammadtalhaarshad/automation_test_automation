import { PageHelper } from '../../../components/html/page-helper';
import { IPhoneSessionEndConstants } from './iphone-session-end.constants';
import { IPhoneSessionEndPage } from './iphone-session-end.po';
import { CommonPageValidations } from '../../common/common-page.validations';
import { StepLogger } from '../../../core/logger/step-logger';

export class IPhoneSessionEndPageHelper {
    static async verifySessionEndedScreen(stepLogger: StepLogger) {
        stepLogger.verification(`The session should end successfully.`);
        await expect(await PageHelper.isElementDisplayed(IPhoneSessionEndPage.buyBackCodeText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneSessionEndConstants.buyBackCodeText));
    }
}
