const con = require('../banco/connect.js').con;

const create = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiuclo;
    let cliente_id = req.body.cliente_id;

    let query = 'INSERT INTO carros ( marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id) VALUES'
    query += `('${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${fabricacao_veiculo}','${cliente_id}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })

}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}


const update = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiuclo;
    let cliente_id = req.body.cliente_id;

    let query = `UPDATE carros SET marca_veiculo ='${marca_veiculo}', modelo_veiculo = '${modelo_veiculo}', ano_veiculo = '${ano_veiculo}', fabricacao_veiculo = '${fabricacao_veiculo}', cliente_id = '${cliente_id}'`
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
    const query = 'DELETE FROM carros WHERE carros_id = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}




module.exports = {
    create,
    read,
    deletar,
    update
}