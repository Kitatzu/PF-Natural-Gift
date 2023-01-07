const { Router } = require("express");
const router = Router();
const PaymentController = require("../controller/PaymentController");
const PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentService());

//tendria que ser un post
router.post("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
