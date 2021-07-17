import App from "../page-objects/App";
import NavBar from "../page-objects/components/NavBar";
import LoginPage from "../page-objects/pages/LoginPage";

describe('E2E Tests - Currency Exchange', () => {
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

    it('Should make currency exchange', async () => {
        await (await $('#pay_bills_tab')).waitForExist()
        await (await $('#pay_bills_tab')).click()
        await (await $('#tabs > ul > li:nth-child(3) > a')).waitForExist()
        await (await $('#tabs > ul > li:nth-child(3) > a')).click()
        const currencySelect = await $('#pc_currency')
        await currencySelect.waitForExist()
        await currencySelect.selectByAttribute('value', 'GBP')
        await (await $('#pc_amount')).setValue('500')
        await (await $('#pc_inDollars_true')).click()
        await (await $('#purchase_cash')).click()
        const message = await $('#alert_content')
        await expect(message).toHaveText('Foreign currency cash was successfully purchased.')
    })
})