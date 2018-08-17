import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { AndroidMotionSensorPage } from './android-motion-sensor.po';
import { AndroidMotionSensorConstants } from './android-motion-sensor-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";

export class AndroidMotionSensorPageHelper {
    static async verifyMotionSensorScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves automatically to Motion Sensor Test.`);
        await expect(await PageHelper.isElementDisplayed(AndroidMotionSensorPage.motionSensorText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidMotionSensorConstants.motionSensorText));
    }

    static async verifyMotionSensorScreenDisplayFailure(stepLogger: StepLogger) {
        stepLogger.step('On mobile app -> multi-touch test starts automatically once the previous Screen Touch test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await this.verifyMotionSensorScreenDisplay(stepLogger);
    }
}
