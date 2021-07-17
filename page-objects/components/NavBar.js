import Base from "../Base";

class NavBar extends Base {

    get signInButton () {
        return $('#signin_button')
    }

    get insideNavbar() {
        return $('.nav-tabs')
    }

    async signInButtonIsVisible() {
        await (await this.signInButton).waitForExist()
    }

    async clickSignIn() {
        await (await this.signInButton).waitForExist()
        await (await this.signInButton).click()
    }

    async insideNavbarIsVisible(){
        await (await this.insideNavbar).waitForExist

    }
}

export default new NavBar()