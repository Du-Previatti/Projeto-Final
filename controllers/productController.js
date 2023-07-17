const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll({ include: 'category' });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
  };
  

  exports.getProduct = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, { include: 'category' });
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving product', error: error.message });
    }
  };

exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({message: 'Error creating product', error: error.message});
    }
};

exports.updateProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.json(product);
};

exports.deleteProduct = async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
};
