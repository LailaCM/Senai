function calculoimc() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let mensagem = document.getElementById('mensagem');

    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        mensagem.innerHTML = 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem.innerHTML = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem.innerHTML = 'Obesidade Grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        mensagem.innerHTML = 'Obesidade Grau II (severa)';
    } else {
        mensagem.innerHTML = 'Obesidade Grau III (mórbida)';
    }
}