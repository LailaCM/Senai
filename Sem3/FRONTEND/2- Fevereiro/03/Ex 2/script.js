function triangulo() {
  let lado1 = Number(document.getElementById('lado1').value);
  let lado2 = Number(document.getElementById('lado2').value);
  let lado3 = Number(document.getElementById('lado3').value);
  let resultado = document.getElementById('resultado');

  if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    resultado.innerHTML = "Por favor, insira valores para os três lados.";
    return;
  }
  if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    resultado.innerHTML = "Os valores informados não formam um triângulo.";
    return;
  }
  if (lado1 === lado2 && lado2 === lado3) {
    resultado.innerHTML = "O triângulo é EQUILÁTERO.";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    resultado.innerHTML = "O triângulo é ISÓSCELES.";
  } else {
    resultado.innerHTML = "O triângulo é ESCALENO.";
  }
}