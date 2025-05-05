const con = require('../connect/banco').con;

const create = (req, res) => {
    let sala_id = req.body.sala_id;
    let jogador_id = req.body.jogador_id;
    let modalidade_id = req.body.modalidade_id;


    let query = 'INSERT INTO destaques (sala_id, jogador_id, modalidade_id) VALUES'
    query += `('${sala_id}','${jogador_id}','${modalidade_id}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM destaques', (err, result) => {
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