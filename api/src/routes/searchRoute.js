const { Router } = require("express");
const { searchController } = require("../controller/searchController");
const router = Router();

router.get("/:value", searchController);

module.exports = router;
