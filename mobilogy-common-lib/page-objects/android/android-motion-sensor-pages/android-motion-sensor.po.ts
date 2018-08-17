import { By, element } from 'protractor';
import { AndroidMotionSensorConstants } from './android-motion-sensor-page.constants';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidMotionSensorPage {
    static get motionSensorText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
            AndroidMotionSensorConstants.motionSensorText)));
    }
}
