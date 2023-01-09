const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const createRoles = require("./src/initServer.js");

server.listen(3001, () => {
  console.log("%s listening at 3001");
  try {
    conn
      .sync({ force: true })
      .then((response) => {
        createRoles();
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log("Error!!");
  }
});
