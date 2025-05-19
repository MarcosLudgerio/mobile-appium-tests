const formatDate = (date) => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
};

const generateCPF = () => {
  const randomDigits = () => Math.floor(Math.random() * 9);
  let cpf = [];

  // Gera os primeiros 9 dígitos aleatórios
  for (let i = 0; i < 9; i++) {
    cpf.push(randomDigits());
  }

  // Função para calcular os dígitos verificadores
  function calcularDigito(base) {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += base[i] * (base.length + 1 - i);
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  // Calcula o primeiro dígito verificador
  cpf.push(calcularDigito(cpf));

  // Calcula o segundo dígito verificador
  cpf.push(calcularDigito(cpf));

  // Formata o CPF para o padrão XXX.XXX.XXX-XX
  return cpf.join("");
};

module.exports = { generateCPF, formatDate };
