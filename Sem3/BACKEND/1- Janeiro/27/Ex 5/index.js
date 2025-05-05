const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/ordenarnumeros', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length !== 5) {
        return res.status(400).json({
            error: "Você deve enviar exatamente 5 números inteiros em um array.",
        });
    }

    if (!numeros.every(Number.isInteger)) {
        return res.status(400).json({
            error: "Todos os valores devem ser números inteiros.",
        });
    }

    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({
        numerosOrdenados,
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
