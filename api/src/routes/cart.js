const sequelize = require("../db");
const { Router, response } = require("express");
const router = Router();
const isUUID = require("is-uuid");
const { Users, Products, ProductInCart, Cart } = sequelize;
const {
  getCart,
  createProductInCart,
  updateProductInCart,
  updateCart,
  updateProductsInCart,
} = require("../controller/cartController");

router.post("/:productId", async (req, res) => {
  const { userId, quantity } = req.body;
  const { productId } = req.params;
  try {
    const product = await Products.findByPk(productId);
    const user = await Users.findByPk(userId);
    console.log(await getCart(user.cartId));
    await createProductInCart(quantity, productId, user.cartId);
    return res.status(200).json({ status: "success", user, product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
});

router.put("/:productId", async (req, res) => {
  let { productId } = req.params;
  let { userId, quantity } = req.body;
  try {
    if (productId !== "all" && !isUUID.anyNonNil(productId))
      return res.status(400).send({ error: "id del producto no valida" });
    if (!isUUID.anyNonNil(userId))
      return res.status(400).send({ error: "id del usuario no valida" });
    let user = await Users.findByPk(userId);
    if (!user) return res.status(404).send({ error: "User not found" });
    let cart = await getCart(user.cartId);
    let newProductsInCart = [];
    let productRemoved = "all";
    if (productId !== "all") {
      if (!quantity) {
        newProductsInCart = cart.ProductInCarts.filter((p) => {
          if (p.productId !== productId) return true;
          else productRemoved = p;
        });
      } else {
        newProductsInCart = cart.ProductInCarts.map((p) => {
          if (p.productId !== productId) return p;
          else {
            p.dataValues.quantity = p.dataValues.quantity - quantity;
            productRemoved = p;
            return productRemoved;
          }
        });
      }
    }
    let success = await updateProductsInCart(
      newProductsInCart,
      cart,
      productId,
      productRemoved,
      quantity
    );
    if (success.error) return res.status(404).send({ error: success.error });
    cart = await getCart(user.cartId);
    return res.status(200).json({ status: "updated", cart });
  } catch (err) {
    return res.status(statusCode).json({ error: err.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!isUUID.anyNonNil(userId))
      return res
        .status(400)
        .send({ status: "The sent id is not valid (UUID)" });
    let user = await Users.findByPk(userId);
    let cart = await Cart.findOne({
      where: {
        id: user.cartId,
      },
      include: ProductInCart,
    });
    return res.status(200).send({ status: "Successfully obtained car", cart });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
