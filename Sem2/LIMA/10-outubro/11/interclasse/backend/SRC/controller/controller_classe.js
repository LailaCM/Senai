const con = require('../connect/banco').con;

const create = (req, res) => {
    let sala = req.body.sala;
    let q_ouro = req.body.q_ouro;
    let q_prata = req.body.q_prata;
    let q_bronze = req.body.q_bronze;
    

let query = 'INSERT INTO classe (sala, q_ouro, q_prata, q_bronze) VALUES'
query += `('${sala}', '${q_ouro}', '${q_prata}', '${q_bronze}')`;
con.query(query, (err, result) => {
    if(err){
        res.status(500).json(err)
    } else{
        res.status(201).json(result)
    }
})

}

const read = (req, res) => {
    con.query('SELECT * FROM classe', (err, result) => {
        if(err){
            res.status(500).json(err)
        } else{
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read
}