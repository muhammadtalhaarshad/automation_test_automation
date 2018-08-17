import { By, element } from 'protractor';
import { AndroidVideoConstants } from './android-video-page.constants';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";

export class AndroidVideoPage {
    static get videoTestText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(AndroidVideoConstants.videoTestText)));
    }

    static get didVideoPlayAsExpectedText() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
            AndroidVideoConstants.didVideoPlayAsExpectedText)));
    }
}
