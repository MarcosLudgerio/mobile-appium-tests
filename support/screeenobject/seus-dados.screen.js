const { $ } = require('@wdio/globals')
const Screen = require('./screen');
class SeusDadosScreen extends Screen {

    get title() {
        return $('//android.widget.TextView[@text="Seus dados"]');
    }

    get inputNomeCompleto() {
        return $('//android.widget.EditText[@text="Seu nome completo*"]');
    }

    get inputCpf() {
        return $('//android.widget.EditText[@text="Seu CPF*"]');
    }

    get inputDataNascimento() {
        return $('//android.widget.EditText[@text="Sua data de nascimento*"]');
    }

    get inputEmail() {
        return $('//android.widget.EditText[@text="Seu email*"]');
    }

    get inputTelefone() {
        return $('//android.widget.EditText[@text="Seu DDD + Telefone"]');
    }

    get btnAvancar() {
        return $('~Avançar');
    }
    
    titlePage(title){
        super.verifyTitle(title)
    }

    async createUser(data) {
        await this.inputNomeCompleto.setValue(data.name)
        await this.inputCpf.setValue(data.cpf)
        await this.inputDataNascimento.setValue(data.birth)
        await this.inputEmail.setValue(data.email)
        await this.inputTelefone.setValue(data.phone)
        await this.btnAvancar.click()
    }


}

module.exports = new SeusDadosScreen();
