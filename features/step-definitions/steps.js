const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I open the home page at {string} and I close the promo banner if it appears", async (page) => {
    await browser.url(page);
    await browser.refresh();
});

When("I enter the word {string} in the search bar and I click the search", async (searchWord) => {
    const searchBar = await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex.is-active > form > div > div.header2021-search-box.auto-flex > input[type=search]');
    searchBar.setValue(searchWord);
    const searchButton = await $('//button[contains(., "Search")]');
    searchButton.click();
    await browser.pause(4000);
    await browser.keys("Enter");

});

Then("I should check that at least one item appears", async () => {
    const elem = await $('//a[contains(., "Shipped by Newegg")]');;
    await browser.pause(4000);
    await expect(elem).toBeExisting();
});

When("I open Today's Best Deals tab and I click on the Internet shop logo top right corner", async () => {
    const dealsTab = await $('#trendingBanner_720202 > span');
    dealsTab.click();
    const logoButton = await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a');
    logoButton.click();
    await browser.pause(3000);

});

Then("I should check that the main page opened", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});