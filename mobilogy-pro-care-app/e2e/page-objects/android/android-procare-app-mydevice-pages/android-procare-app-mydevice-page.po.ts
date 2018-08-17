
import {By, element} from "protractor";
import {PageHelper} from "../../../../../mobilogy-common-lib/components/html/page-helper";
import {AndroidProcareAppMydevicePageConstant} from "./android-procare-app-mydevice-page.constant";
import {AndroidComponentHelpers} from "../../../../../mobilogy-common-lib/components/devfactory/component-helpers/android-component-helpers";

export class AndroidProCareMyDevicePage {

    static get getElements() {
        const prefixCCLabels = AndroidProcareAppMydevicePageConstant.screenLabels.cosmeticCondition;
        const prefixLSLabels = AndroidProcareAppMydevicePageConstant.screenLabels.lockStatus;
        return {
            cosmeticCondition: {
                labels:
                    {
                        excellent: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(prefixCCLabels.excellent))),
                        good: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(prefixCCLabels.good))),
                        damaged: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(prefixCCLabels.damaged)))
                    },
                navigations:
                    {
                        excellent: element(By.xpath(AndroidComponentHelpers.getTypeRecycleViewLinearLayoutView(PageHelper.index.zero))),
                        good: element(By.xpath(AndroidComponentHelpers.getTypeRecycleViewLinearLayoutView(PageHelper.index.one))),
                        damaged: element(By.xpath(AndroidComponentHelpers.getTypeRecycleViewLinearLayoutView(PageHelper.index.two)))
                    }
            },
            lockStatus: {
                labels:
                    {
                        pageTitle: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(prefixLSLabels.pageTitle))),
                        locked: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(prefixLSLabels.locked))),
                        unlocked: element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByLabel(prefixLSLabels.unlocked))),
                    },
                navigations:
                    {
                        locked: element(By.xpath(AndroidComponentHelpers.getTypeRecycleViewLinearLayoutView(PageHelper.index.zero)))
                    }
            }
        };
    }

    static get getTestingScreenTitles() {
        return element(By.xpath(AndroidComponentHelpers.getTypeTextViewXPathByResouceId('title_text', true)));
    }
}
