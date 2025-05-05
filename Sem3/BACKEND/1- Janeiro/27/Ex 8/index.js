const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/situacaoaluno', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;

    if (
        typeof nota1 !== 'number' || nota1 < 0 || nota1 > 10 ||
        typeof nota2 !== 'number' || nota2 < 0 || nota2 > 10 ||
        typeof nota3 !== 'number' || nota3 < 0 || nota3 > 10
    ) {
        return res.status(400).json({
            error: "Todas as notas devem ser números entre 0 e 10.",
        });
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao;
    if (media >= 6) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    res.json({
        media: media.toFixed(2),
        situacao,
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
