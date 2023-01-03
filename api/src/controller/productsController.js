const { Products, Categories } = require("../db.js");
const { uploadProductImage } = require("../middlewares/cloudinary.js");
const fs = require("fs-extra");
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

      productsInDb.length > 0
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
  let { name, categories, description, stock, price, rating } = req.body;
  console.log(req.body);
  console.log(req.files.imageProduct);
  if (req.files.imageProduct) {
    try {
      const result = await uploadProductImage(
        req.files.imageProduct.tempFilePath
      );
      console.log(result);
      const newProduct = await Products.create({
        name,
        imageProduct: result,
        description,
        stock,
        price,
        rating,
      });
      await fs.unlink(req.files.imageProduct.tempFilePath);

      const allCategories = await Categories.findAll({
        where: { name: categories },
      });

      await newProduct.addCategories(allCategories);

      return res.status(201).send(newProduct);
    } catch (e) {
      console.log(e);
      res.status(500).json({ status: "error", msg: e });
    }
  } else {
    try {
      const newProduct = await Products.create({
        name,
        description,
        stock,
        price,
        rating,
      });

      const allCategories = await Categories.findAll({
        where: { name: categories },
      });

      await newProduct.addCategories(allCategories);

      return res.status(201).send(newProduct);
    } catch (e) {
      return res.status(500).json({ status: "error", msg: e });
    }
  }
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
  const { name, description, stock, price, rating } = req.body;

  let product = await Products.findByPk(id, {
    include: [
      {
        model: Categories,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  let updated = await product.update({
    name: name,
    description: description,
    stock: stock,
    price: price,
    rating,
  });

  res.json({ message: "product updated", updated });
}

module.exports = {
  allProducts,
  createProduct,
  findProduct,
  deleteProduct,
  updateProduct,
};
