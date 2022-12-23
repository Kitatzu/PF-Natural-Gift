const sequelize = require("../db");
const { Router } = require("express");
const router = Router();
const { Products, Transaction, Users, Review } = sequelize.models;
const {
  createTransaction,
  updateTransaction,
} = require("../controller/transactions");
const { getCart } = require("../controller/cart");

router.post("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { country, city, address } = req.body;
    let user = await Users.findByPk(userId);
    let cart = await getCart(user.cartId);
    let err = { status: false };
    let productsInCart = cart.dataValues.ProductInCart.map(async (product) => {
      let productDetail = await Products.findOne({
        where: { id: product.productId },
        // incluide: Review,
      }).then((r) => r.dataValues);
      if (product.quantity > productDetail.stock) {
        err = { status: true, productId: productDetail.id };
      }
      return {
        quantity: product.quantity,
        product: productDetail,
      };
    });
    productsInCart = await Promise.all(productsInCart);
    if (err.status)
      return res.json({
        error: `Quantity must not be greater than the stock of the product; ${err.product}`,
      });
    cart = { id: cart.id, totalPrice: cart.totalPrice, productsInCart };
    let transaction = await createTransaction(
      "process",
      cart,
      country,
      city,
      address
    );
    await user.addTransaction(transaction);
    transaction = await Transaction.findByPk(transaction.id);
    return res.status(200).send({ status: "Transaction created", transaction });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
