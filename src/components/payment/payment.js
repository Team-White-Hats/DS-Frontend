import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./paymentForm.css";

const PaymentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <Form className="payment-form" onSubmit={handleSubmit}>
      <h2>Payment Details</h2>
      <FormGroup>
        <Label for="cardNumber">Card Number</Label>
        <Input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
      </FormGroup>
      <FormGroup>
        <Label for="expiryDate">Expiry Date</Label>
        <Input type="text" id="expiryDate" placeholder="MM/YY" />
      </FormGroup>
      <FormGroup>
        <Label for="cvv">CVV</Label>
        <Input type="text" id="cvv" placeholder="123" />
      </FormGroup>
      <Button color="primary" type="submit">
        Pay
      </Button>
    </Form>
  );
};

export default PaymentForm;