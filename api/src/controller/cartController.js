const sequelize = require("../db");
const { Cart, ProductInCart, Users, Products } = sequelize;

const getCart = async (cartId) => {
  await Cart.findOne({
    where: { id: cartId },
    include: ProductInCart,
  })
    .then((response) => response)
    .catch((e) => e);
};

const createProductInCart = async (quantity, productId, cartId) => {
  const findProduct = await ProductInCart.findOne({
    include: {
      model: Products,
      through: { attributes: [] },
      where: {
        productId,
      },
    },
  });
  console.log(findProduct);
  await ProductInCart.create({
    quantity,
    productId,
  })
    .then(async (response) => {
      const cart = await Cart.findByPk(cartId);
      await cart.addProductInCarts(response);
      return await cart.getProductInCarts();
    })
    .catch((e) => {
      console.log(e);
    });
};

const updateProductInCart = async (quantity, productInCartId) => {
  await ProductInCart.update(
    {
      quantity,
    },
    { where: { id: productInCartId } }
  );
  let productInCart = await ProductInCart.findByPk(productInCartId);
  if (productInCart.quantity === 0)
    ProductInCart.destroy({ where: { id: productInCartId } });
  return 1;
};

const updateCart = async (totalPrice, cartId) => {
  return await Cart.update(
    {
      totalPrice,
    },
    { where: { id: cartId } }
  );
};

const updateProductsInCart = async (
  ProductInCarts,
  cart,
  productId,
  productRemoved,
  quantity
) => {
  if (productRemoved || productRemoved === "all") {
    totalPrice = 0;
    if (productId !== "all") {
      let product = await Products.findByPk(productId);
      if (!quantity) {
        totalPrice =
          cart.totalPrice -
          (product.price * productRemoved.dataValues.quantity -
            product.price *
              productRemoved.dataValues.quantity *
              productRemoved.dataValues.discount);
      } else {
        totalPrice =
          cart.totalPrice -
          (product.price * quantity -
            product.price * quantity * product.discount);
        if (productRemoved.dataValues.quantity >= 0) {
          await updateCart(totalPrice, cart.id);
          return await updateProductInCart(
            productRemoved.dataValues.quantity,
            productRemoved.dataValues.id
          );
        } else return { error: "Quantity not be negative" };
      }
    }
    await updateCart(totalPrice, cart.id);
    return await cart.setProductInCarts(ProductInCarts);
  } else {
    return { error: "Product in cart not found" };
  }
};

const resetUserCart = async (userId) => {
  try {
    let newCartId = await Cart.create().then((r) => r.dataValues.id);
    let user = await Users.findByPk(userId);
    await Cart.destroy({
      where: {
        id: user.cartId,
      },
    });
    await Users.update(
      {
        cartId: newCartId,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    return { status: "Cart reseted" };
  } catch (error) {
    console.log(error.message);
    return { status: "Error updating user cart" };
  }
};

module.exports = {
  getCart,
  createProductInCart,
  updateProductInCart,
  updateCart,
  resetUserCart,
  updateProductsInCart,
};
