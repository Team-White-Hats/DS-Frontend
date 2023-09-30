import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRadio,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Delivery() {
  const navigate = useHistory();

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="9" className="my-5">
          <h1 class="text-black mb-4">Get Your Delivery</h1>

          <MDBCard>
            <MDBCardBody className="px-4">
              <MDBRow className="align-items-center pt-4 pb-3 mt-5">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-0"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                    Enter Your Delivery Address
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBTextArea id="textAreaExample" rows={3} />
                </MDBCol>
              </MDBRow>

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-5"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                    Select Your Delivery Method
                  </h6>
                </MDBCol>
                <MDBCol>
                  <div className="d-md-flex ustify-content-start align-items-center mb-4">
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="option1"
                      inline
                    />
                    <h6 className="mb-0" style={{ fontSize: 14 }}>
                      Cash on Delivery
                    </h6>
                  </div>
                  <div className="d-md-flex ustify-content-start align-items-center mb-4">
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="option2"
                      inline
                    />
                    <h6 className="mb-0" style={{ fontSize: 14 }}>
                      Card Payment
                    </h6>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow className="align-items-center pt-4 pb-3">
                <MDBCol md="3" className="ps-5">
                  <h6
                    className="mb-0"
                    style={{ fontSize: 14, fontWeight: 700 }}
                  >
                    Select Your Delivery Date
                  </h6>
                </MDBCol>

                <MDBCol md="9" className="pe-5">
                  <MDBInput id="textAreaExample" rows={3} style={{height: 35}} />
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn
                className="my-4"
                style={{
                  width: 150,
                  height: 40,
                  fontSize: 14,
                  alignItems: "center",
                  marginLeft: 400,
                  backgroundColor: "#3A9943",
                }}
                onClick={() => {
                  navigate.push("/client/payment");
                }}
              >
                Purchase Your Order
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Delivery;