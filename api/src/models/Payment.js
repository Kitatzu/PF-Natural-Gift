const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "payment",
    {
      idTogether: {
        type: DataTypes.FLOAT,
      },
      idMatch: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      quantity: {
        type: DataTypes.FLOAT,
      },
      total_paid_amount: {
        type: DataTypes.FLOAT,
      },
      status: {
        type: DataTypes.STRING,
      },
      status_detail: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      userEmail: {
        type: DataTypes.STRING,
      },
      extraEmail: {
        type: DataTypes.STRING,
      },
      extraAddress: {
        type: DataTypes.STRING,
      },
    },

    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
