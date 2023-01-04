const { Products, Categories } = require("../db.js");
const { Op } = require("sequelize");
const searchController = async (req, res) => {
  const { value } = req.params;
  try {
    const dataSearch = await Products.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + value + "%",
        },
      },
      include: {
        model: Categories,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    console.log(dataSearch, value);
    dataSearch.length > 0
      ? res.status(200).json({ status: "success", dataSearch })
      : res.status(400).json({ status: "error", msg: "No data found!" });
  } catch (e) {
    res.status(500).json({ status: "error", msg: "Internal server error" + e });
  }
};
module.exports = { searchController };
