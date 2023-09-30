/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
//import "./paymentForm.css";
import{
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBRadio,
  MDBCard,
  MDBBtn,
} from "mdb-react-ui-kit";

const PaymentForm = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission

    // Redirect to "/payment" after form submission
    history.push("/payment");
  };
  return (
     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <Form className="payment-form" style={{width: "100vh", height: 400, marginBottom: 20, }} onSubmit={handleSubmit} >
      <h1 class="text-black mb-4" style={{ textAlign: "center" }}>Payment Details</h1>
      <MDBRow className=" d-flex" style={{ width: 1500, marginLeft: 80 }}>
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4" >
              <div className="d-flex" style={{gap:45, justifyContent:"center"}}>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    inline
                  />
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/visa.png"
                  />
                </div>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="option2"
                    inline
                  />
                  <img
                    className="img-fluid"
                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  />
                </div>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio2"
                    value="option2"
                    inline
                  />
                  <img
                    className="img-fluid"
                    src="https://cdn.icon-icons.com/icons2/2342/PNG/512/paypal_payment_method_icon_142749.png"
                    style={{ width: 60, height: 50 }}
                  />
                </div>
              </div>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                    Cardholder's Name
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cardName"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                    Card Number
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                    Expiry Date
                  </h6>
                </MDBCol>
                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cardNumber"
                    placeholder="MM/YY"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="align-items-center pt-2 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700, width: 150 }}
                  >
                  CVV
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <Input
                    type="text"
                    id="cvv"
                    placeholder="CVV"
                    style={{ width: 300 }}
                    required
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="my-4">
              </MDBRow>
              <MDBBtn
                color="success"
                block
                type="submit"
                style={{
                  width: 150,
                  height: 40,
                  fontSize: 14,
                  alignItems: "center",
                  margin: "0 auto",
                  marginLeft: 400,
                  backgroundColor: "#3A9943",
                }}
                // onClick={() => {
                //   navigate("/payment");
                // }}
              >
                Pay
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Form>
     </div>
  );
};

export default PaymentForm;