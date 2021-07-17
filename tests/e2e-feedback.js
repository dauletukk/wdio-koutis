import App from '../page-objects/App'

describe('E2E - Feedback',  () => {
    it('Should load feedback form', async () => {
        await browser.maximizeWindow()
        //await browser.url('http://zero.webappsecurity.com/index.html')
        await App.openHomepage()
        await (await $('#feedback')).waitForExist()
        await (await $('#feedback')).click()
        await (await $('form')).waitForExist()
    })

    it('Should submit feedback form', async () => {
        await (await $('#name')).setValue('Name')
        await (await $('#email')).setValue('test@test.com')
        await (await $('#subject')).setValue('Subjects')
        await (await $('#comment')).setValue('Just a message!')
        await (await $('input[type="submit"]')).click()
        await expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})