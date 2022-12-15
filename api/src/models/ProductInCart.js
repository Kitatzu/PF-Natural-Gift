const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ProductInCart",
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
      productId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    { timestamps: false, underscored: true }
  );
};
