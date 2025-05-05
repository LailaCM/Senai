const con = require('../connect/banco').con;

const create = (req, res) => {
    let data_jogo = req.body.data_jogo;
    let modalidade_id = req.body.modalidade_id;
    let sala1_id = req.body.sala1_id;
    let sala2_id = req.body.sala2_id;
    let vencedor_id = req.body.vencedor_id;
    let placar = req.body.placar;


    let query = 'INSERT INTO jogos (data_jogo, modalidade_id, sala1_id, sala2_id, vencedor_id, placar) VALUES'
    query += `('${data_jogo}','${modalidade_id}','${sala1_id}','${sala2_id}','${vencedor_id}','${placar}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM jogos', (err, result) => {
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