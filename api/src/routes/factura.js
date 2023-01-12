const { Router } = require("express");
const { createFactura } = require("../controller/facturaController");
const router = Router();

router.post("/", createFactura);

module.exports = router;
