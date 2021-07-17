import LoginPage from "../page-objects/pages/LoginPage";
import App from "../page-objects/App";
import NavBar from "../page-objects/components/NavBar";

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', async () => {
        //await browser.url('http://zero.webappsecurity.com/index.html')
        // await (await $('#signin_button')).waitForExist()
        // await (await $('#signin_button')).click()
        // const loginForm = await $('#login_form')
        // await loginForm.waitForExist()
        // const userLogin = await $('#user_login')
        // const userPassword = await $('#user_password')
        // await userLogin.setValue('invalid')
        // await userPassword.setValue('invalid')
        // await (await $('input[type="submit"]')).click()
        await App.openHomepage()
        await NavBar.clickSignIn()
        // await LoginPage.pauseMedium()
        await LoginPage.formVisible()
        await LoginPage.fillForm('invalid', 'invalid')
        await LoginPage.submitForm()
        const messageError = await LoginPage.error
        await expect(messageError).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', async () => {
        //browser.url('http://zero.webappsecurity.com/index.html')
        // await (await $('#signin_button')).waitForExist()
        // await (await $('#signin_button')).click()
        // await (await $('#login_form')).waitForExist()
        // await (await $('#user_login')).setValue('username')
        // await (await $('#user_password')).setValue('password')
        // await (await $('input[type="submit"]')).click()
        await App.openHomepage()
        await NavBar.clickSignIn()
        await LoginPage.formVisible()
        await LoginPage.fillForm('username', 'password')
        await LoginPage.submitForm()
        await (await $('.nav-tabs')).waitForExist()
    })

    it('Should logout from app', async () => {
        await (await $('.icon-user')).waitForExist()
        await (await $('.icon-user')).click()
        await (await $('#logout_link')).waitForExist()
        await (await $('#logout_link')).click()
        await (await $('#pages-nav')).waitForExist()
    })
})