import {extend} from 'webdriver-js-extender';
import {browser, ElementFinder} from 'protractor';
import {StepLogger} from '../../core/logger/step-logger';
import Vibrant = require('node-vibrant');
import {CommonPageValidations} from '../../page-objects/common/common-page.validations';
import {CommonPageConstants} from "../../page-objects/common/common-page-constants";
import {WaitHelper} from '../html/wait-helper';
import Jimp = require('jimp');
import * as path from "path";



export class MobileHelper {

    // abstract writing screen shot to a file
    public static writeScreenShot(data: any, filename: any) {
        const fs = require('fs');
        const stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    public static async lockDevice(driver: any) {
        await extend(driver).lockDevice(1000);
    }

    public static async unlockDevice(driver: any) {
        const wdDriver = extend(driver);
        await wdDriver.unlockDevice();
        await browser.sleep(5000);
    }

    public static async getDeviceTime(driver: any) {
        const wdDriver = extend(driver);
        return wdDriver.getDeviceTime();
    }

    public static async tap(driver: any, webelement: ElementFinder) {
        await WaitHelper.getInstance().waitForElementToBeDisplayed(webelement);
        await extend(driver).touchActions().tap(webelement).perform();
    }

    static async verifyImage(stepLogger: StepLogger, image: string, expectedColor: string) {
        const vibrant = new Vibrant(image + '.png');
        const swatches = await vibrant.getPalette();
        stepLogger.verification(`The mobile app should display colors
                White Red Green, Blue one after another without any missing pixels on the screen.`);
        if (swatches.Vibrant != null) {
            const colorRGB = swatches.Vibrant.getRgb();
            await expect(colorRGB).toMatch(expectedColor,
                CommonPageValidations.getFieldDisplayedValidation(expectedColor));
        } else {
            await expect(image).toBe(this.screenShotFolder(CommonPageConstants.colors.name.white),
                CommonPageValidations.getFieldDisplayedValidation('white is not displayed'));
        }
    }

    static screenShotFolder(filename: string) {
        return path.resolve(__dirname, '..', '..', '..', 'screenshot-placeholder', filename);
    }

    static cropAndMirrorImage(sourceImg: string, mirror: boolean, width = 1200, height = 1600) {
        Jimp.read(sourceImg+'.png').then(function (image) {
            const crop = image.crop(0, 50, width, height);
            if (mirror) {
                crop.mirror(false, true)
            }
            return crop.write(sourceImg + 'Cropped.png');
        });
    }

    static async compareTwoImages(img1: string, img2: string) {
        const before = await Jimp.read(img1 + '.png');
        const after = await Jimp.read(img2 + '.png');
        const distance = await Jimp.distance(before, after); // perceived distance
        const diff = await Jimp.diff(before, after);         // pixel difference
        return distance < 0.25 || diff.percent < 0.25;
    }

    static async verifyImageForIphone(stepLogger: StepLogger, image: string, expectedColor: string) {
        const vibrant = new Vibrant(image + '.png');
        const swatches = await vibrant.getPalette();
        const population = swatches.Vibrant.getPopulation();
        stepLogger.verification(`The mobile app should display colors
                White Red Green, Blue one after another without any missing pixels on the screen.`);
        if (population > 30000) {
            const colorRGB = swatches.Vibrant.getRgb();
            await expect(colorRGB).toMatch(expectedColor,
                CommonPageValidations.getFieldDisplayedValidation(expectedColor));
        } else {
            await expect(image).toBe(this.screenShotFolder(CommonPageConstants.colors.name.white),
                CommonPageValidations.getFieldDisplayedValidation('white is not displayed'));
        }
    }
}
