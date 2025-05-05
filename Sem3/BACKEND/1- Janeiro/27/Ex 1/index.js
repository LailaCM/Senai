const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/inss', (req, res) => {
    const { salario } = req.body;

    if (!salario || salario <= 0) {
        return res.status(400).json({ error: "Salário inválido ou não informado" });
    }

    let desconto = 0;

    if (salario <= 1212.00) {
        desconto = salario * 0.075; 
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09; 
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12; 
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14; 
    } else { 
        desconto = 7087.22 * 0.14; 
    }

    const salarioComDesconto = salario - desconto;

    res.json({
        salarioOriginal: salario.toFixed(2),
        desconto: desconto.toFixed(2),
        salarioFinal: salarioComDesconto.toFixed(2)
    });
});

// Inicia o servidor
app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
