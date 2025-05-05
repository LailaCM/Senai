// Importa o express
const express = require('express');

// Criar Lista
var lista = [
    {
        "id": 1,
        "produto": "Coca-cola",
        "preco": 5.00,
        "quantidade": 100,
        "data": new Date()
    },
    {
        "id": 2,
        "produto": "Pão",
        "preco": 3.00,
        "quantidade": 200,
        "data": new Date()
    },
    {
        "id": 3,
        "produto": "Tomate",
        "preco": 2.50,
        "quantidade": 750,
        "data": new Date()
    },
    {
        "id": 4,
        "produto": "Feijão",
        "preco": 6.00,
        "quantidade": 150,
        "data": new Date()
    },
    {
        "id": 5,
        "produto": "Arroz",
        "preco": 4.00,
        "quantidade": 300,
        "data": new Date()
    }
]

// Cria uma instância do express
const app = express();

// Cria uma rota de server.js
app.get('/', (req, res) => {
    let hypertextHTML = "<h1>Lista de produtos</h1>";

    // Formulário
    hypertextHTML += "<form action='/Inserir' method='get'>";
    hypertextHTML += "<input type='text' name='id' placeholder='id'>";
    hypertextHTML += "<input type='text' name='produto' placeholder='produto'>";
    hypertextHTML += "<input type='text' name='preco' placeholder='preço'>";
    hypertextHTML += "<input type='text' name='quantidade' placeholder='quantidade'>";
    hypertextHTML += "<input type='submit' value='Inserir'>";
    hypertextHTML += "</form>";

    // Lista de produtos
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const total = item.preco * item.quantidade; // Calcular o ganho total para o item

        hypertextHTML += "<hr>";
        hypertextHTML += `<p>Id: ${item.id}</p>`;
        hypertextHTML += `<p>Produto: ${item.produto}</p>`;
        hypertextHTML += `<p>Preço: R$ ${item.preco.toFixed(2)}</p>`;
        hypertextHTML += `<p>Quantidade: ${item.quantidade}</p>`;
        hypertextHTML += `<p>Ganho total: R$ ${total.toFixed(2)}</p>`;
        hypertextHTML += `<p>Data: ${new Date()}</p>`;
    }

    // Estatísticas
    let quantidadeTotal = 0;
    let valorTotal = 0;
    let dataUltimoProduto = new Date(0); // Data inicial muito antiga
    let somaPrecos = 0;
    let produtoMaisCaro = null;
    let produtoMaisBarato = null;

    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        quantidadeTotal += item.quantidade;
        valorTotal += item.preco * item.quantidade;
        somaPrecos += item.preco;

        if (item.data > dataUltimoProduto) {
            dataUltimoProduto = item.data;
        }

        if (!produtoMaisCaro || item.preco > produtoMaisCaro.preco) {
            produtoMaisCaro = item;
        }

        if (!produtoMaisBarato || item.preco < produtoMaisBarato.preco) {
            produtoMaisBarato = item;
        }
    }

    const mediaPrecos = lista.length > 0 ? somaPrecos / lista.length : 0;

    hypertextHTML += "<hr>";
    hypertextHTML += "<h2>Estatísticas</h2>";
    hypertextHTML += `<p>Quantidade total de produtos: ${quantidadeTotal}</p>`;
    hypertextHTML += `<p>Valor total dos produtos: R$ ${valorTotal.toFixed(2)}</p>`;
    hypertextHTML += `<p>Data do último produto inserido: ${dataUltimoProduto.toLocaleDateString()}</p>`;
    hypertextHTML += `<p>Média aritmética dos preços dos produtos: R$ ${mediaPrecos.toFixed(2)}</p>`;
    hypertextHTML += `<p>Produto mais caro: ${produtoMaisCaro ? produtoMaisCaro.produto + " (R$ " + produtoMaisCaro.preco.toFixed(2) + ")" : "Nenhum produto"}</p>`;
    hypertextHTML += `<p>Produto mais barato: ${produtoMaisBarato ? produtoMaisBarato.produto + " (R$ " + produtoMaisBarato.preco.toFixed(2) + ")" : "Nenhum produto"}</p>`;

    res.send(hypertextHTML);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Respondendo na porta http://localhost:3000');
});
