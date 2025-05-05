function mostrarDiaSemana() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    let diasSemana = {
        1: "Domingo",
        2: "Segunda-feira",
        3: "Terça-feira",
        4: "Quarta-feira",
        5: "Quinta-feira",
        6: "Sexta-feira",
        7: "Sábado"
    };

    if (diasSemana[numero]) {
        mensagem.innerHTML = `O número ${numero} corresponde a ${diasSemana[numero]}.`;
    } else {
        mensagem.innerHTML = "Valor inválido! Digite um número de 1 a 7.";
    }
}
