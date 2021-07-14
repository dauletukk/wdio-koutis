describe('E2E Tests - Search', () => {
    it('Should load homepage', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await (await $('#searchTerm')).waitForExist()
    })

    it('Should submit searchbox', async () => {
        await (await $('#searchTerm')).setValue('bank')
        await browser.keys('Enter')
        const resultsTitle = await $('h2')
        await resultsTitle.waitForExist()
        await expect(resultsTitle).toHaveText('Search Results:')
    })
})