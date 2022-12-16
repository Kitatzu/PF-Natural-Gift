const { Router } = require("express");
const { json } = require("sequelize");
const { Users, Roles, bcrypt } = require("../db.js");
const router = Router();
// const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  let { email, password } = req.body;

  const validEmail = await Users.findOne({ where: { email } });
  if (!validEmail)
    return res.status(400).json({ error: "email is not registered" });

  const validPassword = await bcrypt.compare(password, validEmail.password);
  if (!validPassword)
    return res.status(400).json({ error: "password incorrect" });

  // const newToken = jwt.sign(
  //   {
  //     name: validEmail.userName,
  //     id: validEmail.id,
  //   },
  //   process.env.TOKEN_SECRET
  // );

  // res.header("auth-token", newToken).json({
  //   error: null,
  //   data: { newToken },
  //   message: "Welcome",
  // });
  res.json({
    error: null,
    message: "Welcome",
  });
});
module.exports = router;
