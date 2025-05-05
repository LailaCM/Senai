function encontrarPrimos() {
    let n = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(n) || n < 1) {
        mensagem.innerHTML = "Por favor, digite um número inteiro maior que 0.";
        return;
    }

    let primos = [];
    let totalDivisoes = 0;

    for (let num = 2; num <= n; num++) {
        let ehPrimo = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            totalDivisoes++;
            if (num % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(num);
        }
    }

    mensagem.innerHTML = `Números primos entre 1 e ${n}: ${primos.join(', ')}<br>`;
    mensagem.innerHTML += `Total de divisões executadas: ${totalDivisoes}`;
}
