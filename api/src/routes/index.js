const { Router } = require("express");
const categoriesRoutes = require("./categoriesRoutes");
const productsRoutes = require("./productsRoutes");
const productsById = require("./productsById");
const registerRoutes = require("./registerRoutes");
const loginRoutes = require("./loginRoutes");

const router = Router();
router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/products", productsRoutes);
router.use("/product", productsById);
router.use("/categories", categoriesRoutes);

module.exports = router;
