import { By, element } from 'protractor';
import { IPhoneSessionEndConstants } from './iphone-session-end.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneSessionEndPage {

    static get buyBackCodeText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneSessionEndConstants.buyBackCodeText)));
    }
}
