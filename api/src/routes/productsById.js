const { Router } = require("express");
const { Products, Categories } = require("../db.js");
const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let databaseProduct = await Products.findByPk(id, {
      include: [
        {
          model: Categories,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    console.log(databaseProduct);
    return res.status(201).json(databaseProduct);
  } catch (error) {
    res.status(404).json("Product is not found");
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  await Products.destroy({
    where: { id: id },
  });

  res.send("Product deleted");
});

module.exports = router;
