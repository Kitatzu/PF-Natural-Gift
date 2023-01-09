const { DataTypes, UUIDV4, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "productInCart",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
        allowNull: false,
      },
    },
    { timestamps: false, underscored: true }
  );
};
