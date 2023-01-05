const { Router } = require("express");
const {
  allUsers,
  deleteUser,
  updateUser,
} = require("../controller/usersController.js");
const fileUpload = require("express-fileupload");
const router = Router();

router.get("/", allUsers);
router.delete("/:id", deleteUser);
router.put(
  "/:id",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  updateUser
);

module.exports = router;
