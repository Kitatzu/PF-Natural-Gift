const { Router } = require("express");
const { Users, bcrypt } = require("../db.js");
const router = Router();

router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  await Users.destroy({ where: { id: id } });

  res.send("User is deleted");
});

// router.put(":id", async (req, res) => {
//   let { id } = req.params;
//   let {
//     userName,
//     email,
//     password,
//     avatar,
//     firstName,
//     lastName,
//     city,
//     country,
//     adress,
//     phone,
//   } = req.body;

//  try {
//     const salt = await bcrypt.genSalt(10);
//     let user = Users.findByPk({where: {id: id}})

//  } catch (error) {

//  }
// });

module.exports = router;
