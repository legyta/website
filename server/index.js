// const express = require("express");
// const app = express();
// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
// const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(cors());

// app.post("/women-sessions", cors(), async (req, res) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "EUR",
//       description: "donation",
//       payment_method: id,
//       confirm: true,
//       automatic_payment_methods: {
//         enabled: true,
//       },
//     });
//     console.log("Payment", payment);
//     res.json({
//       message: "Thanks for the donation",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// });

// app.listen(process.env.PORT || 3001, () => {
//   console.log("Server is Listening on PORT 3001 ");
// });
