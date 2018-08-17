import { browser } from 'protractor';
import {SuiteNames} from "../../../../../mobilogy-common-lib/helpers/suit-names";
import {StepLogger} from "../../../../../mobilogy-common-lib/core/logger/step-logger";
import {AndroidLoginPageHelper} from "../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login-page.helper";
import {CommonPageConstants} from "../../../../../mobilogy-common-lib/page-objects/common/common-page-constants";
import {AndroidCommonPage} from '../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common.po';
import {PageHelper} from '../../../../../mobilogy-common-lib/components/html/page-helper';
import { AndroidCommonPageConstants } from '../../../../../mobilogy-common-lib/page-objects/android/android-common-pages/android-common-page.constants';
//import { AndroidLoginPage } from '../../../../../mobilogy-common-lib/page-objects/android/android-login-pages/android-login.po';




describe(SuiteNames.mobregressionTestSuite, () => {
    browser.waitForAngularEnabled(false);

    let stepLogger: StepLogger;

    beforeEach(async () => {
        stepLogger = new StepLogger();
    });
    
    xit('Try to Log into Buyback app in Android device using empty authentication code   - [14188257]', async () => {
        stepLogger.caseId = 14188257;

        // #1
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateProcareAppWoPasscode(stepLogger);
       
        // #2
        stepLogger.stepId(2);
        await AndroidLoginPageHelper.enterActivationCode(stepLogger, "");

        // #3
        stepLogger.stepId(3);
        await AndroidLoginPageHelper.checkLoginButtonNotClickable(stepLogger);


});
    xit('View the authentication code entered   - [14174697]', async () => {
        stepLogger.caseId = 14174697;

        // #1
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateProcareAppWoPasscode(stepLogger);
       
        // #2
        stepLogger.stepId(2);
        await AndroidLoginPageHelper.enterActivationCode(stepLogger, CommonPageConstants.passcodeProcareApp);
``
        // #3
        stepLogger.stepId(3);
       await AndroidLoginPageHelper.clickShowPasswordAndVerifyProCare(stepLogger);
    });

//********************************MUHAMMAD talha arshad: My testcase************************************************************ 

   xit('Try to Log into Buyback app in Android device using incorrect authentication code - [14163553]', async () => {
     stepLogger.caseId = 14163553;

        await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.MediumDelayProcare);
        //#1 Open App and verify Login screen
        stepLogger.stepId(1);
        await AndroidLoginPageHelper.initiateAppProcareWrongPasscode(stepLogger);

        //#2 Verify Wrong password message popup
        stepLogger.stepId(2);
        await AndroidLoginPageHelper.verifyWrongPasscodePopup(stepLogger, CommonPageConstants.wrongPasscodeMsgTextProcareApp);

    });

    xit('Try to Log into Buyback app in Android device using incorrect authentication code -maximum attempts allowed - [14174599]', async () => {
    stepLogger.caseId = 14174599;

    //#1 Initiate app and enter wrong passcode - loop in with max number of attempts.

    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.MediumDelayProcare);
    stepLogger.stepId(1);
    for (let i=0; i<CommonPageConstants.wrongPasscodeAttemptsProcareApp-2; i++)
    {            
        if (i===0)
        {
            await PageHelper.click(await AndroidCommonPage.buttonSelector.continue);
            continue;
        }
        else 
        {
            await AndroidLoginPageHelper.addDelay(stepLogger,CommonPageConstants.SmallDelayProcare);
            await PageHelper.click(await AndroidCommonPage.buttonSelector.continue);
        }
    }

    //#2 Click on Continue for the last time and verify wrong passcode popup
    stepLogger.stepId(2);
    await PageHelper.click(AndroidCommonPage.buttonSelector.continue);
    await AndroidLoginPageHelper.verifyWrongPasscodePopup(stepLogger, CommonPageConstants.wrongPasscodeMsgTextProcareApp);

      
    });
    
xit('View help - [14200763]', async () => {
    stepLogger.caseId = 14200763;

    //#1 Initiate app with out click button

    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    stepLogger.stepId(1);
    await AndroidLoginPageHelper.initiateProcareAppWoPasscode(stepLogger); 

    //#2 Click on Help and validate Help page
    stepLogger.stepId(2);
    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    await PageHelper.click(AndroidCommonPage.urlSelector.helpProcare);
    await AndroidLoginPageHelper.verifyHelpProCare(stepLogger);
    
    //#3 Click on back button and validate Login page
    stepLogger.stepId(3);
    await PageHelper.click(AndroidCommonPage.buttonSelector.back);
    await AndroidLoginPageHelper.verifyLoginScreenForProCareAppStg
        (stepLogger,AndroidCommonPageConstants.pageTitles.procareApp);
  
});

/**--------------------------------------------------------------------------------------------------------------------- */

    xit('View Privacy Policy - [14200742]', async () => {
    stepLogger.caseId = 14200742;

    await AndroidLoginPageHelper.addDelay(stepLogger,CommonPageConstants.SmallDelayProcare);
    await AndroidLoginPageHelper.initiateProcareAppWoPasscode(stepLogger); 
    await AndroidLoginPageHelper.verifyLoginScreenForProCareAppStg
    (stepLogger,AndroidCommonPageConstants.pageTitles.procareApp);
    await AndroidLoginPageHelper.tapByCoordinates(446,2055);
   /*************************************************************************************/


    

    /***********************************************************************************/
   
   
    //await AndroidLoginPageHelper.tapByCoordinates(350,2050);
   // await PageHelper.click(element(By.cssContainingText('Privacy',' Policy')));
    //await PageHelper.click(AndroidCommonPage.urlSelector.privacyProCare);
    //await PageHelper.click(AndroidCommonPage.urlSelector.privacyProCare);
  //  await element(By.linkText('Privacy Policy'));
    //#1 Initiate app with out click button and verify home screen
/*
    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    stepLogger.stepId(1);
    await AndroidLoginPageHelper.initiateProcareApp(stepLogger); 
    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    await AndroidLoginPageHelper.verifyLoginScreenForProCareAppStg
    (stepLogger,AndroidCommonPageConstants.pageTitles.procareApp);
  
    //#2 Click on back button and validate Login page
    stepLogger.stepId(2);
    await PageHelper.click(AndroidCommonPage.urlSelector.privacyProCare);
    await AndroidLoginPageHelper.verifyPrivacyProCare(stepLogger);
  */
    });



//Authentication failed due to connection to the server

    fit('Authentication failed due to connection to the server - [14188293]', async () => {
    stepLogger.caseId = 14188293;

    //#1 Initiate app with out click button

    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    stepLogger.stepId(1);
    await AndroidLoginPageHelper.initiateProcareAppWoPasscode(stepLogger); 

    //#2 Toggle Wifi and data to OFF
    stepLogger.stepId(2);
    await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    await AndroidLoginPageHelper.switchOffInternet(stepLogger);
    //await AndroidLoginPageHelper.addDelay(stepLogger, CommonPageConstants.SmallDelayProcare);
    await AndroidLoginPageHelper.enterActivationCode(stepLogger,CommonPageConstants.passcodeDiagnosticApp);

    stepLogger.stepId(3);

         
         await PageHelper.click(AndroidCommonPage.buttonSelector.continue);
         await AndroidLoginPageHelper.verifyWrongPasscodePopup(stepLogger,CommonPageConstants.networkOffMsgTextProcareApp);
   // await AndroidLoginPageHelper.verifyWrongPasscodePopup(stepLogger,CommonPageConstants.networkOffMsgTextProcareApp);
        
    });

});
