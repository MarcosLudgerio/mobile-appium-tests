const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const initScreen = require('../screeenobject/init.screen')
Given(/^I am on the (\w+) page$/, async (page) => {
    expect(initScreen.btnCreate).toBeDisplayed()
})

When('I click on button', async () => {
    await initScreen.btnCreate.click()
})

Then('The screen data should be displayed', async () => {
    await expect(initScreen.title).toBeDisplayed()
})