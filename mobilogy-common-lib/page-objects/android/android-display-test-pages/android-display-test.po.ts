import { By, element } from 'protractor';
import { AndroidCommonPageConstants } from '../android-common-pages/android-common-page.constants';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidDisplayTestPage {
    static get displayTestText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidCommonPageConstants.displayTestText)));
    }

    static get pixelTestScreen() {
        return element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeRelativeLayout));
    }

}
