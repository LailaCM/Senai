function calcularReajuste() {
  let salarioAtual = parseFloat(document.getElementById('salario').value);
  let mensagem = document.getElementById('mensagem');
  let percentualAumento = 0;

  if (isNaN(salarioAtual) || salarioAtual <= 0) {
      mensagem.innerHTML = "Por favor, insira um salário válido.";
      return;
  }

  if (salarioAtual >= 1500 && salarioAtual < 1750) {
      percentualAumento = 15;
  } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
      percentualAumento = 12;
  } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
      percentualAumento = 9;
  } else if (salarioAtual >= 3000) {
      percentualAumento = 6;
  } else {
      mensagem.innerHTML = "Salário abaixo de R$ 1.500,00 não recebe reajuste.";
      return;
  }

  let aumento = salarioAtual * (percentualAumento / 100);
  let novoSalario = salarioAtual + aumento;

  mensagem.innerHTML = `
      Salário Atual: R$ ${salarioAtual.toFixed(2)}<br>
      Percentual de Aumento: ${percentualAumento}%<br>
      Valor do Aumento: R$ ${aumento.toFixed(2)}<br>
      Novo Salário:R$ ${novoSalario.toFixed(2)}
  `;
}
