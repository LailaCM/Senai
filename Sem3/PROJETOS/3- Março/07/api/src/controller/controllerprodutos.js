const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const produtos = await prisma.produtos.findMany();
    return res.json(produtos)
}

const create = async (req, res) => {
    const data = req.body;
    const produtos = await prisma.produtos.create({
        data: data
    });
    return res.status(201).json(produtos).end()
}

const update = async (req, res) => {
    const data = req.body;
    let produtos = await prisma.produtos.update({
    where: {
        id: parseInt(req.params.id)
    },
    data: data
});
    return res.status(202).json(produtos).end()
}

const del = async (req, res) => {
    const id = parseInt(req.params.id);
    const produtos = await prisma.produtos.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    return res.status(204).json(produtos).end()
}


module.exports = {
    read,
    create,
    update,
    del
}  