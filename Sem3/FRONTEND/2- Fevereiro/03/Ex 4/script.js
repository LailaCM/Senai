function encontrarMaior() {
  const numeros = [
    parseInt(document.getElementById("num1").value),
    parseInt(document.getElementById("num2").value),
    parseInt(document.getElementById("num3").value),
    parseInt(document.getElementById("num4").value),
    parseInt(document.getElementById("num5").value),
    parseInt(document.getElementById("num6").value)
  ];
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Por favor, insira dois números válidos.";
    return;
  }
  
  const maior = Math.max(...numeros);
  document.getElementById('resultado').innerText = `O maior número é: ${maior}`;
}