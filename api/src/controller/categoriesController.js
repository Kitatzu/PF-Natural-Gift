const { Categories } = require("../db.js");

async function allCategories(req, res) {
  try {
    let categoriesInDb = await Categories.findAll();

    if (categoriesInDb.length > 0)
      return res
        .status(201)
        .json({ status: "success", categories: categoriesInDb });
    else
      return res.status(404).json({ status: "error", msg: "No data found!" });
  } catch (error) {
    res.status(404).json(error);
  }
}

async function createCategories(req, res) {
  let { name } = req.body;

  const newCategory = await Categories.create({ name });
  res.status(201).json(newCategory);
}

module.exports = {
  allCategories,
  createCategories,
};
