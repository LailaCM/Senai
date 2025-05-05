const con = require('../connect');
const create = (req, res) => {
    const {numero, idcliente, idforn} = req.body;
    con.query('INSERT INTO telefone (numero, idcliente, idforn) VALUES (?, ?, ?)',
        [numero, idcliente, idforn],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, numero, idcliente, idforn});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM telefone', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}

const update = (req, res) => {
    let numero = req.body.numero;
    let idcliente = req.body.idcliente;
    let idforn = req.body.idforn;

    let query = `UPDATE telefone SET numero ='${numero}', idcliente = '${idcliente}', idforn = '${idforn}'`
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
    const query = 'DELETE FROM telefone WHERE idtelefone = ?';
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = { create, read, update, deletar };
