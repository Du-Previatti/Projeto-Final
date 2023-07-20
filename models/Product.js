const Sequelize = require('sequelize');
const db = require('../database');
const Category = require('./Category');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category'});

module.exports = Product;
