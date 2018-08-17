/**
 * Page helper for general utility
 */
import { browser, ElementFinder, protractor, WebElement } from 'protractor';
import { WaitHelper } from './wait-helper';
import { MobileHelper } from '../mobile/mobile-helper';

export class PageHelper {
    static MAX_RETRY_ATTEMPTS = 3;
    // noinspection JSValidateJSDoc
    /**
     * Timeout collection to meet various needs
     * @type {{xs: number; s: number; m: number; l: number; xl: number; xxl: number; xxxl: number}}
     */
    public static timeout = {
        xxs: 1000,
        xs: 2000,
        s: 5000,
        m: 10000,
        l: 25000,
        xl: 50000,
        xxl: 75000,
        xxxl: 200000
    };
    static DEFAULT_TIMEOUT = PageHelper.timeout.xxl;
    private static readonly EC = protractor.ExpectedConditions;

    static get isFullScreen() {
        const fullScreenScript = 'if (!window.screenTop && !window.screenY){return true;}'
            + 'else{return false;}';
        return browser.executeScript(fullScreenScript);
    }

    static actionKeyDown(key: string) {
        return browser.actions().keyDown(key).perform();
    }

    static executeInIframe(index: number | WebElement, fn: Function) {
        browser.switchTo().frame(index);
        fn();
        browser.switchTo().defaultContent();
        browser.waitForAngular();
    }

    static actionSendKeys(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    static sendKeysToInputField(elem: ElementFinder, key: string) {
        return elem.sendKeys(key);
    }

    static actionKeyUp(key: string) {
        return browser.actions().keyUp(key).perform();
    }

    static keyPressForBrowser(key: string) {
        return browser.actions().sendKeys(key).perform();
    }

    static actionMouseUp(location: WebElement) {
        return browser.actions().mouseUp(location).perform();
    }

    public static async actionHoverOver(elem: WebElement) {
        return await browser.actions().mouseMove(elem).perform();
    }

    // Known issue for chrome, direct maximize window doesn't work
    /**
     * To maximize the browser window
     */
    public static async maximizeWindow() {
        class Size {
            width: number;
            height: number;
        }

        const windowSize = await this.executeScript(function () {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        });

        const result = windowSize as Size;

        return this.setWindowSize(result.width, result.height);
    }

    /**
     * Sets window size
     * @param {number} width
     * @param {number} height
     */
    public static async setWindowSize(width: number, height: number) {
        return browser.driver
            .manage()
            .window()
            .setSize(width, height);
    }

    // Wrapper for refreshing browser
    /**
     * To refresh the browser window
     */
    public static async refreshBrowser() {
        return browser.driver.navigate().refresh();
    }

    /**
     * Wrapper for executing javascript code
     * @param {string | Function} script
     * @param varAargs
     * @returns {promise.Promise<any>}
     */
    public static async executeScript(
        script: string | Function,
        ...varAargs: any[]) {
        return browser.driver.executeScript(script, varAargs);
    }

    public static async clickUsingJs(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        }
        return await browser.executeScript('arguments[0].click();', targetElement.getWebElement());
    }

    /**
     * Wrapper to return an active element
     * @returns {WebElementPromise}

     public static async getFocusedElement() {
    return browser.driver.switchTo().activeElement()
  } */

    /**
     * Switch to a new tab if browser has availability
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    public static async switchToNewTabIfAvailable() {
        const handles = await browser.getAllWindowHandles();
        const newWindowHandle = handles[1]; // this is your new window
        if (newWindowHandle) {
            await browser.switchTo().window(newWindowHandle);
        }
        const url = await browser.getCurrentUrl();

        // Avoiding bootstraping issue, Known issue
        // Error: Error while waiting for Protractor to sync with the page:
        // "window.angular is undefined. This could be either because this is a non-angular page or
        // because your test involves client-side navigation, which can interfere with Protractor's bootstrapping.
        // See http://git.io/v4gXM for details
        return browser.driver.get(url);
    }

    /**
     * Gets innertext for the element
     * @param {WebElementPromise} elem
     * @returns {string} inner text
     */
    public static async getText(elem: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const innerText = await elem.getText();
        return innerText.trim();
    }

