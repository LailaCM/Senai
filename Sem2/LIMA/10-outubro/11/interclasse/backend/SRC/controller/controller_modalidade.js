const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome= req.body.nome;

let query = 'INSERT INTO modalidade (nome) VALUES'
query += `('${nome}')`;
con.query(query, (err, result) => {
    if(err){
        res.status(500).json(err)
    } else{
        res.status(201).json(result)
    }
})

}

const read = (req, res) => {
    con.query('SELECT * FROM modalidade', (err, result) => {
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