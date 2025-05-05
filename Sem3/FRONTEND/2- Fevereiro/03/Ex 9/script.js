function calcularDesconto() {
  let produto = document.getElementById('produto').value;
  let preco = Number(document.getElementById('preco').value);
  let resultado = document.getElementById('resultado');

  if (isNaN(preco) || preco <= 0) {
      resultado.innerHTML = "Por favor, insira um preço válido.";
      return;
  }

  let desconto = 0;

  if (produto === "camisa") {
      desconto = 0.20;
  } else if (produto === "bermuda") {
      desconto = 0.10;
} else if (produto === "calca") {
      desconto = 0.15;
  }

  let valorDesconto = preco * desconto;
  let valorFinal = preco - valorDesconto;

  resultado.innerHTML = 
  `Produto: ${produto.charAt(0).toUpperCase() + produto.slice(1)}<br>` +             
  `Preço original: R$ ${preco.toFixed(2)}<br>` +         
  `Desconto: R$ ${valorDesconto.toFixed(2)} (${(desconto * 100).toFixed(0)}%)<br>` +         
  `Valor final: R$ ${valorFinal.toFixed(2)}`;
}