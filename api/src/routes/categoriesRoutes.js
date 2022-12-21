const { Router } = require("express");
const {
  allCategories,
  createCategories,
} = require("../controller/categoriesController.js");
const router = Router();

router.get("/", allCategories);
router.post("/", createCategories);

module.exports = router;
