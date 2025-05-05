function calcularINSS() {
    const salario = parseFloat(document.getElementById('salario').value);
    let desconto = 0;
    if (salario <= 1212) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = 7087.22 * 0.14;
    }
    let salarioFinal = salario - desconto;
    resultado.innerHTML = `<p>Desconto INSS: R$ ${desconto.toFixed(2)}<br>Salário Final: R$ ${salarioFinal.toFixed(2)}</p>`;
}