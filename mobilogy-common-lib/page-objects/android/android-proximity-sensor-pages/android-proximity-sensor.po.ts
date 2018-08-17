import {By, element} from 'protractor';
import {AndroidProximitySensorConstants} from './android-proximity-sensor-page.constants';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidProximitySensorPage {
    static get proximitySensorText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
            AndroidProximitySensorConstants.proximitySensotText)));
    }
}
