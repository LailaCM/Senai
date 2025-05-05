function calcularMediaIdade() {
    let entrada = document.getElementById('idades').value;
    let mensagem = document.getElementById('mensagem');

    let idades = entrada.split(',').map(n => parseInt(n.trim()));

    if (idades.some(isNaN) || idades.some(n => n < 0) || idades.length === 0) {
        mensagem.innerHTML = "Por favor, insira apenas idades válidas (números inteiros positivos) separados por vírgula.";
        return;
    }

    let soma = idades.reduce((acc, idade) => acc + idade, 0);
    let media = soma / idades.length;

    let classificacao;

    if (media >= 0 && media <= 25) {
        classificacao = "Turma Jovem";
    } else if (media <= 60) {
        classificacao = "Turma Adulta";
    } else {
        classificacao = "Turma Idosa";
    }

    mensagem.innerHTML = `A classificação é ${classificacao}.`;
}
