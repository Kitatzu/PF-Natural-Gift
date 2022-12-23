const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const createRoles = require("./src/initServer.js");
require("dotenv").config();
const { PORT } = process.env;

conn.sync({ force: true }).then(() => {
  createRoles();
  server.listen(PORT, () => {
    console.log("%s listening at", PORT); // eslint-disable-line no-console
  });
});
