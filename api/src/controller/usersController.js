const { Users, Roles } = require("../db");
const { updateAvatarImage } = require("../middlewares/cloudinary.js");
const fs = require("fs-extra");
const jwt = require("jsonwebtoken");

async function allUsers(req, res) {
  let { email } = req.query;
  if (email) {
    try {
      let usersInDb = await Users.findAll({
        where: { email },
        include: {
          model: Roles,
          attributes: ["roleName"],
          through: { attributes: [] },
        },
      });
      console.log(usersInDb);
      usersInDb.length > 0
        ? res.status(201).json(usersInDb)
        : res.status(404).json("user not found");
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: error });
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

async function updateUser(req, res) {
  let { id } = req.params;
  const { userName, firstName, lastName, city, country, adress, phone } =
    req.body;
  if (req.files?.avatar) {
    try {
      let user = await Users.findByPk(id, {
        include: {
          model: Roles,
          attributes: ["roleName"],
          through: { attributes: [] },
        },
      });

      let findUser = await Users.findOne({ where: { userName } });

      const avatarUpdate = await updateAvatarImage(
        req.files.avatar.tempFilePath,
        user.avatarId
      );

      if (user.userName === userName) {
        return res.status(404).json(`the username ${userName} is repeat`);
      }
      if (findUser) {
        return res.status(400).json(`the username ${userName} is registered`);
      } else {
        let userUpdate = await user.update({
          avatar: avatarUpdate.secure_url,
          avatarId: avatarUpdate.public_id,
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          city: city,
          country: country,
          adress: adress,
          phone: phone,
        });

        const newToken = jwt.sign(
          {
            id: user.id,
            name: user.userName,
          },
          process.env.TOKEN_SECRET,
          {
            expiresIn: 86400,
          }
        );

        res.status(200).json({ ...userUpdate.dataValues, newToken });
      }

      await fs.unlink(req.files.avatar.tempFilePath);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  } else {
    try {
      let user = await Users.findByPk(id, {
        include: {
          model: Roles,
          attributes: ["roleName"],
          through: { attributes: [] },
        },
      });

      let findUser = await Users.findOne({ where: { userName } });

      if (user.userName === userName)
        return res.status(404).json(`the username ${userName} is repeat`);
      if (findUser)
        return res.status(400).json(`the username ${userName} is registered`);

      let userUpdate = await user.update({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        city: city,
        country: country,
        adress: adress,
        phone: phone,
      });

      const newToken = jwt.sign(
        {
          id: userUpdate.id,
          name: userName,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: 86400,
        }
      );

      res.status(200).json({ ...userUpdate.dataValues, newToken });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

module.exports = {
  allUsers,
  deleteUser,
  updateUser,
};
