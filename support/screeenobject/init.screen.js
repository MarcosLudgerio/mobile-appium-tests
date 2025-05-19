const { $ } = require('@wdio/globals')
const Screen = require('./screen');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InitScreen extends Screen {
    /**
     * define selectors using getter methods
     */
    get btnCreate() {
        return $('~Cadastrar');
    }

    get btnEntrar() {
        return $('~Entrar');
    }

    get title() {
        return $('//android.widget.TextView[@text="Seus dados"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    pressOn(button) {
        super.pressOn(button);
    }
}

module.exports = new InitScreen();
