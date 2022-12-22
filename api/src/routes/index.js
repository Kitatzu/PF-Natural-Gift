const { Router } = require("express");
const products = require("../routes/productsRoutes");
const categories = require("../routes/categoriesRoutes");
const register = require("../routes/registerRoutes");
const login = require("../routes/loginRoutes");
const users = require("../routes/usersRoutes");
const cart = require("../routes/cart");
const transaction = require("../routes/Transaction");
const router = Router();

router.use("/products", products);
router.use("/categories", categories);
router.use("/register", register);
router.use("/login", login);
router.use("/users", users);
router.use("/cart", cart);
router.use("/transaction", transaction);

module.exports = router;
