const { Router } = require("express");
const Categories = require("../models/Categories");
const router = Router();

router.post("/", async (req, res) => {
  let { name } = req.body;

  const newCategory = await Categories.create({ name });

  res.send(newCategory);
});

module.exports = router;
