const { Router } = require("express");
const { changePassword } = require("../controller/changePassword.js");
const router = Router();

router.post("/", changePassword);

module.exports = router;
