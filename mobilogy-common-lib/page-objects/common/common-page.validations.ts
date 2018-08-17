export class CommonPageValidations {
    static getFieldHasValueValidation(fieldLabel: string, value: string) {
        return `Field ${fieldLabel} has value as ${value}`;
    }

    static getPageDisplayedValidation(name: string) {
        return `Page ${this.getDisplayedValidation(name)}`;
    }

    static getInputFieldDisplayedValidation(name: string) {
        return `Input ${this.getFieldDisplayedValidation(name)}`;
    }

    static getSelectFieldDisplayedValidation(name: string) {
        return `select ${this.getFieldDisplayedValidation(name)}`;
    }

    static getFieldDisplayedValidation(name: string) {
        return `Field ${this.getDisplayedValidation(name)}`;
    }

    static getDisplayedValidation(name: string) {
        return `${name} should be displayed`;
    }

    static getNotDisplayedValidation(name: string) {
        return `${name} should not be displayed`;
    }

    static getButtonDisplayedValidation(name: string) {
        return `Button ${this.getDisplayedValidation(name)}`;
    }

    static getMsgDisplayedValidation(msg: string) {
        return `Message ${this.getDisplayedValidation(msg)}`;
    }

    static getLinkDisplayedValidation(name: string) {
        return `Link ${this.getDisplayedValidation(name)}`;
    }

    static getContainValidation(stringContainingText: string, expectedText: string) {
        return `${stringContainingText} should contain ${expectedText}`;
    }

    static getEqualityValidation(str1: string, str2: string) {
        return `${str1} should be equal to ${str2}`;
    }

    static getNotEqualityValidation(str1: string, str2: string) {
        return `${str1} should not be equal to ${str2}`;
    }

    static getSelectedValidation(name: string) {
        return `${name} should be selected`;
    }

    static getMenuSelectedValidation(name: string) {
        return `Menu ${this.getSelectedValidation(name)}`;
    }

    static getEnabledValidation(name: string) {
        return `${name} should be enabled`;
    }

    static getDisabledValidation(name: string) {
        return `${name} should not be enabled`;
    }

    static getFieldEnabledValidation(name: string) {
        return `Field ${this.getEnabledValidation(name)}`;
    }

    static getInputFieldEnabledValidation(name: string) {
        return `Input ${this.getFieldEnabledValidation(name)}`;
    }

    static getIconDisplayedValidation(name: string) {
        return `Icon ${this.getDisplayedValidation(name)}`;
    }

    static getScreenDisplayedValidation(name: string) {
        return `Screen ${this.getDisplayedValidation(name)}`;
    }

}
