import { SuiteNames } from '../../../../../mobilogy-common-lib/helpers/suit-names';
import { browser } from 'protractor';
import { StepLogger } from '../../../../../mobilogy-common-lib/core/logger/step-logger';

// tslint:disable-next-line:max-line-length
import { IPhoneLoginPageHelper } from '../../../../../mobilogy-common-lib/page-objects/iphone/iphone-login-pages/iphone-login-page.helper';

describe(SuiteNames.mobSmokeTestSuite, () => {
    browser.waitForAngularEnabled(false);
    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });

    it('Log into Transfer App in iOS devices using the correct authentication code - [14048246]', async () => {
        stepLogger.caseId = 14048246;

        stepLogger.stepId(1);
        await IPhoneLoginPageHelper.openTransferApp(stepLogger);
        await IPhoneLoginPageHelper.verifyTransferAppLoginScreenElements(stepLogger);

        stepLogger.stepId(2);
        await IPhoneLoginPageHelper.enterActivationCode(stepLogger);
        await IPhoneLoginPageHelper.verifyActivationCodeEntered(stepLogger);

        stepLogger.stepId(3);
        await IPhoneLoginPageHelper.clickOnEyeIcon(stepLogger);
        await IPhoneLoginPageHelper.verifyCodeIsVisible(stepLogger);

        stepLogger.stepId(4);
        await IPhoneLoginPageHelper.clickOnLoginButton(stepLogger);
        await IPhoneLoginPageHelper.verifyCalendarAccessPopupAppears(stepLogger);

        stepLogger.stepId(5);
        await IPhoneLoginPageHelper.giveAccessToCalendar(stepLogger);
        await IPhoneLoginPageHelper.verifyContactsAccessPopupAppears(stepLogger);

        stepLogger.stepId(6);
        await IPhoneLoginPageHelper.giveAccessToContacts(stepLogger);
        await IPhoneLoginPageHelper.verifyPhotosAccessPopupAppears(stepLogger);

        stepLogger.stepId(7);
        await IPhoneLoginPageHelper.giveAccessToPhotos(stepLogger);
        await IPhoneLoginPageHelper.verifySourceTargetScreen(stepLogger);
    });
});
