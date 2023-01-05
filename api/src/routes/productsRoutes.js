const { Router } = require("express");
const {
  allProducts,
  createProduct,
  findProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productsController.js");
const fileUpload = require("express-fileupload");

const router = Router();

router.get("/", allProducts);
router.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);
router.get("/:id", findProduct);
router.delete("/:id", deleteProduct);
router.put(
  "/:id",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  updateProduct
);

module.exports = router;
