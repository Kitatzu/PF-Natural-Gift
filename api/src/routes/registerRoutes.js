const { Router } = require("express");
const { registerUser } = require("../controller/registerController.js");
const fileUpload = require("express-fileupload");
const router = Router();

router.post(
  "/",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  registerUser
);

module.exports = router;
