const { Router } = require("express");
const router = Router();
const PaymentController = require("../controller/PaymentController");
const PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());
const Products = require("sequelize");

// tendria que ser un post
router.get("/", function (req, res, next) {});

router.get("/payment", function (req, res, next) {
  // const prod = req.body;

  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
