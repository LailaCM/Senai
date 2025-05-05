const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco || preco <= 0) {
        return res.status(400).json({ error: "Nome da mercadoria e preço válido são obrigatórios." });
    }

    let percentualAumento = preco < 1000 ? 5 : 7;
    const aumento = (preco * percentualAumento) / 100;
    const novoPreco = preco + aumento;

    res.json({
        nome,
        precoOriginal: preco.toFixed(2),
        percentualAumento: `${percentualAumento}%`,
        novoPreco: novoPreco.toFixed(2),
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
