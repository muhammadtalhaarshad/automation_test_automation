export class CommonPageConstants {

    static readonly passcodeTransferApp = '123321';
    static readonly passcodeProcareApp = '3636';
    static readonly passcodeProcareAppEncrypted = '••••';
    static readonly passcodeDiagnosticApp = '00001';
    static readonly wrongPasscodeProcareApp  = '76767676';
    static readonly wrongPasscodeMsgTextProcareApp  = 'The code entered is not valid';
    static readonly networkOffMsgTextProcareApp  = 'Salqain';//A network connection error stopped your session.
    static readonly wrongPasscodeAttemptsProcareApp = 5; //created by MUHMMAD talha arshad to test C14174599 (max wrong passcode attempts) 10-08-2018
    static readonly XsmallDelayProcare = 500;
    static readonly SmallDelayProcare = 2000; 
    static readonly MediumDelayProcare = 5000;
    

    static get colors() {
        return {
            rgb: {
                white: '255,255,255',
                red: '[252, 4, 4]',
                green: '[4, 252, 4]',
                blue: '[4, 4, 252]',
            },
            name: {
                white: 'white',
                red: 'red',
                green: 'green',
                blue: 'blue',
            },
        };
    }
}