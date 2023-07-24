const Category = require('../models/Category');

const CategoryController = {
    // Criar uma nova categoria
    async create(req, res) {
        try {
            const category = await Category.create(req.body);
            return res.send(category);
        } catch (err) {
            return res.status(400).send({ error: 'Falha ao criar categoria' });
        }
    },

    // Listar todas as categorias
    async list(req, res) {
        try {
            const categories = await Category.findAll();
            return res.send(categories);
        } catch (err) {
            return res.status(400).send({ error: 'Falha ao listar categorias' });
        }
    },

    // Atualizar uma categoria
    async update(req, res) {
        try {
            const category = await Category.update(req.body, { where: { id: req.params.id }});
            return res.send(category);
        } catch (err) {
            return res.status(400).send({ error: 'Falha ao atualizar categoria' });
        }
    },

    // Deletar uma categoria
    async delete(req, res) {
        try {
            await Category.destroy({ where: { id: req.params.id }});
            return res.send({ success: 'Categoria deletada com sucesso' });
        } catch (err) {
            return res.status(400).send({ error: 'Falha ao deletar categoria' });
        }
    },
}

module.exports = CategoryController;
