const { Router } = require("express");
const { registerUser } = require("../controller/registerController.js");
const router = Router();

router.post("/", registerUser);

module.exports = router;
