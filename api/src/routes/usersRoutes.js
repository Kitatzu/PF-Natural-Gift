const { Router } = require("express");
const { allUsers, deleteUser } = require("../controller/usersController.js");
const router = Router();

router.get("/", allUsers);
router.delete("/:id", deleteUser);

module.exports = router;
