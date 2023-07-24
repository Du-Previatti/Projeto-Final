const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Conexão com MySQL foi estabelecida com sucesso.'))
  .catch(err => console.error('Falha ao se conectar com MySQL:', err));

module.exports = sequelize;
