import {By, element} from 'protractor';
import {AndroidCameraConstants} from './android-camera-page.constants';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidCameraPage {
    static get rareCameraText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
            AndroidCameraConstants.rareCameraText)));
    }

    static get startCameraTestButton() {
        return element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeImageButton));
    }

    static get takePictureButton() {
        return element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeImageButton));
    }

    static get didCameraTakePicText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidCameraConstants.didCameraTakePictureText)));
    }

    static get frontCameraText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidCameraConstants.frontCameraText)));
    }
}
