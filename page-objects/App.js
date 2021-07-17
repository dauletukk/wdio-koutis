class App {

    async openHomepage() {
        await browser.url('http://zero.webappsecurity.com/index.html')
    }


}

export default new App()