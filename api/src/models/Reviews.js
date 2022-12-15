const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    description: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
    },
  });
};
