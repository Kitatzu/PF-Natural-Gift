const { Roles } = require("./db.js");

module.exports = createRoles = async () => {
  try {
    const count = await Roles.findAll();

    if (count.length) return;

    const values = await Promise.all([
      await Roles.create({ roleName: "Admin" }),
      await Roles.create({ roleName: "Moderator" }),
      await Roles.create({ roleName: "User" }),
    ]);
  } catch (error) {
    console.error(error);
  }
};
