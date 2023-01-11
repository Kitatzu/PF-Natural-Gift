const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const createRoles = require("./src/initServer.js");
require("dotenv").config();
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  try {
    conn
      .sync({force: true})
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
