const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors({ origin: 'http://localhost:1234/pform/' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/payment', async (req, res) => {
  try {
    const { amount, id } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      payment_method: id,
      confirm: true,
    });

    // If payment is successful, you can perform additional actions here

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Payment failed' });
	
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});