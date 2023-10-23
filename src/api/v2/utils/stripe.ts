import Stripe from "stripe";
import ApiError from "./error";

export const stripe = new Stripe("", {
  apiVersion: "2023-08-16",
});

export async function createPaymentIntent(amount: number, id: string) {
  try {
    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "GHS",
      payment_method: id,
    });
    return intent;
  } catch (e) {
    throw e;
  }
}

export async function addPaymentMethod(type: string, card: Object) {
  try {
    const paymentMethod = stripe.paymentMethods.create({
      type: "card",
      card: {
        number: "4242424242424242",
        exp_month: 12,
        exp_year: 2034,
        cvc: "314",
      },
    });
    return paymentMethod;
  } catch (e) {
    throw e;
  }
}
