const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const { generateCPF } = require('../../support/date')

const crieSuaSenha = require('../screeenobject/crie-sua-senha.screen')
const seusDadosScreen = require('../screeenobject/seus-dados.screen')
const initScreen = require('../screeenobject/init.screen')

Given('que o usuário acessou a página de criar senha', async () => {
    await initScreen.btnCreate.click()
    await seusDadosScreen.createUser({
        name: "Teste",
        cpf: generateCPF(),
        email: "teste@teste.com",
        phone: "88921235623",
        birth: "12/09/2012"
    });
})

When('preencho o campo senha e confirmar senha', async () => {
    senha = "Testando123!"
    confirmacao = "Testando123!"
    await crieSuaSenha.criarSenha({senha, confirmacao})
})

Then('o sistema deve redirecionar para a tela de esolha a confirmação', async () => {
    await expect(seusDadosScreen.verifyTitle("Confirmação")).toBeDisplayed()
})