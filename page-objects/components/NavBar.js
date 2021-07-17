import Base from "../Base";

class NavBar extends Base {

    get signInButton () {
        return $('#signin_button')
    }

    async clickSignIn() {
        await (await this.signInButton).waitForExist()
        await (await this.signInButton).click()
    }
}

export default new NavBar()