function calcularMedia() {
    let entrada = document.getElementById('notas').value;
    let mensagem = document.getElementById('mensagem');

    let notas = entrada.split(',').map(n => parseFloat(n.trim()));

    if (notas.some(isNaN) || notas.length === 0) {
        mensagem.innerHTML = "Por favor, insira apenas números válidos separados por vírgula.";
        return;
    }

    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    mensagem.innerHTML = `A média aritmética das ${notas.length} notas é: ${media.toFixed(2)}`;
}
