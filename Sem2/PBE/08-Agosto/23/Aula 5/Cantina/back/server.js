const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'cantina'
});

const create = (req, res) => {
    let produto = req.query.produto;
    let vendedor = req.query.vendedor;
    let descricao = req.query.descricao;
    let custo = req.query.custo;
    let preco = req.query.preco

    let query = `INSERT INTO vendas (produto, vendedor, descricao, custo, preco) value`;
    query += `('${produto}', '${vendedor}', '${descricao}', '${custo}', '${preco}')`;

    con.query(query, (err, result) => {
        if (err) {
            console.log("Erro ao cadastrar uma venda");
        } else {
            console.log("Venda cadastrada com sucesso!");
        }
    });
}

const app = express();

app.use(express.json());
app.use(cors());

const teste = (req, res) => {
    console.log("Funcionando");
}

app.get("/", teste);
app.post("/vendas", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})