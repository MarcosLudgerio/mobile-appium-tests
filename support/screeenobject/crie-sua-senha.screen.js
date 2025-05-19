const { $ } = require('@wdio/globals')
const Screen = require('./screen');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CrieSuaSenhaScreen extends Screen {
    /**
     * define selectors using getter methods
     */
    get inputNovaSenha() {
        return $('//android.widget.EditText[@text="Nova Senha"]');
    }

    get inputConfirmarNovaSenha() {
        return $('//android.widget.EditText[@text="Confirmar Nova Senha"]');
    }

    get title() {
        return $('//android.widget.TextView[@text="Crie sua senha"]');
    }

    get btnAvancar() {
        return $('~Avançar');
    }

    async criarSenha(data) {
        await this.inputNovaSenha.setValue(data.senha)
        await this.inputConfirmarNovaSenha.setValue(data.confirmacao)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    pressOn(button) {
        super.pressOn(button);
    }
}

module.exports = new CrieSuaSenhaScreen();
