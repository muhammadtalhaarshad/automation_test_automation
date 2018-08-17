import { browser } from 'protractor';
import {SuiteNames} from "../../../../../mobilogy-common-lib/helpers/suit-names";
import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
import {IPhoneCommonPageHelper} from "../../../../../mobilogy-common-lib/page-objects/iphone/iphone-common-pages/iphone-common-page.helper";
import {IPhoneLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/iphone/iphone-login-pages/iphone-login-page.helper";


describe(SuiteNames.mobHealthCheck, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Open Online Diagnostics App and verify login screen. - [15955750]', async () => {
        stepLogger.caseId = 15955750;

        stepLogger.stepId(1);
        await IPhoneCommonPageHelper.openApp(stepLogger);
        await IPhoneLoginPageHelper.verifyDiagnosticsAppLoginScreenElements(stepLogger);

    });

});
