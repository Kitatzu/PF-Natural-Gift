const { Router } = require("express");
const {
  allProducts,
  allProductsDeleted,
  createProduct,
  findProduct,
  deleteProduct,
  restoreProduct,
  updateProduct,
} = require("../controller/productsController.js");
const fileUpload = require("express-fileupload");

const router = Router();

router.get("/", allProducts);
router.get("/deleted", allProductsDeleted);
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
router.get("/restore/:id", restoreProduct);
router.put(
  "/:id",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  updateProduct
);

module.exports = router;
