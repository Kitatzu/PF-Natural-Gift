const jwt = require("jsonwebtoken");
const { Users, Roles } = require("../db.js");

module.exports.verifyToken = async (req, res, next) => {
  const token = req.headers["auth"];
  try {
    if (!token) return res.status(403).json({ message: "Not token provided" });

    const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);

    req.userId = verifyToken.id;

    const findUser = await Users.findByPk(req.userId, { inclue: Roles });

    if (!findUser) return res.status(404).json({ message: "User not found" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};

module.exports.isAdmin = async (req, res, next) => {
  const findUser = await Users.findByPk(req.userId);

  const roles = await findUser.getRoles();

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].roleName === "Admin") {
      next();
      return;
    }
  }

  res.status(400).json({ message: "Not is Admin" });
};
