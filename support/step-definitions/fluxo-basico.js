const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const { generateCPF } = require('../../support/date')

const initScreen = require('../screeenobject/init.screen')
const seusDadosScreen = require('../screeenobject/seus-dados.screen')

Given('que o usuário acessou a página', async () => {
    await initScreen.btnCreate.click()
})

When('preencho o formulário com valores válidos', async () => {
    await seusDadosScreen.createUser({
        name: "Teste",
        cpf: generateCPF(),
        email: "teste@teste.com",
        phone: "88921235623",
        birth: "12/09/2012"
    });
})

Then('o sistema deve redirecionar para tela de senha', async () => {
    await expect(seusDadosScreen.verifyTitle("Crie sua senha")).toBeDisplayed()
})