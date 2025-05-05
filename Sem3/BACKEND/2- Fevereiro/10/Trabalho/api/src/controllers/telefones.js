const con = require('../connect');

function create(req, res) {
    const { telefone, nome, obs } = req.body;
    const sql = `INSERT INTO telefones (telefone, nome, obs) VALUES ('${telefone}', '${nome}', '${obs}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar telefone');
        } else {
            res.status(201).json('Telefone cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM telefones';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar telefone');
        } else {
            res.status(200).json(result);
        }
    });
}
const update = (req, res) => {
    const id = req.params.id;
    let telefone = req.body.telefone;
    let nome = req.body.nome;
    let obs = req.body.obs;

    let query = `UPDATE telefones SET telefone ='${telefone}', nome = '${nome}', obs = '${obs}' WHERE telefone_id = '${id}'`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM telefones WHERE telefone_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = { create, read, update, deletar };