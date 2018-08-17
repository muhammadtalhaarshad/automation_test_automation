import { PageHelper } from './page-helper';
import { browser, ElementFinder, protractor } from 'protractor';
import { WebElementHelper } from './webelement-helper';

export class WaitHelper {
    private static instance: WaitHelper;
    private readonly until = protractor.until;
    private readonly EC = protractor.ExpectedConditions;

    private constructor() {
    }

    static getInstance() {
        if (!WaitHelper.instance) {
            WaitHelper.instance = new WaitHelper();
        }
        return WaitHelper.instance;
    }

    /**
     * Default timeout for promises
     * @type {number}
     */
    /**
     * Wait for an element to exist
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    public async waitForElement(
        targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should exist') {
        return await browser.wait(this.EC.presenceOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to display
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    public async waitForElementToBeDisplayed(
        targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should be visible') {
        return await browser.wait(this.EC.visibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait until the targetElement is not visible in viewport
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {Promise<any>}
     */
    public async waitForWebElementTobeDisplayed(
        targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT) {
        return await browser.wait(this.until.elementIsNotVisible(await new WebElementHelper(targetElement).getWebElement),
            timeout);
    }

    /**
     * Wait until the targetElement is not present in DOM
     * @param {WebElementHelper} targetElement
     * @param {number} timeout
     * @returns {Promise<WebElement>}
     */
    public async waitForWebElementTobePresent(
        targetElement: WebElementHelper,
        timeout = PageHelper.DEFAULT_TIMEOUT) {
        return await browser.driver.wait(this.until.elementLocated(targetElement.getByObject),
            timeout);
    }

    /**
     * Wait for an element to hide
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     * @returns {any}
     */
    public async waitForElementToBeHidden(
        targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element should not be visible') {
        return await browser.wait(this.EC.invisibilityOf(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }

    /**
     * Wait for an element to become clickable
     * @param {ElementFinder} targetElement
     * @param {number} timeout
     * @param {string} message
     */
    public async waitForElementToBeClickable(
        targetElement: ElementFinder,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = 'Element not clickable') {
        return await browser.wait(this.EC.elementToBeClickable(targetElement),
            timeout,
            targetElement.locator().toString() + message);
    }
    // waitForElementToBeClickable(targetElement: ElementFinder) {
    //
    // }

    /**
     * Wait for an text to be present in page title
     * @param {string} text
     * @param {number} timeout
     * @param {string} message
     */
    public async waitForTextInPageTitle(
        text: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = `${text} is not present in PageTitle`) {
        return await browser.wait(this.EC.titleContains(text),
            timeout,
            message);
    }

    /**
     * Wait until fn returns true
     * @param {Function} fn
     * @param {number} timeout
     * @returns {Promise<any>}
     */
    public async waitForCustomCondition(
        fn: Function,
        timeout = PageHelper.DEFAULT_TIMEOUT) {
        return await browser.wait(async () => {
            if (await fn()) {
                return true;
            }
        },
            timeout);
    }

    public async titleIs(title: string) {
        return this.EC.titleIs(title);
    }

    public async waitForElementToResolve(promiseCall: Function, resolver: Function, timeout = PageHelper.DEFAULT_TIMEOUT, message = '') {
        let result = false;
        return await browser.wait(() => {
            promiseCall().then((value: any) => (result = resolver(value)));
            return result;
        }, timeout, message);
    }

    public async waitForElementToHaveText(targetElement: ElementFinder, timeout = PageHelper.DEFAULT_TIMEOUT, message = '') {
        await this.waitForElementToResolve(() => targetElement.getText(), (text: string) => text.length > 0, timeout, message);
    }

    public async waitForElementOptionallyPresent(targetElement: ElementFinder, timeout = PageHelper.DEFAULT_TIMEOUT) {
        const isDisplayed = this.EC.presenceOf(targetElement);
        return await browser.wait(isDisplayed, timeout).then(function () {
            return true;
        }, function () {
            return false;
        });
    }

    /**
     * Wait for the url to match the text
     * @param {string} text
     * @param {number} timeout
     * @param {string} message
     */
    public async waitForUrl(
        text: string,
        timeout = PageHelper.DEFAULT_TIMEOUT,
        message = `${text} is not the current url`) {
        return await browser.wait(this.EC.urlIs(text),
            timeout,
            message);
    }

}
