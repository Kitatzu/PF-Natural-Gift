const mongoose = require("mongoose");
require("dotenv").config();
const { DB_USER, DB_PASSWORD } = process.env;

const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@pf-natural-gift.bcbvfqq.mongodb.net/NaturalGiftDB?retryWrites=true&w=majority`;
module.exports = () => {
  const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log(`${err}`);
        } else {
          console.log("succefully conecction!");
        }
      }
    );
  };

  connect();
};
