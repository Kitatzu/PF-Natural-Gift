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

      console.log(productsInDb);

      res.status(201).send(productsInDb);
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
  let { name, categories, imageProduct, stock, price, rating, inDatabase } =
    req.body;

  const newProduct = await Products.create({
    name,
    imageProduct,
    stock,
    price,
    rating,
    inDatabase,
  });

  const allCategories = await Categories.findAll({
    where: { name: categories },
  });

  console.log(allCategories);

  await newProduct.addCategories(allCategories[name]);

  res.status(201).send(newProduct);
});
module.exports = router;
