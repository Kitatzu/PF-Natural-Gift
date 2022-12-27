const { Users, Roles } = require("../db");

async function allUsers(req, res) {
  let { userName } = req.query;

  if (userName) {
    try {
      let usersInDb = await Users.findAll({
        where: { userName },
        include: { Roles },
      });

      usersInDb.length
        ? res.status(201).json(usersInDb)
        : res.status(404).json("user not found");
    } catch (error) {
      res.status(404).json(error);
    }
  } else {
    try {
      let allUsers = await Users.findAll({
        include: {
          model: Roles,
          attributes: ["roleName"],
          through: { attributes: [] },
        },
      });

      res.status(201).json(allUsers);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}

async function deleteUser(req, res) {
  let { id } = req.params;

  await Users.destroy({ where: { id: id } });

  res.send("User is deleted");
}

// async function updateUser(req, res) {
//   let { id } = req.params;
//   //let {
//   //     userName,
//   //     email,
//   //     password,
//   //     avatar,
//   //     firstName,
//   //     lastName,
//   //     city,
//   //     country,
//   //     adress,
//   //     phone,
//   //   } = req.body;

//   //  try {
//   //     const salt = await bcrypt.genSalt(10);
//   //     let user = Users.findByPk({where: {id: id}})

//   //  } catch (error) {

//   //  }
// }

module.exports = {
  allUsers,
  deleteUser,
};
