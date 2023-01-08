const { Users, Roles, bcrypt, Cart } = require("../db");
const jwt = require("jsonwebtoken");
const { transporter } = require("../middlewares/mails.js");
const { Email } = process.env;
const fs = require("fs-extra");
const { uploadAvatarImage } = require("../middlewares/cloudinary.js");
const path = require("path");
const filepath = path.join(__dirname, "../public/registerMail.html");

async function registerUser(req, res) {
  let { userName, password, email, firstName, lastName, country, roleName } =
    req.body;

  try {
    let findUser = await Users.findOne({ where: { userName } });
    let findEmail = await Users.findOne({ where: { email } });
    if (findUser) {
      return res.status(404).json(`the user ${userName} is registered`);
    } else if (findEmail) {
      return res.status(404).json(`the email ${email} is registered`);
    } else if (req.files?.avatar) {
      const salt = await bcrypt.genSalt(10);
      const result = await uploadAvatarImage(req.files.avatar.tempFilePath);
      const newcart = await Cart.create({
        totalPrice: 0,
      });
      const newUser = await Users.create({
        avatar: result.secure_url,
        avatarId: result.public_id,
        userName,
        password: await bcrypt.hash(password, salt),
        email,
        firstName,
        lastName,
        country,
        cartId: newcart.id,
      });
      console.log(newcart, newUser);
      await fs.unlink(req.files.avatar.tempFilePath);

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
        from: `${Email}`, // sender address
        to: email, // list of receivers
        subject: "Registro Exitoso", // Subject line
        html: { path: filepath }, // html body
      });
      res.status(200).json({ newToken, send });
    } else {
      const salt = await bcrypt.genSalt(10);
      const newcart = await Cart.create({
        totalPrice: 0,
      });
      const newUser = await Users.create({
        userName,
        password: await bcrypt.hash(password, salt),
        email,
        firstName,
        lastName,
        country,
        cartId: newcart.id,
      });
      console.log(newcart, newUser);
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
        from: `${Email}`, // sender address
        to: email, // list of receivers
        subject: "Registro Exitoso", // Subject line
        html: { path: filepath }, // html body
      });
      res.status(200).json({ newToken, send });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error });
  }
}

module.exports = {
  registerUser,
};
