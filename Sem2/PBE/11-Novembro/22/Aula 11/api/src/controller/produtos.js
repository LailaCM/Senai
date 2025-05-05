const con = require('../connect/banco').con;

const create = (req, res) => {
    const { nome, preco } = req.body;
    con.query(
        `INSERT INTO produtos (nome, preco) VALUES (?, ?)`,
        [nome, preco],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome, preco });
        }
    );
};

const read = (req, res) => {
    con.query(`SELECT * FROM produtos`,
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(200).json(results);
        });
};

module.exports = {
    create,
    read
};
