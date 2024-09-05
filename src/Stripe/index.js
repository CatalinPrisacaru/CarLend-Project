// Nu merge pentru ca imi trebuie upgrade pe Firebase

const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51PoJ5zDRjIy3cOKHgpT2xskOtxrgmM0UpzAB3y42qDtZYTdjizCPexJesgMH5yvJUFcZJCsF2EYVnKwVTIDFStGA0030aHp0Vb"
);
exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: data.amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
