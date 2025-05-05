document.addEventListener("DOMContentLoaded", () => {
  const palavra = "front"; 
  const palavrasTentadas = [[]];
  let espacoDisponivel = 1;

  criarQuadrados();

  function criarQuadrados() {
    const tabuleiro = document.getElementById("tabuleiro");
    for (let i = 0; i < 30; i++) {
      const quadrado = document.createElement("div");
      quadrado.classList.add("square");
      quadrado.setAttribute("id", i + 1);
      tabuleiro.appendChild(quadrado);
    }
  }

  document.addEventListener("keydown", (evento) => {
    const tecla = evento.key.toLowerCase();
    if (/^[a-z]$/.test(tecla)) handleInput(tecla);
    else if (tecla === "enter") handleSubmit();
    else if (tecla === "backspace") handleDelete();
  });

  function handleInput(letra) {
    const palavraAtual = palavrasTentadas[palavrasTentadas.length - 1];
    if (palavraAtual.length < 5) {
      palavraAtual.push(letra);
      document.getElementById(String(espacoDisponivel)).textContent = letra;
      espacoDisponivel++;
    }
  }

  function handleSubmit() {
    const palavraAtual = palavrasTentadas[palavrasTentadas.length - 1];
    if (palavraAtual.length !== 5) return alert("A palavra deve ter 5 letras!");

    const palavraString = palavraAtual.join("");
    colorirQuadrados(palavraAtual);

    if (palavraString === palavra) alert("Parabéns, você acertou!");
    else if (palavrasTentadas.length === 6) alert(`Você perdeu! A palavra era: ${palavra}`);

    palavrasTentadas.push([]);
  }

  function colorirQuadrados(palavraAtual) {
    const palavraCopia = palavra.split("");
    palavraAtual.forEach((letra, index) => {
      const quadrado = document.getElementById(String((palavrasTentadas.length - 1) * 5 + index + 1));
      if (letra === palavra[index]) {
        quadrado.style.backgroundColor = "DarkGreen";
        palavraCopia[index] = null;
      } else if (palavraCopia.includes(letra)) {
        quadrado.style.backgroundColor = "Goldenrod";
        palavraCopia[palavraCopia.indexOf(letra)] = null;
      } else {
        quadrado.style.backgroundColor = "gray";
      }
    });
  }

  function handleDelete() {
    const palavraAtual = palavrasTentadas[palavrasTentadas.length - 1];
    if (palavraAtual.length > 0) {
      palavraAtual.pop();
      espacoDisponivel--;
      document.getElementById(String(espacoDisponivel)).textContent = "";
    }
  }
});