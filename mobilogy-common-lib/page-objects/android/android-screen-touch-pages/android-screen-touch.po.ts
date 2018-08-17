import {By, element} from 'protractor';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidScreenTouchPage {
    static get iTouchImage() {
        return element(By.xpath(AndroidComponentHelpers.getTypeImageViewByResouceId('finger_image', true)));
    }
}
