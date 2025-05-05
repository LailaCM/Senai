function Cadastrar(){ 
    var nome = document.getElementById("nome").value
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    var m = document.querySelector("#m");
    var tabela_resultado = document.querySelector("#tabela_resultado");
    let media;
    let situacao;
    media = (n1+n2+n3)/3;
    console.log("A média do", nome,"é de:",media);

    if(media<=50){
        situacao='Reprovado'
    } else {
        situacao='Aprovado'
    }
    tabela_resultado.innerHTML+=`
        <tbody>
            <tr>
            <td>${nome}</td>
            <td>${n1}</td>
            <td>${n2}</td>
            <td>${n3}</td>
            <td>${media.toFixed(2)}</td>
            <td>${situacao}</td>
            </tr>
        </tbody>`
}