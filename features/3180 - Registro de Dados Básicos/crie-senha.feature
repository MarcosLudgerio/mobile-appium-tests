Feature: 3180 - Registro de Dados Básicos

  Scenario: Cadastrar senha com sucesso
    Given que o usuário acessou a página de criar senha
    When preencho o campo senha e confirmar senha
    Then o sistema deve redirecionar para a tela de esolha a confirmação
