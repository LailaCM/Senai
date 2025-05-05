const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/maiornumero', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length !== 6) {
        return res.status(400).json({
            error: "Você deve enviar exatamente 6 números inteiros em um array.",
        });
    }

    if (!numeros.every(Number.isInteger)) {
        return res.status(400).json({
            error: "Todos os valores devem ser números inteiros.",
        });
    }

    const maiorNumero = Math.max(...numeros);

    res.json({
        numeros,
        maiorNumero,
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
