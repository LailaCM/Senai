const con = require('../connect');
const create = (req, res) => {
    const { id_cliente, id_vendedor, data_pedido } = req.body;
    con.query('INSERT INTO pedidos (id_cliente, id_vendedor, data_pedido) VALUES (?, ?, ?)',
        [id_cliente, id_vendedor, data_pedido],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, id_cliente, id_vendedor, data_pedido });
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