function reajustar() {
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let valor = 0;
    if (preco < 1000){
        valor = preco * 5 / 100;
    }else {
        valor = preco * 7 / 100;
    }
    let precofinal = Number(valor + preco);
    resultado.innerHTML = `Preço final R$ ${precofinal.toFixed(2)}`;
}