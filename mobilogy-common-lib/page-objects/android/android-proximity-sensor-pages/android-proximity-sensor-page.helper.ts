import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageValidations } from '../../common/common-page.validations';
import { AndroidProximitySensorPage } from './android-proximity-sensor.po';
import { AndroidProximitySensorConstants } from './android-proximity-sensor-page.constants';
import { StepLogger } from "../../../core/logger/step-logger";


export class AndroidProximitySensorPageHelper {

    static async verifyProximitySensorScreenDisplay(stepLogger: StepLogger) {
        stepLogger.verification(`Navigation moves automatically to Proximity Sensor Test.`);
        await expect(await PageHelper.isElementDisplayed(AndroidProximitySensorPage.proximitySensorText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidProximitySensorConstants.proximitySensotText));
    }

    static async verifyProximitySensorScreenDisplayFailure(stepLogger: StepLogger) {
        stepLogger.step('On the mobile app -> Motion Sensor Test starts automatically once the previous MultiTouch test gets completed.');
        stepLogger.step('Dont complete the test within 30 seconds.');
        await expect(await PageHelper.isElementDisplayed(AndroidProximitySensorPage.proximitySensorText))
            .toBe(true, CommonPageValidations.getFieldDisplayedValidation(AndroidProximitySensorConstants.proximitySensotText));
    }
}
