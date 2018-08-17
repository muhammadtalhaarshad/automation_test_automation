import { browser } from 'protractor';
import {SuiteNames} from "../../../../../mobilogy-common-lib/helpers/suit-names";
import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
import {IPhoneProcareAppLoginPageHelper} from "../../../page-objects/iphone/iphone-procare-app-login-pages/iphone-procare-app-login-page.helper";


describe(SuiteNames.mobHealthCheck, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Install Buyback app in an iOS device  - [15955733]', async () => {
        stepLogger.caseId = 15955733;

        stepLogger.stepId(1);
        await IPhoneProcareAppLoginPageHelper.initiateApp(stepLogger);
        await IPhoneProcareAppLoginPageHelper.verifyLoginScreen(stepLogger);

    });

});
