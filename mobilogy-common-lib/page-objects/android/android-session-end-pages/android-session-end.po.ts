import { By, element } from 'protractor';
import { AndroidSessionEndConstants } from './android-session-end.constants';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidSessionEndPage {

    static get buyBackCodeText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidSessionEndConstants.buyBackCodeText)));
    }

    static verifySessionEndLabels(label: string) {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(label)));
    }
}
