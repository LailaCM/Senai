const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calculardesconto', (req, res) => {
    const { tipoPeca, preco } = req.body;

    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({
            error: "O preço deve ser um número positivo.",
        });
    }

    if (!['camisa', 'bermuda', 'calca'].includes(tipoPeca.toLowerCase())) {
        return res.status(400).json({
            error: "O tipo de peça deve ser 'camisa', 'bermuda' ou 'calca'.",
        });
    }

    const descontos = {
        camisa: 0.2,
        bermuda: 0.1,
        calca: 0.15,
    };

    const desconto = preco * descontos[tipoPeca.toLowerCase()];
    const precoFinal = preco - desconto;

    res.json({
        desconto: desconto.toFixed(2),
        precoFinal: precoFinal.toFixed(2),
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
