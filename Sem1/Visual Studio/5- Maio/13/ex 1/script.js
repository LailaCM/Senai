document.getElementById('Investimentoform').addEventListener('submit',function(event){
    event.preventDefault();

    var nome_investimento = document.getElementById('nome_investimento').value;
    var data_operacao = document.getElementById('data_operacao').value;
    var valor_investido = document.getElementById('valor_investido').value;
    var nome_daacao = document.getElementById('nome_daacao').value;
    var preco_entrada = document.getElementById('preco_entrada').value;
    var meta_ganho = document.getElementById('meta_ganho').value;
    var limite_perda = document.getElementById('limite_perda').value;

    var mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = `
    <p><strong>Investimento:</strong> ${nome_investimento}</p>
    <p><strong>Data de início:</strong> ${data_operacao}</p>
    <p><strong>Valor investido:</strong> ${nome_daacao}</p>
    <p><strong>Nome da ação:</strong> ${nome_investimento}</p>
    <p><strong>Preço da entrada:</strong> ${preco_entrada}</p>
    <p><strong>Meta de ganho:</strong> ${meta_ganho}</p>
    <p><strong>Limite de perda:</strong> ${limite_perda}</p>

    `

})