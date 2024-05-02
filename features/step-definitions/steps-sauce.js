const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser } = require('@wdio/globals')

const SauceLoginPage = require('../pageobjects/sauce-login.page');
const DashboardPage = require('../pageobjects/sauce-dashboard.page');
const CartPage = require('../pageobjects/sauce-cart.page');
const sauceDashboardPage = require('../pageobjects/sauce-dashboard.page');

Given("user is on sauce-demo page", async () => {
    await SauceLoginPage.open()
})

When(/^user input username with "(.*)"$/, async (username) => {
    await SauceLoginPage.inputUsername(username)
})

When(/^user input password with "(.*)"$/, async (password) => {
    await SauceLoginPage.inputPassword(password)
  });
  
When(/^user click button$/, async () => {
    await SauceLoginPage.clickLoginButton()
});

Then(/^user should redirect to homepage$/, async () => {
    await DashboardPage.validateOnPage()
});

Then(/^user login using username "(.*)" and password "(.*)"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

Then(/^user click cart button"$/, async () => {
    await sauceDashboardPage.clickCartButton()
});

Then(/^user click cart button"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

Then(/^user should redirect to cart page$/, async () => {
    await CartPage.validateOnPage()
});

Then('user should see empty cart', () => {
	
})

When('user click cart button', () => {

})

Then('user add {string} to cart', (s) => {

})

Then('user should see {string} on cart page', (s) => {

})

