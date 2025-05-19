Feature: 3180 - Registro de Dados Básicos

  Scenario: Cadastrar usuário com sucesso
    Given que o usuário acessou a página
    When preencho o formulário com valores válidos
    Then o sistema deve redirecionar para tela de senha
