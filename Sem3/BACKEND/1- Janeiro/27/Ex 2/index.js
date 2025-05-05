const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/triangulo', (req, res) => {
    const { a, b, c } = req.body;

    if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0) {
        return res.status(400).json({ error: "Todos os lados devem ser valores positivos e maiores que zero." });
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        return res.status(400).json({ error: "Os valores fornecidos não formam um triângulo." });
    }

    let tipoTriangulo;
    if (a === b && b === c) {
        tipoTriangulo = "EQUILÁTERO";
    } else if (a === b || b === c || a === c) {
        tipoTriangulo = "ISÓSCELES";
    } else {
        tipoTriangulo = "ESCALENO";
    }

    res.json({ tipoTriangulo });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
