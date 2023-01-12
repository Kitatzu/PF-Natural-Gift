const { Users, bcrypt } = require("../db.js");

async function changePassword(req, res) {
  let { email, password, newPassword, confirmPassword } = req.body;

  try {
    const validEmail = await Users.findOne({ where: { email: email } });

    let comparePassword = await bcrypt.compare(password, validEmail.password);

    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "the password does not match the old one" });
    } else if (newPassword) {
      if (password === newPassword) {
        return res.status(400).json("the new and old password are the same");
      }
    }
    if (confirmPassword !== newPassword) {
      return res.status(400).json("the passwords are not the same");
    } else {
      const salt = await bcrypt.genSalt(10);

      let passwordUpdate = await validEmail.update({
        password: await bcrypt.hash(newPassword, salt),
      });

      return res
        .status(200)
        .json({ message: "the password was updated successfully", validEmail });
    }
  } catch (error) {
    res.status(400).json({ error: `${error}` });
  }
}

module.exports = {
  changePassword,
};
