const Item = require('../models/builderItem');

class ItemProxy {
    constructor(id, produto, preco, quantidade) {
        this.item = new Item(id, produto, preco, quantidade);
    }

    getItem() {
        console.log('Proxy: Retornando item');
        return this.item;
    }
}

module.exports = ItemProxy;