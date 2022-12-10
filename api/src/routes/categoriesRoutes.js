const { Router } = require("express");
const { Categories } = require("../db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let categoriesInDb = await Categories.findAll();

    if (categoriesInDb.length) return res.status(201).json(categoriesInDb);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  let { name } = req.body;

  const newCategory = await Categories.create({ name });

  res.status(201).json(newCategory);
});

module.exports = router;
