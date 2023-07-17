const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); 

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Não deve ser possível cadastrar duas categorias com o mesmo nome.
  }
}, {
  timestamps: false // Campo opcional caso os campos de timestamp (createdAt, updatedAt) não forem necessários, manter como "false".
});

module.exports = Category;
