const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/reajustesalarial', (req, res) => {
    const { salarioAtual } = req.body;

    if (typeof salarioAtual !== 'number' || salarioAtual <= 0) {
        return res.status(400).json({
            error: "O salário atual deve ser um número positivo.",
        });
    }

    let percentualAumento = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        percentualAumento = 15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        percentualAumento = 12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        percentualAumento = 9;
    } else if (salarioAtual >= 3000) {
        percentualAumento = 6;
    }

    const aumento = (salarioAtual * percentualAumento) / 100;
    const novoSalario = salarioAtual + aumento;

    res.json({
        salarioAtual: salarioAtual.toFixed(2),
        percentualAumento: `${percentualAumento}%`,
        aumento: aumento.toFixed(2),
        novoSalario: novoSalario.toFixed(2),
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
