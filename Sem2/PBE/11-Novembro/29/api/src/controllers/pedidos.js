const con = require('../connect');
const create = (req, res) => {
    const {idcliente, idprod, idtelefone, datalancamento,total} = req.body;
    con.query('INSERT INTO pedidos (idcliente, idprod, idtelefone, datalancamento, total) VALUES (?, ?, ?, ?, ?)',
        [idcliente, idprod, idtelefone, datalancamento,total],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId,idcliente, idprod, idtelefone, datalancamento,total});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM pedidos', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}
module.exports = { create, read };
