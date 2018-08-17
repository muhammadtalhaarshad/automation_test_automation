import {By, element} from 'protractor';
import {AndroidCommonPageConstants} from './android-common-page.constants';
import {HtmlHelper} from '../../../components/misc-utils/html-helper';
import {AndroidComponentHelpers} from "../../../components/devfactory/component-helpers/android-component-helpers";
import {PageHelper} from "../../../components/html/page-helper";

export class AndroidCommonPage {

    static get buttonSelector() {
        return {
            start: element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeImageButton)),
            allow: element(By.xpath(AndroidComponentHelpers.getTypeWidgetButtonByResouceId('com.android.packageinstaller:id/permission_allow_button'))),
            pass: element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId('positive_button', true))),
            fail: element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId('negative_button', true))),
            run: element(By.xpath(AndroidComponentHelpers.elementXpath.getTypeImageButton)),
            continue: element(By.xpath(`//${HtmlHelper.androidXpathAttributes.typeViewGroup}
        /${HtmlHelper.androidXpathAttributes.typeFrameLayout}/${HtmlHelper.androidXpathAttributes.typeImageButton}`)),
            showPassword: element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId('text_input_password_toggle', true))),
            login: element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId('authentication_button', true))),
            next: element(By.xpath(AndroidComponentHelpers.getTypeImageButtonByResouceId('next_button', true))),
            back: (element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyBackButtonHelpProCareStg, true))))//created by MUHAMMAD talha arshad
        };
    }

  //findElementsByXPath("//android.view.View[@index ='1']").get(1).getAttribute("name");



    static get urlSelector() {
        return {
            privacyProCare :(element(By.xpath('//android.widget.TextView[@index = "3"]'))), 
            //eulaProcare: back: (element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyBackButtonHelpProCareStg)))),
            helpProcare : (element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId(AndroidCommonPageConstants.mobilogyHelpTextReourceIdProCareStg, true))))
        };
//(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByText(AndroidCommonPageConstants.mobilogyWrongPasscodeMsgTextProcare)))
//'/android.widget.TextView[7]'
    }

    static get appPermissions() {
        return {
            managePhoneCalls: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
                AndroidCommonPageConstants.appPermissions.managePhoneCalls))),
            viewSendSms: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
                AndroidCommonPageConstants.appPermissions.viewSendSms))),
            accessContacts: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
                AndroidCommonPageConstants.appPermissions.accessContacts))),
            accessCalendar: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
                AndroidCommonPageConstants.appPermissions.accessCalendar))),
            accessMedia: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
                AndroidCommonPageConstants.appPermissions.accessMedia)))
        };
    }

    static get getScreenLabels() {
        return {
            myDeviceScreen:
                {
                    phoneImage: element(By.xpath(AndroidComponentHelpers.getTypeImageViewByResouceId('device_info_image', true))),
                    title: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(
                        AndroidCommonPageConstants.screenLabels.myDeviceScreen.title))),
                    model: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId('device_info_subdescription', true))),
                    os: element(By.xpath(AndroidComponentHelpers.getTypeTextViewByIndexXPath(PageHelper.index.zero))),
                    firmware: element(By.xpath(AndroidComponentHelpers.getTypeTextViewByIndexXPath(PageHelper.index.one))),
                    deviceId: element(By.xpath(AndroidComponentHelpers.getTypeTextViewByIndexXPath(PageHelper.index.two)))
                }
        };
    }
}
