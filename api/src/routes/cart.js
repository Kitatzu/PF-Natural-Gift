const sequelize = require("../db");
const { Router, response } = require("express");
const router = Router();
const isUUID = require("is-uuid");
const { Users, Products, ProductInCart, Cart } = sequelize;
const {
  createProductInCart,
  getCart,
  updateCart,
} = require("../controller/cartController");

router.post("/:productId", async (req, res) => {
  const { userId, quantity } = req.body;
  const { productId } = req.params;
  try {
    const user = await Users.findByPk(userId);

    const productsInCart = await createProductInCart(
      quantity,
      productId,
      user.cartId
    );
    productsInCart
      ? res
          .status(200)
          .json({ status: "success", msg: "Producto agregado correctamente!" })
      : res.status(400).json({
          status: "error",
          msg: "El producto ya existe en el carrito!",
        });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
});
router.get("/:userId", getCart);
router.put("/", updateCart);
module.exports = router;
