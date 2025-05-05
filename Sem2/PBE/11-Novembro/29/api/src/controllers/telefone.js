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
module.exports = { create, read };
