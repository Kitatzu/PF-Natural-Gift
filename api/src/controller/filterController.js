const { Products, Categories } = require("../db.js");

const filterController = async (req, res) => {
  const { value } = req.params;
  try {
    const dataSearch = await Products.findAll({
      include: {
        model: Categories,
        attributes: ["name"],
        through: { attributes: [] },
        where: {
          name: value,
        },
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
module.exports = { filterController };