    /**
     * Gets innertext for the element
     * @param {WebElementPromise} elem
     * @returns {string} inner text
     */
    public static async waitAndGetText(elem: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        await browser.sleep(PageHelper.timeout.m);
        const innerText = await elem.getText();
        return innerText.trim();
    }

    /**
     * Gets html attribute value
     * @param {WebElementPromise} elem
     * @param {string} attribute
     * @returns {string} attribute value
     */
    public static async getAttributeValue(
        elem: ElementFinder,
        attribute: string) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(elem);
        const attributeValue = await elem.getAttribute(attribute);
        return attributeValue.trim();
    }

    /**
     * Click on element
     * @param {ElementFinder} targetElement
     * @returns {any}
     */
    public static async click(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        return await targetElement.click();
    }

    /**
     * Click on the element and wait for it to get hidden
     * @param {ElementFinder} targetElement
     * @returns {PromiseLike<boolean> | Promise<boolean> | Q.Promise<any> | promise.Promise<any> | Q.IPromise<any>}
     */
    public static async clickAndWaitForElementToHide(targetElement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        await targetElement.click();
        return WaitHelper.getInstance().waitForElementToBeHidden(targetElement);
    }

    /**
     * Gets promise for current url
     * @returns {any}
     */
    public static async currentUrl() {
        return browser.getCurrentUrl();
    }

    /**
     * Verify whether element is present on page or not
     * @param {ElementFinder} targetElement
     * @returns {Promise<boolean>}
     */
    public static async isElementPresent(targetElement: ElementFinder) {
        return await targetElement.isPresent();
    }

    /**
     * Verify whether element is displayed on page or not
     * @param {ElementFinder} targetElement
     * @param toWait
     * @returns {Promise<boolean>}
     */
    public static async isElementDisplayed(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        }
        return await targetElement.isDisplayed();
    }

    /**
     * Verify whether element is present and displayed on page or not
     * @param {ElementFinder} targetElement
     * @param toWait
     * @returns {Promise<boolean>}
     */
    public static async isElementPresentAndDisplayed(targetElement: ElementFinder, toWait = true) {
        const isPresent = await targetElement.isPresent();
        if (isPresent === true) {
            return await PageHelper.isElementDisplayed(targetElement, toWait);
        } else {
            return isPresent;
        }
    }

    /**
     * Verify whether element is enabled on page or not
     * @param {ElementFinder} targetElement
     * @param toWait
     * @returns {Promise<boolean>}
     */
    public static async isElementEnabled(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBeDisplayed(targetElement);
        }
        return targetElement.isEnabled();
    }

    /**
     *
     * @param {ElementFinder} targetElement
     * @returns {Promise<void>}
     */
    public static async hoverAndClick(targetElement: ElementFinder) {
        await this.actionHoverOver(targetElement);
        await this.click(targetElement);
    }

    public static async sleepForXSecond(seconds: number) {
        await browser.sleep(seconds);
    }

    /**
     * Verify whether element is clickable
     * @param {ElementFinder} targetElement
     * @param toWait
     * @returns {Promise<boolean>}
     */
    public static async isElementClickable(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            await WaitHelper.getInstance().waitForElementToBeClickable(targetElement);
        }
        return await this.EC.elementToBeClickable(targetElement);
    }

    public static async touchActionProtractor() {
        const move = { x: 380, y: 25 };
        const clickCanvas = function () {
            browser.actions()
                .mouseMove(move)
                .click()
                .perform();
        };
        return clickCanvas();
    }

    static async saveScreenShot(imageName: string) {
        const png = await browser.takeScreenshot();
        await MobileHelper.writeScreenShot(png, `${imageName}.png`);
    }

    public static index = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "4"
    };
}
