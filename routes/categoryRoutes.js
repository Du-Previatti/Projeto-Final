const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para criar uma nova categoria
router.post('/', authMiddleware, (req, res, next) => {
    if (!req.isAdmin) {
        return res.status(403).send({ error: 'User does not have permission to perform this action' });
    }
    next();
}, CategoryController.create);

// Rota para listar todas as categorias
router.get('/', CategoryController.list);

// Rota para atualizar uma categoria
router.put('/:id', authMiddleware, (req, res, next) => {
    if (!req.isAdmin) {
        return res.status(403).send({ error: 'User does not have permission to perform this action' });
    }
    next();
}, CategoryController.update);

// Rota para deletar uma categoria
router.delete('/:id', authMiddleware, (req, res, next) => {
    if (!req.isAdmin) {
        return res.status(403).send({ error: 'User does not have permission to perform this action' });
    }
    next();
}, CategoryController.delete);

module.exports = router;
