function iniciarVotacao() {
    let totalEleitores = parseInt(document.getElementById('eleitores').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(totalEleitores) || totalEleitores < 1) {
        mensagem.innerHTML = "Por favor, insira um número válido de eleitores.";
        mensagem.style.color = "red";
        return;
    }

    let votos = { candidato1: 0, candidato2: 0, candidato3: 0 };
    
    for (let i = 1; i <= totalEleitores; i++) {
        let voto = parseInt(prompt(`Eleitor ${i}/${totalEleitores} - Escolha seu candidato:\n1 - Candidato A\n2 - Candidato B\n3 - Candidato C`));
        
        if (voto === 1) {
            votos.candidato1++;
        } else if (voto === 2) {
            votos.candidato2++;
        } else if (voto === 3) {
            votos.candidato3++;
        } else {
            alert("Voto inválido! Por favor, insira 1, 2 ou 3.");
            i--;
        }
    }

    mensagem.innerHTML = `Resultado da Eleição:<br>Candidato A: ${votos.candidato1} votos<br>Candidato B: ${votos.candidato2} votos<br>Candidato C: ${votos.candidato3} votos`;
}
