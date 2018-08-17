import { browser } from 'protractor';
import {SuiteNames} from "../../../../../mobilogy-common-lib/helpers/suit-names";
import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
import {AndroidLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper";
import {AndroidCommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common-page.constants";

describe(SuiteNames.mobHealthCheck, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Open Online Diagnostics App and verify login screen - [15955750]', async () => {
        stepLogger.caseId = 15955750;

        stepLogger.stepId(1);
        await AndroidLoginPageHelper.openDiagnosticApp(stepLogger);
        await AndroidLoginPageHelper.verifyLoginScreenForDiagnosticsApp(stepLogger, AndroidCommonPageConstants.pageTitles.diagnosticsApp)
    });
});
