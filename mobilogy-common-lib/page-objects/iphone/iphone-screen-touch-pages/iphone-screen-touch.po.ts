import { By, element } from 'protractor';
import { IPhoneScreenTouchConstants } from './iphone-screen-touch-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneScreenTouchPage {
    static get iTouchImage() {
        return element(By.xpath(IphoneComponentHelpers.getTypeImageByNameXPath(
            IPhoneScreenTouchConstants.iTouchImageText)));
        }
}
