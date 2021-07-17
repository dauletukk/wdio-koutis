describe('E2E Tests - Transaction Filter', () => {

    it('Should log into application', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await (await $('#signin_button')).waitForExist()
        await (await $('#signin_button')).click()
        await (await $('#login_form')).waitForExist()
        await (await $('#user_login')).setValue('username')
        await (await $('#user_password')).setValue('password')
        await (await $('input[type="submit"]')).click()
        await (await $('.nav-tabs')).waitForExist()
    })

    it('Should log into application', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await (await $('#signin_button')).waitForExist()
        await (await $('#signin_button')).click()
        await (await $('#login_form')).waitForExist()
        await (await $('#user_login')).setValue('username')
        await (await $('#user_password')).setValue('password')
        await (await $('input[type="submit"]')).click()
        await (await $('.nav-tabs')).waitForExist()
    })
})