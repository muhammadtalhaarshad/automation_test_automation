import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { browser } from 'protractor';
// tslint:disable-next-line:max-line-length
import { IPhoneProcareAppLoginPageHelper } from '../../../page-objects/iphone/iphone-procare-app-login-pages/iphone-procare-app-login-page.helper';

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Log into Buyback app in iOS device using the correct authentication code  - [13923387]', async () => {
        stepLogger.caseId = 13923387;
        stepLogger.stepId(1);
        await IPhoneProcareAppLoginPageHelper.initiateApp(stepLogger);
        await IPhoneProcareAppLoginPageHelper.verifyLoginScreen(stepLogger);

        stepLogger.stepId(2);
        await IPhoneProcareAppLoginPageHelper.enterActivationCode(stepLogger);
        await IPhoneProcareAppLoginPageHelper.verifyContinueButtonEnabled(stepLogger);

        stepLogger.stepId(3);
        await IPhoneProcareAppLoginPageHelper.clickOnLoginButton(stepLogger);
        await IPhoneProcareAppLoginPageHelper.verifyMydeviceScreen(stepLogger);

    });

});
