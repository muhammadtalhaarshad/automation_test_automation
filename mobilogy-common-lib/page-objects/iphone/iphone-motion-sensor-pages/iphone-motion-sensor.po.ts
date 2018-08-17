import { By, element } from 'protractor';
import { IPhoneMotionSensorConstants } from './iphone-motion-sensor-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneMotionSensorPage {
    static get motionSensorText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneMotionSensorConstants.motionSensorText)));
    }
}
