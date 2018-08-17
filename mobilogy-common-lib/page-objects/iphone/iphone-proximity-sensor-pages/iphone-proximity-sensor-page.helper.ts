import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { IPhoneProximitySensorPage } from './iphone-proximity-sensor.po';
import { IPhoneProximitySensorConstants } from './iphone-proximity-sensor-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";
import { IPhoneCommonPageHelper } from "../iphone-common-pages/iphone-common-page.helper";

export class IPhoneProximitySensorPageHelper {

    static async verifyProximitySensorScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves automatically to Proximity Sensor Test.`);

        await expect(await PageHelper.isElementDisplayed(IPhoneProximitySensorPage.proximitySensorText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneProximitySensorConstants.proximitySensotText));
    }

    static async failProximitySensorTest(stepLogger: StepLogger) {
        stepLogger.step(
            'On the mobile app ->Proxinity Sensor Test starts automatically once the previous Motion Sensor test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await IPhoneCommonPageHelper.waitFor30SecTimeout();

    }
}
