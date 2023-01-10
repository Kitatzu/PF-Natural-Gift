const axios = require("axios");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      items: [
        {
          title: "are",
          description: "descr",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 10,
        },
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success",
      },
      payer: {
        phone:{
          area_code: "007",
          number: "665512",
        }
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    console.log(payment.data);

    return payment.data;
  }
}
module.exports = PaymentService;
