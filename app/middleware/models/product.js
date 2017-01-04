var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://ulnda@localhost:5432/ulnda');

var Product = sequelize.define('products', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
});

Product.sync();

export default Product;
