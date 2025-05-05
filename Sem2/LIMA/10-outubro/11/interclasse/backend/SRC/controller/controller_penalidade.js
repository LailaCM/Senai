const con = require('../connect/banco').con;

const create = (req, res) => {
    let jogador_id = req.body.jogador_id;
    let sala_id = req.body.sala_id;
    let modalidade_id = req.body.modalidade_id;
    let penalidade = req.body.penalidade;


    let query = 'INSERT INTO penalidade (jogador_id, sala_id, modalidade_id, penalidade) VALUES'
    query += `('${jogador_id}','${sala_id}','${modalidade_id}','${penalidade}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM penalidade', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read
}