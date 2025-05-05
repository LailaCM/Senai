function compararNumeros() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Por favor, insira dois números válidos.";
    return;
  }

  let maior, menor;
  if (num1 > num2) {
    maior = num1;
    menor = num2;
  } else if (num1 < num2) {
    maior = num2;
    menor = num1;
  } else {
    document.getElementById("resultado").innerText = "Os números são iguais.";
    return;
  }

  document.getElementById("resultado").innerHTML = `<p>Maior número: ${maior} <br> Menor número: ${menor}</p>
  `;
}