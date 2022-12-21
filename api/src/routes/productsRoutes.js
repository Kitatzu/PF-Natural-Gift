const { Router } = require("express");
const {
  allProducts,
  createProduct,
  findProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productsController.js");

const router = Router();

router.get("/", allProducts);
router.post("/", createProduct);
router.get("/:id", findProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
