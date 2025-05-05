const Pedido = require('../models/builderPedido');

class PedidoProxy {
    constructor(id, cliente) {
        this.pedido = new Pedido(id, cliente);
    }

    addItem(item) {
        console.log('Proxy: Adicionando item ao pedido');
        this.pedido.addItem(item);
    }

    getPedido() {
        console.log('Proxy: Retornando pedido');
        return this.pedido;
    }
}

module.exports = PedidoProxy;