const { Router } = require("express");

const categoriesRouter = require("./categoriesRoute");
const productsRouter = require("./productsRoute");
const router = Router();

router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);

module.exports = router;
