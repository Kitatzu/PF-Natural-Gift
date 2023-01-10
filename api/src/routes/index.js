const { Router } = require("express");
const products = require("../routes/productsRoutes");
const categories = require("../routes/categoriesRoutes");
const register = require("../routes/registerRoutes");
const login = require("../routes/loginRoutes");
const users = require("../routes/usersRoutes");
const cart = require("../routes/cart");
const transaction = require("../routes/Transaction");
const search = require("./searchRoute");
const filter = require("./filterRoute");
// const payment = require("./paymentRoute");
const mercadopago = require("./mercadopagoRoute")

const router = Router();

router.use("/products", products);
router.use("/categories", categories);
router.use("/register", register);
router.use("/login", login);
router.use("/users", users);
router.use("/cart", cart);
router.use("/transaction", transaction);
router.use("/search", search);
router.use("/filter", filter);
// router.use("/", payment);
router.use("/mercadopago", mercadopago)

module.exports = router;
