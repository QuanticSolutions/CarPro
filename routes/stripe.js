
const express = require("express");
const Stripe = require("stripe");
const router = express.Router();
require('dotenv').config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


router.post("/", async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router