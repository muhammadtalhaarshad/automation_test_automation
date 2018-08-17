import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { IPhoneMotionSensorPage } from './iphone-motion-sensor.po';
import { IPhoneMotionSensorConstants } from './iphone-motion-sensor-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";
import { IPhoneCommonPageHelper } from "../iphone-common-pages/iphone-common-page.helper";

export class IPhoneMotionSensorPageHelper {
    static async verifyMotionSensorScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves automatically to Motion Sensor Test.`);
        await expect(await PageHelper.isElementDisplayed(IPhoneMotionSensorPage.motionSensorText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(IPhoneMotionSensorConstants.motionSensorText));
    }

    static async failMotionSensorTest(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app ->Motion Sensor Test starts automatically once the previous Multi Touch test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await IPhoneCommonPageHelper.waitFor30SecTimeout();

    }

}
