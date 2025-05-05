function calcularResultado() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        mensagem.innerHTML = "Por favor, insira notas válidas entre 0 e 10.";
        return;
    }

    let media = (nota1 + nota2) / 2;

    let status;
    if (media === 10) {
        status = "Aprovado com Distinção";
    } else if (media >= 7) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    } 

    mensagem.innerHTML = `A média do aluno é ${media.toFixed(2)}. <br> Status: ${status}.`;
}
