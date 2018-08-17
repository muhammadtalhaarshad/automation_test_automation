import { By, element } from 'protractor';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";
import { IPhoneCameraConstants } from './iphone-camera-page.constants';

export class IPhoneCameraPage {
    static get rareCameraText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(
            IPhoneCameraConstants.rareCameraText)));
    }

    static get startCameraTestButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameXPath(IPhoneCameraConstants.startText)));
    }

    static get takePictureButton() {
        return element(By.xpath(IphoneComponentHelpers.getTypeButtonByNameIndexOne(IPhoneCameraConstants.clickPictureButton)));
    }

    static get didCameraTakePicText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCameraConstants.didCameraTakePictureText)));
    }

    static get frontCameraText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneCameraConstants.frontCameraText)));
    }
}
