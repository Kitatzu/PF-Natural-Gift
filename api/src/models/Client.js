const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  client: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const Client = mongoose.model("client", clientSchema);
module.exports = Client;
