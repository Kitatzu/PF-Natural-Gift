const { Router } = require("express");
const { Users, bcrypt, Roles } = require("../db.js");
const router = Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  let { email, password } = req.body;

  const validEmail = await Users.findOne(
    { where: { email } },
    { include: Roles }
  );
  if (!validEmail)
    return res.status(400).json({ error: "email is not registered" });

  const validPassword = await bcrypt.compare(password, validEmail.password);
  if (!validPassword)
    return res.status(400).json({ error: "password incorrect" });

  const newToken = jwt.sign(
    {
      id: validEmail.id,
      name: validEmail.userName,
      role: roleName,
    },
    process.env.TOKEN_SECRET,
    {
      expiresIn: 86400,
    }
  );
  res.status(200).json({ newToken });
});
module.exports = router;
