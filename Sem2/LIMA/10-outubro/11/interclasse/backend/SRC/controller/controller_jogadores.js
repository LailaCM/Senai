const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome= req.body.nome;
    let idade = req.body.idade;
    let sala_id= req.body.sala_id;
    

let query = 'INSERT INTO jogadores (nome, idade, sala_id) VALUES'
query += `('${nome}', '${idade}', '${sala_id}')`;
con.query(query, (err, result) => {
    if(err){
        res.status(500).json(err)
    } else{
        res.status(201).json(result)
    }
})

}

const read = (req, res) => {
    con.query('SELECT * FROM jogadores', (err, result) => {
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