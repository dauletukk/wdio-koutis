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

    it('Transaction filter should work', async () => {
        await (await $('#account_activity_tab')).click()
        await (await $('//a[.=\'Find Transactions\']')).waitForExist()
        await (await $('//a[.=\'Find Transactions\']')).click()
        await (await $('#aa_description')).waitForExist()
        await (await $('#aa_description')).setValue('test')
        await (await $('//button[@class=\'btn btn-primary\']')).click()
        const message = await $('.well')
        await expect(message).toHaveText('No results.')

    })
})