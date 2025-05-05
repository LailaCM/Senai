function Resultado() {
    var nome = document.getElementById("nome").value
    let p = Number(document.getElementById("p").value);
    let h = Number(document.getElementById("h").value);
    var Resultado = document.querySelector("#Resultado");
    var IMC
    var situacao
    //IMC = p/(Math.pow(h, 2));

    // IMC = p/(h^2);
    IMC = p/(Math.pow(h,2))
    
    console.log("O imc do(a)", nome, "é de:", IMC);

    if (IMC <= 18.5) {
        situacao = 'Peso normal';
    } else if (IMC >= 18.6 && IMC <= 24.9) {
        situacao = 'Peso normal';
    } else if (IMC >= 25 && IMC <= 29.9) {
        situacao = 'Excesso de peso';
    } else if (IMC >= 30 && IMC <= 34.9) {
        situacao = 'Obesidade classe I';
    } else if (IMC >= 35 && IMC <= 39.9) {
        situacao = 'Obesidade classe II';
    } else if (IMC >= 40) {
        situacao = 'Obesidade classe III';
    }


    Resultado.innerHTML += `
        <tbody>
            <tr>
            <td>${nome}</td>
            <td>${p}</td>
            <td>${h}</td>
            <td>${IMC.toFixed(2)}</td>
            <td>${situacao}</td>
            </tr>
        </tbody>`
}
