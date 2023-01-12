const sequelize = require("../db");
const { Cart, ProductInCart, Users, Products } = sequelize;
const { Op } = require("sequelize");
const getCart = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    if (userId) {
      await Users.findByPk(userId)
        .then(async (user) => {
          console.log(user);
          user
            ? await Cart.findOne({
                where: {
                  [Op.and]: [
                    { id: user.cartId },
                    { status: { [Op.eq]: "pending" } },
                  ],
                },
              }).then(async (cart) => {
                console.log(cart);
                await ProductInCart.findAll({
                  where: {
                    cartId: cart.id,
                  },
                  include: Products,
                })
                  .then((products) => {
                    console.log(products);
                    return res.status(200).json({
                      status: "success",
                      cart: { ...cart.dataValues, products },
                    });
                  })
                  .catch((e) => {
                    console.log(e);
                    return res
                      .status(500)
                      .json({ status: "error", msg: e.error });
                  });
              })
            : res.status(404).json({ status: "error", msg: "No user found!" });
        })
        .catch((e) => {
          console.log(e);
          return res.status(500).json({ status: "error", msg: e });
        });
    } else {
      return res
        .status(400)
        .json({ status: "error", msg: "UserID igual a undefined!" });
    }
  } catch (e) {
    console.log(e);
    res.status(404).json(e);
  }
};

const createProductInCart = async (quantity, productId, cartId) => {
  console.log(quantity, cartId, productId);
  const findProduct = await ProductInCart.findOne({
    where: { cartId },
    include: {
      model: Products,
      where: {
        id: productId,
      },
    },
  });
  console.log(findProduct);
  if (!findProduct) {
    try {
      const productIncart = await ProductInCart.create({
        quantity,
        productId,
      });
      const cart = await Cart.findByPk(cartId);
      const sumatotal = parseFloat(cart.totalPrice);
      const product = await Products.findByPk(productId);

      console.log(sumatotal);
      await cart.addProductInCarts(productIncart);
      const priceCart = await Cart.update(
        {
          totalPrice:
            sumatotal + parseFloat(product.price) * parseInt(quantity),
        },
        { where: { id: cartId } }
      );
      console.log(priceCart);
      return true;
    } catch (e) {
      return e;
    }
  } else {
    return false;
  }
};

module.exports = {
  getCart,
  createProductInCart,
};
