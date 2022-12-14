const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
        },
        defaultValue: 0,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
};
