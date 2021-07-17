class Base {

    async pauseShort() {
        await browser.pause(2000)
    }

    async pauseMedium() {
        await browser.pause(4000)
    }

    async pauseLong() {
        await browser.pause(6000)
    }

}

export default Base
