import { By, element } from 'protractor';
import { IPhoneMultiTouchConstants } from './iphone-multi-touch-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneMultiTouchPage {
    static get mutiTouchText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneMultiTouchConstants.multiTouchText)));
    }
}
