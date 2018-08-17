import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { browser } from 'protractor';

// tslint:disable-next-line:max-line-length
import { AndroidLoginPageHelper } from '../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper';
import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import { AndroidCommonPageConstants } from "../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common-page.constants";
import {CommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/common/common-page-constants";

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Log into Transfer app in Android devices using the correct authentication code - [14015237]', async () => {
        stepLogger.caseId = 14015237;

        // #1
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateAppTransferApp(stepLogger);
        await AndroidLoginPageHelper.verifyLoginScreen(stepLogger, AndroidCommonPageConstants.pageTitles.transferApp);

        // #2
        stepLogger.stepId(2);
        await AndroidLoginPageHelper.enterActivationCode(stepLogger, CommonPageConstants.passcodeTransferApp);
        await AndroidLoginPageHelper.verifyMaskedPassword(stepLogger);

        // #3
        stepLogger.stepId(3);
        await AndroidLoginPageHelper.clickOnShowPasswordButton(stepLogger);
        await AndroidLoginPageHelper.verifyShowPassword(stepLogger, CommonPageConstants.passcodeTransferApp);

        // #4
        stepLogger.stepId(4);
        await AndroidLoginPageHelper.clickOnLoginButton(stepLogger);
        await AndroidLoginPageHelper.verifyPostLoginScreenTransferApp(stepLogger);
    });
});
