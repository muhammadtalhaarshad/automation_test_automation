import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { browser } from 'protractor';
import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';
import {IPhoneProcareAppLoginPageHelper} from "../../../page-objects/iphone/iphone-procare-app-login-pages/iphone-procare-app-login-page.helper";
import {CommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/common/common-page-constants";

// tslint:disable-next-line:max-line-length


describe(SuiteNames.regressionTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Try to Log into Buyback app in iOS device using incorrect authentication code - [14136941]', async () => {
        stepLogger.caseId = 14136941;
        stepLogger.stepId(1);
        await IPhoneProcareAppLoginPageHelper.initiateApp(stepLogger);
        await IPhoneProcareAppLoginPageHelper.verifyLoginScreen(stepLogger);

        stepLogger.stepId(2);
        await IPhoneProcareAppLoginPageHelper.enterActivationCode(stepLogger, CommonPageConstants.IncorrectpasscodeProcareApp);
        await IPhoneProcareAppLoginPageHelper.verifyContinueButtonEnabled(stepLogger);

        stepLogger.stepId(3);
        await IPhoneProcareAppLoginPageHelper.clickOnLoginButton(stepLogger);
        await IPhoneProcareAppLoginPageHelper.verifyVerificationFailedPopup(stepLogger);
        await IPhoneProcareAppLoginPageHelper.clickOnOkButtonOfVerificationfailed(stepLogger);
    });

    // it('Try to Log into Buyback app in iOS device using incorrect authentication code -maximum attempts allowed - [14136965]', async () => {
    //     stepLogger.caseId = 14136965;
    //
    // });
    //
    // it('View the authentication code entered - [14152318]', async () => {
    //     stepLogger.caseId = 14152318;
    // });
    //
    // it('Try to Log into Buyback app in iOS device using empty authentication code   - [14152324]', async () => {
    //     stepLogger.caseId = 14152324;
    // });


});
