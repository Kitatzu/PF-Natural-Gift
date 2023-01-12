const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("facturas", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    factura: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    pagoId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    },
  });
};
