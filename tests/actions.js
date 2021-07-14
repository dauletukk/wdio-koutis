import { short } from '../lib/timeouts'

describe('Browser Actions',  () => {
    it('Inputs', async () => {
        await browser.url('https://devexpress.github.io/testcafe/example/')
        await browser.maximizeWindow()
        const input = await $('#developer-name')
        await input.waitForExist()
        await input.setValue('Mike')
        await browser.pause(short)
        await input.clearValue()
        await browser.pause(short)
        await input.addValue('Mike')
        await browser.pause(short)
    })

    it('Click', async () => {
        const buttonPupulate = await $('#populate')
        await buttonPupulate.waitForExist()
        await buttonPupulate.click()
    })

    it('Checkbox & Radio Button', async () => {
        await browser.url('https://devexpress.github.io/testcafe/example/')
        const radio = await $('#linux')
        await radio.waitForExist()
        await radio.click()
        await browser.pause(short)

        const checkbox = await $('#remote-testing')
        await checkbox.waitForExist()
        await checkbox.click()
        await browser.pause(short)
    })

    it('Select Box', async () => {
        await browser.url('https://devexpress.github.io/testcafe/example/')
        const select = await $('#preferred-interface')
        await select.waitForExist()
        await select.selectByVisibleText('JavaScript API')
        await browser.pause(short)
    })
})