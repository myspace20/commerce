import { stripe } from "./stripe";
import { createPaymentIntent } from "./stripe";

const objectP = {
  "id": "pi_1Gt0DG2eZvKYlo2ChVB0xUwV",
  "object": "payment_intent",
  "amount": 1000,
  "amount_capturable": 0,
  "amount_details": {
    "tip": {}
  },
  "amount_received": 0,
  "application": null,
  "application_fee_amount": null,
  "automatic_payment_methods": null,
  "canceled_at": null,
  "cancellation_reason": null,
  "capture_method": "automatic",
  "client_secret": "pi_1Gt0DG2eZvKYlo2ChVB0xUwV_secret_oRhjDYE0X9dGSc45nCUIrwDsQ",
  "confirmation_method": "automatic",
  "created": 1591919618,
  "currency": "usd",
  "customer": null,
  "description": "Created by stripe.com/docs demo",
  "invoice": null,
  "last_payment_error": null,
  "latest_charge": null,
  "livemode": false,
  "metadata": {},
  "next_action": null,
  "on_behalf_of": null,
  "payment_method": null,
  "payment_method_configuration_details": null,
  "payment_method_options": {
    "card": {
      "installments": null,
      "mandate_options": null,
      "network": null,
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card"
  ],
  "processing": null,
  "receipt_email": null,
  "redaction": null,
  "review": null,
  "setup_future_usage": null,
  "shipping": null,
  "statement_descriptor": null,
  "statement_descriptor_suffix": null,
  "status": "requires_payment_method",
  "transfer_data": null,
  "transfer_group": null
}


it('should create a payment intent with valid amount and payment method id', async () => {
    // Arrange
    const amount = 1000;
    const id = "payment_method_id";
    const expectedIntent = objectP;
    const createMock = jest.fn(stripe.paymentIntents.create).mockResolvedValue(expectedIntent);

    // Act
    const intent = await createPaymentIntent(amount, id);

    // Assert
    expect(createMock).toHaveBeenCalledWith({
      amount,
      currency: "GHS",
      payment_method: id,
    });
    expect(intent).toEqual(expectedIntent);
  });