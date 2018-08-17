import { By, element } from 'protractor';
import { IPhoneCommonPageConstants } from '../iphone-common-pages/iphone-common-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneDisplayTestPage {
    static get displayTestText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCommonPageConstants.displayTestText)));
    }

    static get pixelTestScreen() {
        return element(By.xpath(IphoneComponentHelpers.getTypeApplicationByNameTypeWindowIndexOne(
            IPhoneCommonPageConstants.diagnosticTextStaging)));
    }

}
