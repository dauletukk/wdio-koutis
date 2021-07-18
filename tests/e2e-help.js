import App from "../page-objects/App";
import NavBar from "../page-objects/components/NavBar";
import LoginPage from "../page-objects/pages/LoginPage";

describe('E2E Tests - Transaction Filter', () => {

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

    it('Should load help content', async () => {
        await (await $('.icon-cog')).click()
        await (await $('#help_link')).waitForExist()
        await (await $('#help_link')).click()
        const title = await $('div.span8 > h3')
        await expect(title).toHaveText('How do I log into my account?')
        await (await $('//a[.=\'How do I transfer funds?\']')).click()
        await expect(title).toHaveText('How do I transfer funds?')
        await (await $('//a[.=\'How do I pay bills?\']')).click()
        await expect(title).toHaveText('How do I pay bills?')

    })

})