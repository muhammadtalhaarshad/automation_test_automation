import { browser } from 'protractor';
import {SuiteNames} from "../../../../../mobilogy-common-lib/helpers/suit-names";
import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
import {IPhoneLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/iphone/iphone-login-pages/iphone-login-page.helper";


describe(SuiteNames.mobHealthCheck, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it ('Open Transfer App and Verify login screen. - [15955729]', async()=>{
        stepLogger.caseId = 15955729;

        IPhoneLoginPageHelper.openTransferApp(stepLogger);
        IPhoneLoginPageHelper.verifyTransferAppLoginScreenElements(stepLogger);

    });






});
