function zeroamil() {
    let numero = parseFloat(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (numero <= 0 || numero >= 1000) {
        mensagem.innerHTML = "Digite somente números entre 0 e 1000, você é burro?";
    } else {
        mensagem.innerHTML = "Obrigado por respeitar.";
    }
}