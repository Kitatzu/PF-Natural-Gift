const { Products, Categories } = require("../db.js");
const verifyToken = require("../middlewares/authenticationJwt.js").verifyToken;
const isAdmin = require("../middlewares/authenticationJwt.js").isAdmin;

async function allProducts(req, res) {
  let { name } = req.query;

  if (name) {
    try {
      let productsInDb = await Products.findAll({
        where: { name },
        include: {
          model: Categories,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });

      productsInDb.length
        ? res.status(201).json(productsInDb)
        : res.status(404).json("product not found");
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    try {
      let productsInDb = await Products.findAll({
        include: {
          model: Categories,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });

      res.status(201).json(productsInDb);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}

async function createProduct(req, res) {
  let { name, categories, imageProduct, stock, price, rating } = req.body;

  const newProduct = await Products.create({
    name,
    imageProduct,
    stock,
    price,
    rating,
  });

  const allCategories = await Categories.findAll({
    where: { name: categories },
  });

  await newProduct.addCategories(allCategories);

  res.status(201).send(newProduct);
}

async function findProduct(req, res) {
  const { id } = req.params;
  try {
    let databaseProduct = await Products.findByPk(id, {
      include: [
        {
          model: Categories,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    console.log(databaseProduct);
    return res.status(201).json(databaseProduct);
  } catch (error) {
    res.status(404).json("Product is not found");
  }
}

async function deleteProduct(req, res) {
  let { id } = req.params;

  await Products.destroy({
    where: { id: id },
  });

  res.send("Product deleted");
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, imageProduct, stock, price, rating, categories } = req.body;

  let product = await Products.findByPk(id, {
    include: [
      {
        model: Categories,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  let allCategories = await Categories.findAll({ where: { name: categories } });

  product.name = name;
  product.imageProduct = imageProduct;
  product.stock = stock;
  product.price = price;
  product.rating = rating;
  product.categories = await product.addCategories(allCategories);

  res.send("product updated");
}

module.exports = {
  allProducts,
  createProduct,
  findProduct,
  deleteProduct,
  updateProduct,
};