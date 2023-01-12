const { Products, Categories } = require("../db.js");
const {
  uploadProductImage,
  updateProductImage,
} = require("../middlewares/cloudinary.js");
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

async function allProductsDeleted(req, res) {
  try {
    let productsInDb = await Products.findAll({
      paranoid: false,
      include: {
        model: Categories,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    res.status(201).json(productsInDb);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function createProduct(req, res) {
  let { name, categories, description, stock, price, rating } = req.body;

  if (req.files?.imageProduct) {
    try {
      const result = await uploadProductImage(
        req.files.imageProduct.tempFilePath
      );
      console.log(result);
      const newProduct = await Products.create({
        name,
        imageProduct: result.secure_url,
        imageId: result.public_id,
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
      res.status(500).json({ status: "error", message: e });
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
      return res.status(500).json({ status: "error", message: e });
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

    return res.status(201).json(databaseProduct);
  } catch (error) {
    res.status(404).json("Product is not found");
  }
}

async function deleteProduct(req, res) {
  let { id } = req.params;

  const product = await Products.destroy({
    where: { id: id },
  });

  res.send("Product deleted");
}

async function restoreProduct(req, res) {
  let { id } = req.params;
  const product = await Products.restore({
    where: { id: id },
  });

  res.status(200).json(`the product ${product} is restored`);
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, stock, price, rating } = req.body;

  if (req.files?.imageProduct) {
    try {
      let product = await Products.findByPk(id, {
        include: [
          {
            model: Categories,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });

      const imgUpdate = await updateProductImage(
        req.files.imageProduct.tempFilePath,
        product.imageId
      );

      let updated = await product.update({
        name: name,
        imageProduct: imgUpdate.secure_url,
        imageId: imgUpdate.public_id,
        description: description,
        stock: stock,
        price: price,
        rating: rating,
      });

      await fs.unlink(req.files.imageProduct.tempFilePath);

      res.json({ message: "product updated", updated });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  } else {
    try {
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
        rating: rating,
      });

      res.status(200).json({ message: "Product updated", updated });
    } catch (error) {
      res.status(401).json({ message: "Error!", error });
    }
  }
}

module.exports = {
  allProducts,
  allProductsDeleted,
  createProduct,
  findProduct,
  deleteProduct,
  restoreProduct,
  updateProduct,
};
