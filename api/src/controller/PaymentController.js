class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {

      const payment = await this.subscriptionService.createPayment();
      console.log(payment.init_point, "aaaaaayyy");
      

      return res.send(payment);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ error: true, msg: "Failed to create payment" });
    }
  }
}

module.exports = PaymentController;
