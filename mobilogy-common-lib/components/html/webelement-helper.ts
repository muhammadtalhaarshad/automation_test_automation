import { browser, element } from 'protractor';
import { By } from 'selenium-webdriver';

/**
 * Helper class to work with WebElement objects
 * To interact to with objects inside iFrame, we need to use selenium's findElement method
 * so, instead of hard-coding locators inside *.po files, just pass ElementFinder object
 * and interaction with WebElement can be done using this helper class.
 */
export class WebElementHelper {

    private readonly byObject: By;

    public constructor(byObject: By) {
        this.byObject = byObject;
    }

    public get getWebElement() {
        return browser.driver.findElement(this.byObject);
    }

    public get getWebElements() {
        return browser.driver.findElements(this.byObject);
    }

    public get getByObject() {
        return this.byObject;
    }

    public get getElementFinder() {
        return element(this.byObject);
    }
}
