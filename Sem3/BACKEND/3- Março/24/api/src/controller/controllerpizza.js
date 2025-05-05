const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const pizza = await prisma.pizza.create({
            data: req.body
        });
        res.status(201).json(pizza);
    } catch (error) {
        if (error.code == 'P2003')
            res.status(404).json({ erro: error.meta.field_name + ' não encontrada(o)' });
        else
            res.status(400).json(error);
    }
};

const read = async (req, res) => {
    const pizza = await prisma.pizza.findMany();
    res.status(200).json(pizza);
};

const update = async (req, res) => {
    try {
        const pizza = await prisma.pizza.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(pizza);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.pizza.delete({
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