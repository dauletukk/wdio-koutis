import Base from "../Base";

class LoginPage extends Base {

    get loginUserName(){
        return 'username'
    }

    get loginPassword() {
        return 'password'
    }

    get loginForm() {
        return $('#login_form')
    }

    get usernameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    get error() {
        return $('.alert-error')
    }


    async formVisible() {
        await (await this.loginForm).waitForExist()
    }

    async fillForm(name, password) {
        await (await this.usernameInput).setValue(name)
        await (await this.passwordInput).setValue(password)
    }

    async submitForm() {
        await (await this.submitButton).click()
    }

    async login() {
        await (await this.loginForm).waitForExist()
        await (await this.usernameInput).setValue(this.loginUserName)
        await (await this.passwordInput).setValue(this.loginPassword)
        await (await this.submitButton).click()
    }

}

export default new LoginPage()