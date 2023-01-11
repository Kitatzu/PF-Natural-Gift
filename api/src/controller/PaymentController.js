const axios = require("axios");

const createPayment = async (item) => {
  try {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const body = {
      items: item,
      //aca va la redirección al home del deploy
      back_urls: {
        failure: "",
        pending: "",
        success: "", // naturalgift.com/home ---> 
      },
    };
    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
    const result = [
      payment.data.init_point,
      payment.data.id,
      payment.data.items.map((e) => {
        return e;
      }),
    ];
    return result;
  } catch (error) {
    next(error);
  }
};

const linkPayment = async (req, res, next) => {
  try {
    const resultado = await createPayment(req.body.item);
    res.send(resultado);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  linkPayment,
  createPayment,
};
