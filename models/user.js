'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email:DataTypes.STRING,
    Phone:DataTypes.STRING,
    Password:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};