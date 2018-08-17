import { browser } from 'protractor';

export class CommonPageHelper {
    static get credentials() {
        const admin = browser.params.users.administrator;
        return {
            administrator: {
                username: admin.username.toString(),
                password: admin.password.toString(),
                displayName: admin.displayName.toString(),
            },
        };
    }
}
