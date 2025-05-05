const con = require('../connect');
const create = (req, res) => {
    const {cpf, nome, email } = req.body;
    con.query('INSERT INTO pessoas (cpf, nome, email) VALUES (?, ?, ?)',
        [cpf, nome, email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, cpf, nome, email});
        });
}

const read = (req, res) => {
    con.query('SELECT * FROM pessoas', 
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(result);
        }
    );
}
module.exports = { create, read };