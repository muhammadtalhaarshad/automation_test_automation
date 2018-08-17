import { By, element } from 'protractor';
import { IPhoneProximitySensorConstants } from './iphone-proximity-sensor-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneProximitySensorPage {
    static get proximitySensorText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneProximitySensorConstants.proximitySensotText)));
    }
}
