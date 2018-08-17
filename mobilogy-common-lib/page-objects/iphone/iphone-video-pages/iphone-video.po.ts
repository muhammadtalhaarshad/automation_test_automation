import { By, element } from 'protractor';
import { IPhoneVideoConstants } from './iphone-video-page.constants';
import {IphoneComponentHelpers} from "../../../components/devfactory/component-helpers/iphone-component-helpers";

export class IPhoneVideoPage {
    static get videoTestText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneVideoConstants.videoTestText)));
    }

    static get didVideoPlayAsExpectedText() {
        return element(By.xpath(IphoneComponentHelpers.getStaticTextByNameXPath(IPhoneVideoConstants.didVideoPlayAsExpectedText)));
    }
}
