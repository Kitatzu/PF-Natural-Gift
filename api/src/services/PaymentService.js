const axios = require("axios");

class PaymentService {
  async createPayment(req, res) {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: req.body,
      items: [
        {
          title: req.body,
          description: req.body,
          picture_url: req.body,
          category_id: req.body,
          quantity: req.body,
          unit_price: req.body,
        },
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "https://i.pinimg.com/736x/a8/6d/fe/a86dfeb831a9e1865807274c9657ddb5.jpg",
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }
}

module.exports = PaymentService;
