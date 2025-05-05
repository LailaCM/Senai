const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const itens = await prisma.itens.create({
            data: req.body
        });
        return res.status(201).json(itens);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const itens = await prisma.itens.findMany();
    return res.json(itens);
}

const update = async (req, res) => {
    try {
        const itens = await prisma.itens.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(itens);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.itens.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}


module.exports = {
    create,
    read,
    update,
    remove
};