const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  try {
    const price = await stripe.prices.retrieve('price_1RAUSEKHKb9eiiXevDDQSjnr');
    const amount = price.unit_amount / 100;
    const currency = price.currency.toUpperCase();

    return {
      statusCode: 200,
      body: JSON.stringify({ amount, currency })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

