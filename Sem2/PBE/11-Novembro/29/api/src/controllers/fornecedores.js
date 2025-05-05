const con = require('../connect');
const create = (req, res) => {
    const {nome, cnpj, email} = req.body;
    con.query('INSERT INTO fornecedores (nome, cnpj, email) VALUES (?, ?, ?)',
        [nome, cnpj, email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome, cnpj, email});
        });
}
const read = (req, res) => {
    con.query('SELECT * FROM fornecedores', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}
module.exports = { create, read };
