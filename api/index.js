const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const createRoles = require("./src/initServer.js");

conn.sync({ force: true }).then(() => {
  createRoles();
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
