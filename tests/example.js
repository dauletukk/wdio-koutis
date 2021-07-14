import {short, medium, long} from "../lib/timeouts";
import {mobile, tablet, desktop} from "../lib/devices";

describe('First Steps with Webdriverio', () => {

    it('Load Example Website',  async () => {
        await browser.url('http://example.com/');
        //await browser.pause(3000)
        await expect(browser).toHaveUrl('http://example.com/')
        await expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 should be displayed', async () => {
        const h1 = await $('h1')
        await h1.waitForExist()
        await expect(h1).toBeDisplayed()
    })

    it('P should be displayed', async () => {
        const p = await $('p')
        await p.waitForExist()
        await expect(p).toBeDisplayed()
    })

    it('Check Link Value', async () => {
        const link = await $('a')
        await expect(link).toHaveLink('https://www.iana.org/domains/example')
    })

    it('Get Element Text', async () => {
        const text = await $('h1')
        console.log(text.getText())
        const element = await $('h1')
        await element.waitForExist()
        await expect(element).toHaveText('Example Domain')
    })

    it('Assert Attribute', async () => {
        await browser.url('https://devexpress.github.io/testcafe/example/')
        const button = await $('#submit-button')
        await button.waitForExist()
        await expect(button).toHaveAttrContaining('type', 'submit')
    })

    it('Assert Value', async () => {
        const button = await $('#populate')
        await button.waitForExist()
        await expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', async () => {
        await browser.saveScreenshot('your-name.png')
    })

    it('Change Browser Viewport', async () => {
        await browser.setWindowSize(800, 600)
        await browser.pause(short)
    })

    it('Set Mobile View', async () => {
        await browser.setWindowSize(mobile[0], mobile[1])
        await browser.pause(short)
    })

    it('Set Tablet View', async () => {
        await browser.setWindowSize(tablet[0], tablet[1])
        await browser.pause(short)
    })

    it('Set Desktop View', async () => {
        await browser.setWindowSize(desktop[0], desktop[1])
        await browser.pause(short)
    })
})