import { By, element } from 'protractor';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidMultiTouchPage {

    static get mutiTouchScreen() {
        return element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeViewGroup));
    }
}
