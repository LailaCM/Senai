function calcularsalario() {
    let salario = Number(document.getElementById('salario').value);
    let filhos = Number(document.getElementById('filhos').value);
    let resultado = document.getElementById('resultado');
    let valor = 0;
    let acrescimo = 0;
    if (salario < 2000)
        acrescimo = filhos * 45;
        valor = salario + acrescimo;
    resultado.innerHTML = `O acrescimo será de R$ ${acrescimo.toFixed(2)} <br>Seu salário final é R$ ${valor.toFixed(2)}`;
}