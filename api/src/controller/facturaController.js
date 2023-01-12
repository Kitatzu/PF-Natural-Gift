const sequelize = require("../db");
const Factura = require("../models/Factura");
const { Cart, ProductInCart, Users, Products, Facturas } = sequelize;

const createFactura = async (req, res) => {
  const { factura, pagoId, userId, total } = req.body;
  try {
    if (userId) {
      await Users.findByPk(userId)
        .then(async (user) => {
          console.log(user);
          user
            ? await Cart.findByPk(user.cartId, {
                where: { status: "pending" },
              }).then(async (cart) => {
                console.log(cart);
                await ProductInCart.findAll({
                  where: {
                    cartId: cart.id,
                  },
                  include: Products,
                })
                  .then(async (products) => {
                    console.log(products);
                    try {
                      const newFactura = await Facturas.create({
                        factura,
                        pagoId,
                        cartId: cart.id,
                        total: cart.totalPrice,
                      });
                      await newFactura.addProductInCarts(products);
                      await user.addFacturas(newFactura);
                      console.log({ newFactura });
                      await cart
                        .update({ status: "success" })
                        .then((response) => {
                          console.log(response);
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                      const newCart = await Cart.create({ totalPrice: 0 });
                      const userUpdate = await user.update({
                        cartId: newCart.id,
                      });

                      return res.status(200).json({
                        status: "success",
                        cart: {
                          factura: { ...newFactura.dataValues },
                          cart: { ...cart.dataValues },
                          user: { ...userUpdate.dataValues },
                        },
                      });
                    } catch (e) {
                      return res.status(500).json({ status: "error", msg: e });
                    }
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
    res.status(500).json({ status: "error", msg: e });
  }
};
module.exports = {
  createFactura,
};
