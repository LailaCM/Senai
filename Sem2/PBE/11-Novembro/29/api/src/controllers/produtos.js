const con = require('../connect');
const create = (req, res) => {
    const {descricao, preco, nome, validade, idforn} = req.body;
    con.query('INSERT INTO produtos (descricao, preco, nome, validade, idforn) VALUES (?, ?, ?, ?, ?)',
        [descricao, preco, nome, validade, idforn],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId,descricao, preco, nome, validade, idforn});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM produtos', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}
module.exports = { create, read };
