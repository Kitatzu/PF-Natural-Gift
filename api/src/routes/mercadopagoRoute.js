const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");
require("dotenv").config();
// router.use(express.json());
mercadopago.configure({ access_token: process.env.ACCESS_TOKEN });

router.post("/", (req, res) => {
  // res.status(200).send("funciona")
  const data = req.body;
  let preference = {
    items: [],
    back_urls: {
      failure: "/failure",
      pending: "/pending",
      success:
        "https://i.pinimg.com/736x/a8/6d/fe/a86dfeb831a9e1865807274c9657ddb5.jpg",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  if (Array.isArray(data.name)) {
    for (let i = 0; i < data.name.length; i++) {
      preference.items.push({
        title: data.name[i],
        picture_url: data.image[i],
        description: data.description[i],
        category_id: data.category_id[i],
        unit_price: parseInt(data.price[i]),
        quantity: parseInt(data.quantity[i]),
      });
    }
  } else {
    preference.items.push({
      title: data.name,
      picture_url: data.image,
      description: data.description,
      category_id: data.category_id,
      unit_price: parseInt(data.price),
      quantity: parseInt(data.quantity),
    });
  }

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.send(response.response.init_point);
      /*  res.redirect(response.response.init_point); */
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
