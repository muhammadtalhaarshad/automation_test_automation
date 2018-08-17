import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { browser } from 'protractor';
import { AndroidLoginPageHelper } from '../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper';
import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import { AndroidCommonPageConstants } from "../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common-page.constants";

describe(SuiteNames.mobHealthCheck, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Open Transfer App and verify login screen. - [15955742]', async () => {
        stepLogger.caseId = 15955742;

        // #1 #2 #3 #4 Handled in pre-setup
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateAppTransferApp(stepLogger);
        await AndroidLoginPageHelper.verifyLoginScreen(stepLogger, AndroidCommonPageConstants.pageTitles.transferApp);
     
    });
});








