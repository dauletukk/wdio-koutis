class App {

    async openHomepage() {
        await browser.url('http://zero.webappsecurity.com/index.html')
    }

    async logout() {
        await browser.url('http://zero.webappsecurity.com/logout.html')
    }


}

export default new App()