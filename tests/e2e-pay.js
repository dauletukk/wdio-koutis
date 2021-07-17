import App from "../page-objects/App";
import NavBar from "../page-objects/components/NavBar";
import LoginPage from "../page-objects/pages/LoginPage";

describe('E2E Tests - Pay', () => {
    it('Should log into application', async () => {
        // await browser.url('http://zero.webappsecurity.com/index.html')
        // await (await $('#signin_button')).waitForExist()
        // await (await $('#signin_button')).click()
        // await (await $('#login_form')).waitForExist()
        // await (await $('#user_login')).setValue('username')
        // await (await $('#user_password')).setValue('password')
        // await (await $('input[type="submit"]')).click()
        // await (await $('.nav-tabs')).waitForExist()

        await App.openHomepage()
        await NavBar.clickSignIn()
        await LoginPage.formVisible()
        await LoginPage.fillForm('username', 'password')
        await LoginPage.submitForm()
        await NavBar.insideNavbarIsVisible()
    })

    it('Should make payment', async () => {
        await (await $('#pay_bills_tab')).click()
        const selectPayee = await $('#sp_payee')
        await selectPayee.waitForExist()
        await selectPayee.selectByAttribute('value', 'apple')
        const selectAccount = await $('#sp_account')
        await selectAccount.waitForExist()
        await selectAccount.selectByVisibleText('Loan')
        await (await $('#sp_amount')).setValue('500')
        await (await $('#sp_date')).setValue('2020-03-31')
        await (await $('#sp_description')).setValue('Test')
        await (await $('#pay_saved_payees')).click()
        const message = await $('#alert_content')
        await expect(message).toHaveText('The payment was successfully submitted.')
        await browser.pause(2000)
    })
})