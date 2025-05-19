const { $ } = require('@wdio/globals')
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Screen {
    verifyTitle(title) {
        return $(`//android.widget.TextView[@text="${title}"]`);
    }
    pressOn(locator) {
        $(locator).click()
    }
}
