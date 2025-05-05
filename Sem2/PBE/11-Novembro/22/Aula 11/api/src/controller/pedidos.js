const con = require('../connect/banco').con;
const pedidos = [];

const create = (req, res) => {
    const {data_pedido, id_produto, quantidade} = req.body;
    const pedidos ={
        data_pedido,
        id_produto,
        quantidade
    }
    pedidos.push (pedidos)
    return res.status(201).json(pedidos);
}

const read = (req, res) => {
    return res.json(pedidos)
}

module.exports = {
    create,
    read,
}