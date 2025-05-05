function calcularMedia() {
  let nota1 = Number(document.getElementById('nota1').value);
  let nota2 = Number(document.getElementById('nota2').value);
  let nota3 = Number(document.getElementById('nota3').value);
  let resultado = document.getElementById('resultado');

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota1 > 10 || nota2 > 10 || nota3 > 10) {
    resultado.innerHTML = "Por favor, insira notas válidas (0 a 10).";
    return;
  }

  let media = (nota1 + nota2 + nota3) / 3;

  if (media >= 6) {
    resultado.innerHTML = `Média: ${media.toFixed(2)}<br>Situação: APROVADO.`;
  } else if (media >= 4) {
    resultado.innerHTML = `Média: ${media.toFixed(2)}<br>Situação: RECUPERAÇÃO.`;
  } else {
    resultado.innerHTML = `Média: ${media.toFixed(2)}<br>Situação: REPROVADO.`;
  }
}