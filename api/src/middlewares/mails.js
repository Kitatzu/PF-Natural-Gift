const nodemailer = require("nodemailer");
const { Email, Pass } = process.env;

const transporter = nodemailer.createTransport({
  host: `smtp.gmail.com`,
  port: 465,
  secure: true,
  auth: {
    user: `${Email}`,
    pass: `${Pass}`,
  },
});

transporter.verify().then(() => {
  console.log("Ready to Send");
});

module.exports = { transporter };
