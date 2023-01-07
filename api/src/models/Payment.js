const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("payment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    payer_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    items: {
      type: DataTypes.ARRAY,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    picture_url: {
      type: DataTypes.STRING,
      defaultValue: "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
    },
    category_id: {
      type: DataTypes.STRING,
      defaultValue: "No disponible",
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    unit_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
