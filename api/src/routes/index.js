const { Router } = require("express");
const products = require("../routes/productsRoutes");
const categories = require("../routes/categoriesRoutes");
const register = require("../routes/registerRoutes");
const login = require("../routes/loginRoutes");
const password = require("../routes/passwordRoutes");
const users = require("../routes/usersRoutes");
const cart = require("../routes/cart");
const factura = require("./factura");
const search = require("./searchRoute");
const filter = require("./filterRoute");

const router = Router();

router.use("/products", products);
router.use("/categories", categories);
router.use("/register", register);
router.use("/login", login);
router.use("/users", users);
router.use("/pass", password);
router.use("/cart", cart);
router.use("/factura", factura);
router.use("/search", search);
router.use("/filter", filter);

module.exports = router;
