export class AndroidCommonPageConstants {
    static readonly myDeviceText = 'My device';
    static readonly displayTestText = 'Display test';
    static readonly contentTransferText = 'Secured & fast content transfer between devices';
    static readonly srcTargetChoiceText = 'Which phone is this?';
    static readonly mobilogyLogoResourceId = 'com.mobilogy.transfer:id/logo_image_view';
    static readonly mobilogyLogoResourceIdProCare = 'com.mobilogy.procare:id/logo_image_view';
    static readonly mobilogyLogoResourceIdDiagnostics = 'com.mobilogy.diagnostics:id/logo_image_view';

    static readonly mobilogyLogo = 'Mobilogy Logo';
    static readonly mobilogyWelcomeMsgResourceId = 'com.mobilogy.transfer:id/welcome_message';
    static readonly mobilogyWelcomeMsgResourceIdProCare = 'com.mobilogy.procare:id/welcome_message';
    static readonly mobilogyWelcomeMsgResourceIdDiagnostics = 'com.mobilogy.diagnostics:id/welcome_message';
    static readonly mobilogyWelcomeMsg = 'Welcome Message';
    static readonly mobilogyPasswordVisibilityContentDesc = 'Toggle password visibility';
    static readonly mobilogyAgreementTextResourceId = 'com.mobilogy.transfer:id/bottom_agreement_text_view';
    static readonly mobilogyAgreementTextResourceIdProcare = 'com.mobilogy.procare:id/bottom_agreement_text_view';
    static readonly mobilogyAgreementTextResourceIdDiagnostics = 'com.mobilogy.diagnostics:id/bottom_agreement_text_view';
    static readonly mobilogyAgreementText = 'Agreement Text';
    static readonly mobilogyHelpTextReourceId = 'com.mobilogy.transfer:id/need_help';
    static readonly mobilogyHelpTextReourceIdProCare = 'com.mobilogy.procare:id/need_help';
    static readonly mobilogyHelpTextReourceIdDiagnostics = 'com.mobilogy.diagnostics:id/need_help';
    static readonly mobilogyHelpText = 'Help Text';
    static readonly mobilogyAuthButtonResourceId = 'com.mobilogy.transfer:id/authentication_button';
    static readonly mobilogyAuthButtonResourceIdProcare = 'com.mobilogy.procare:id/authentication_button';
    static readonly mobilogyAuthButtonResourceIdDiagnostics = 'com.mobilogy.diagnostics:id/authentication_button';
    static readonly mobilogyAuthButton = 'Authentication Button';
    static readonly mobilogyPasswordToggleResourceId = 'com.mobilogy.transfer:id/text_input_password_toggle';
    static readonly mobilogyPasswordToggleResourceIdProCare = 'com.mobilogy.procare:id/text_input_password_toggle';
    static readonly mobilogyPasswordToggleResourceIdDiagnostics = 'com.mobilogy.diagnostics:id/text_input_password_toggle';
    static readonly mobilogyPasswordToggle = 'Password Toggle';
    static readonly mobilogyWrongPasscodeMsgResourceIDProcare = 'com.mobilogy.procare:id/snackbar_text';
    static readonly mobilogyWrongPasscodeMsgTextProcare = 'The code entered is not valid';
    static readonly mobilogyHelpTextReourceIdProCareStg = 'com.mobilogy.procare.staging:id/need_help'; //created by MUHAMMAD talha 14-08-2018
    static readonly mobilogyHelpTitleResourceIdProCareStg = 'com.mobilogy.procare.staging:id/web_view_title'; //created by MUHAMMAD talha 14-08-2018
    static readonly mobilogyBackButtonHelpProCareStg = 'com.mobilogy.procare.staging:id/button'; //created by MUHAMMAD talha 14-08-2018
    static readonly mobilogyHelpTitleTextProCareStg = 'Help'; //created by MUHAMMAD talha 14-08-2018
    static readonly mobilogyLogoResourceIdProCareStg = 'com.mobilogy.procare.staging:id/logo_image_view'; //created by MUHAMMAD talha 15-08-2018
    static readonly mobilogyAuthButtonResourceIdProcareStg = 'com.mobilogy.procare.staging:id/authentication_button';//created by MUHAMMAD talha 15-08-2018
    static readonly mobilogyAgreementTextResourceIdProcareStg = 'com.mobilogy.procare.staging:id/bottom_agreement_text_view';//created by MUHAMMAD talha 15-08-2018
    static readonly mobilogyWelcomeMsgResourceIdProCareStg = 'com.mobilogy.procare.staging:id/welcome_message';//created by MUHAMMAD talha 15-08-2018
    static readonly mobilogyWrongPasscodeMsgResourceIDProcareStg = 'com.mobilogy.procare.staging:id/snackbar_text';

    static get buttonLabels() {
        return {
            allow: 'Allow',
            pass: 'Pass',
            fail: 'Fail'

        };
    }

    static get appPermissions() {
        return {
            managePhoneCalls: 'Allow Transfer App to make and manage phone calls?',
            viewSendSms: 'Allow Transfer App to send and view SMS messages?',
            accessContacts: 'Allow Transfer App to access your contacts?',
            accessCalendar: 'Allow Transfer App to access your calendar?',
            accessMedia: 'Allow Transfer App to access photos, media, and files on your device?'
        };
    }

    static get screenLabels() {
        return {
            myDeviceScreen:
                {
                    title: 'My device',
                    model: 'Model',
                    os: 'OS',
                    firmware: 'Firmware',
                    deviceId: 'Device ID'
                }
        };
    }

    static get pageTitles() {
        return {
            transferApp: 'Transfer App',
            procareApp: 'Welcome to the ProCare app',
            diagnosticsApp: 'Welcome to the Diagnostics app'
        };
    }
}
