const PedidoProxy = require('../proxies/pedidoProxy');
const ItemProxy = require('../proxies/itemProxy');

const readPedido = async (req, res) => {
    const { cliente } = req.body;
    const pedidoProxy = new PedidoProxy(1, cliente);
    const pedido = pedidoProxy.getPedido();
    res.json(pedido);
}

const createItem = async (req, res) => {
    const { produto, preco, quantidade } = req.body;
    const itemProxy = new ItemProxy(1, produto, preco, quantidade);
    const item = itemProxy.getItem();
    res.json(item);
}

module.exports = {
    readPedido,
    createItem,
};