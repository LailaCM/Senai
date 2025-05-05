function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.innerHTML = "Por favor, digite um número inteiro maior que 0.";
        return;
    }

    let ehPrimo = numero > 1;
    let divisores = [];

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    if (divisores.length === 2) {
        mensagem.innerHTML = `O número ${numero} é primo!`;
    } else {
        mensagem.innerHTML = `O número ${numero} não é primo. Ele é divisível por: ${divisores.join(', ')}.`;
    }
}
