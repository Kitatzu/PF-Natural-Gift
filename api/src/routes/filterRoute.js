const { Router } = require("express");
const { filterController } = require("../controller/filterController");

const router = Router();

router.get("/:value", filterController);

module.exports = router;
