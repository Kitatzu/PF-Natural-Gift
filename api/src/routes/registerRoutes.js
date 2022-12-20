const { Router } = require("express");
const { Users, Roles, bcrypt } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
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
});

router.post("/", async (req, res) => {
  let {
    userName,
    password,
    email,
    firstName,
    lastName,
    country,
    roleName,
    avatar,
  } = req.body;

  try {
    let findUser = await Users.findOne({ where: { userName } });
    let findEmail = await Users.findOne({ where: { email } });
    if (findUser) {
      return res.status(404).json(`the user ${userName} is registered`);
    } else if (findEmail) {
      return res.status(404).json(`the email ${email} is registered`);
    } else {
      const salt = await bcrypt.genSalt(10);

      const newUser = await Users.create({
        avatar,
        userName,
        password: await bcrypt.hash(password, salt),
        email,
        firstName,
        lastName,
        country,
      });

      if (roleName) {
        const findRoles = await Roles.findAll({
          where: { roleName: roleName },
        });
        newUser.addRoles(findRoles);
      } else {
        const findOrCreate = await Roles.findOne({
          where: { roleName: "User" },
        });
        newUser.addRoles(findOrCreate);
      }
      const newToken = jwt.sign(
        {
          id: newUser.id,
          name: userName,
          role: roleName,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: 86400,
        }
      );
      res.status(200).json({ newToken });
    }
  } catch (error) {
    return res.status(404).json({ error });
  }
});
module.exports = router;
