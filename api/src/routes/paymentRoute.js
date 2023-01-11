const { Router } = require("express");
const router = Router();
const { linkPayment } = require("../controller/PaymentController");

router.post("/", linkPayment);

module.exports = router;
