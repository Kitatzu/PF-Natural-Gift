const { Router } = require("express");
const {
  allUsers,
  allUSersDeleted,
  deleteUser,
  restoreUser,
  updateUser,
} = require("../controller/usersController.js");
const fileUpload = require("express-fileupload");
const router = Router();

router.get("/", allUsers);
router.get("/deleted", allUSersDeleted);
router.delete("/:id", deleteUser);
router.get("/restore/:id", restoreUser);
router.put(
  "/:id",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  updateUser
);

module.exports = router;
