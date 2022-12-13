const { Router } = require("express");
const categoriesRoutes = require("./categoriesRoutes");
const productsRoutes = require("./productsRoutes");
const productsById = require("./productsById");

const router = Router();
router.use("/products", productsRoutes);
router.use("/product", productsById);
router.use("/categories", categoriesRoutes);

module.exports = router;
