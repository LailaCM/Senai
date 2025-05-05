const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
});

const create = (req, res) => {
    let livro = req.body.livro;
    let autor = req.body.autor;
    let descricao = req.body.descricao;
    let datasp = req.body.datasp;

    let query = `INSERT INTO estante (livro, autor, descricao, datasp) value`;
    query += `('${livro}', '${autor}', '${descricao}', '${datasp}')`;

    con.query(query, (err, result) => {
        if (err) {
            console.log("Erro ao cadastrar um livro");
        } else {
            console.log("Livro cadastrado com sucesso!");
        }
    });
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

const teste = (req, res) => {
    console.log("Funcionando");
}

app.get("/", teste);
app.post("/biblioteca", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})