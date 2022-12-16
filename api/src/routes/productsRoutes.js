const { Router } = require("express");
const { Products, Categories } = require("../db.js");
const router = Router();

router.get("/", async (req, res) => {
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
});

router.post("/", async (req, res) => {
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
});
module.exports = router;
