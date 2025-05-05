const con = require('../connect');
const create = (req, res) => {
    const {nome, pagamento} = req.body;
    con.query('INSERT INTO clientes (nome, pagamento) VALUES (?, ?)',
        [nome, pagamento],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome, pagamento});
        });
}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}
module.exports = { create, read };