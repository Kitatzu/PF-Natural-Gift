const { Users, Roles, bcrypt } = require("../db");
const jwt = require("jsonwebtoken");
const { transporter } = require("../middlewares/mails.js");
const { Email } = process.env;

async function registerUser(req, res) {
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

      const send = await transporter.sendMail({
        from: `"Te has registrado exitosamente" <${Email}>`, // sender address
        to: "exe922@gmail.com", // list of receivers
        subject: "No entendiste? te registraste bien", // Subject line
        html: "<b> Que miras? Andá pa'allá, bobo, andá pa'allá</b>", // html body
      });
      res.status(200).json({ newToken, send });
    }
  } catch (error) {
    return res.status(404).json({ error });
  }
}

module.exports = {
  registerUser,
};
