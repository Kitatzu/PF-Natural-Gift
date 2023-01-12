const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("facturas", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    factura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    pagoId: {
      type: DataTypes.STRING,

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
