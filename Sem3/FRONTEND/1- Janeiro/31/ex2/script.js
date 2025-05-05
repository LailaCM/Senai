function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.innerHTML = "Por favor, digite um número inteiro maior que 0.";
        return;
    }

    let ehPrimo = numero > 1;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        mensagem.innerHTML = `O número ${numero} é primo!`;
    } else {
        mensagem.innerHTML = `O número ${numero} não é primo.`;
    }
}
