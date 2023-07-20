const express = require('express');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);

router.post('/', authMiddleware, (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(403).send({ error: 'User does not have permission to perform this action' });
  }
  next();
}, productController.createProduct);

router.put('/:id', authMiddleware, (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(403).send({ error: 'User does not have permission to perform this action' });
  }
  next();
}, productController.updateProduct);

router.delete('/:id', authMiddleware, (req, res, next) => {
  if (!req.isAdmin) {
    return res.status(403).send({ error: 'User does not have permission to perform this action' });
  }
  next();
}, productController.deleteProduct);

module.exports = router;
