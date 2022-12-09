const { Router } = require("express");
const Products = require("../models/Products");
const Categories = require("../models/Categories");
const router = Router();

router.get("/", async (req, res) => {
  let { name } = req.query;

  if (name) {
    let productsForName = await Products.find();
    if (productsForName !== name) {
      return res.status(202).json(`products for ${name} not found`);
    }
    return res.status(201).json(productsForName);
  } else {
    try {
      const productsInDb = await Products.find();
      return res.status(201).json(productsInDb);
    } catch (error) {
      return res.status(404).send(`this ${error}`);
    }
  }
});

router.post("/", async (req, res) => {
  let { name, imageProduct, stock, price, description, inStock, rating } =
    req.body;

  const newProduct = await Products.create({
    name,
    imageProduct,
    stock,
    price,
    description,
    inStock,
    rating,
  });

  await Categories.find();

  await newProduct.populate("categories");

  return res.send(newProduct);
});

module.exports = router;
