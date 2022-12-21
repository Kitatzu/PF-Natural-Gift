const sequelize = require("../db");
const { Cart, ProductInCart, Users, Products } = sequelize.models;

const getCart = async (cartId) => {
  return await Cart.findOne({
    where: { id: cartId },
    include: ProductInCart,
  });
};

module.exports = getCart;
