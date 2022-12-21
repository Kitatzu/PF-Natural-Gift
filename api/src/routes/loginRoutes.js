const { Router } = require("express");
const { loginUser } = require("../controller/loginController.js");
const router = Router();

router.post("/", loginUser);

module.exports = router;
