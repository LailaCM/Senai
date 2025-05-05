const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/compararnumeros', (req, res) => {
    const { numero1, numero2 } = req.body;

    if (!Number.isInteger(numero1) || !Number.isInteger(numero2)) {
        return res.status(400).json({
            error: "Ambos os valores devem ser números inteiros.",
        });
    }

    let maior = numero1 > numero2 ? numero1 : numero2;
    let menor = numero1 < numero2 ? numero1 : numero2;

    res.json({
        maior,
        menor,
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
