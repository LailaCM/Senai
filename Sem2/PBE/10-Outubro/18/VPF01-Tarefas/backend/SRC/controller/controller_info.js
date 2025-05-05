const con = require('../connect/banco').con;

const create = (req, res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    let data_cadastro = req.body.data_cadastro;
    let nome = req.body.nome;
    

let query = 'INSERT INTO info (titulo, descricao,data_cadastro, nome) VALUES'
query += `('${titulo}', '${descricao}', '${data_cadastro}', '${nome}')`;
con.query(query, (err, result) => {
    if(err){
        res.status(500).json(err)
    } else{
        res.status(201).json(result)
    }
})

}

const read = (req, res) => {
    con.query('SELECT * FROM info', (err, result) => {
        if(err){
            res.status(500).json(err)
        } else{
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM info WHERE id = ?';
    con.query(query, [id], (err, result) => {
        if(err){
            res.status(500).json(err)
        } else{
            res.status(201).json(result)
        }
    })
}




module.exports = {
    create,
    read,
    deletar
}