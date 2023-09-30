import React from "react";
import "./productAdd.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import VueSweetalert2 from "sweetalert2";


function paymentAdmin() {

const [listOfproduct, setlistOfproduct] = useState([]);




useEffect(() => {
  Axios.get("http://localhost:3001/payment/api/getallpayment").then((response) => {
    setlistOfproduct(response.data);
  });
}, []);



  return (
    <div>
      <div className="main_container">
     <div className="item fw-bold fs-5">Product Management</div>
        <div className="item">
          <div className="row mt-5 ps-3">
            <div className="row">
              <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="d-flex justify-content-start align-items-center">
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-md-12 col-sm-12">
                <div className="row"></div>
              </div>
            </div>
          </div>
         
          <div className="row mt-5 px-3">
            <h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">Current Products</h6>
            

            <div className="table-responsive">
              <table
                className="table table-striped custom-table"
                id="assignLabsTable"
              >
                <thead>
                  <tr>
                    <th scope="col">Payment ID</th>
                    <th scope="col">amount</th>
                    <th scope="col">oderid</th>
                    <th scope="col">phoneNumber</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfproduct &&
                    listOfproduct
                      .map((StorePayment, i) => (
                        <tr class="crs-tr" data-status="active">
                          <td className="crs-td">{StorePayment._id}</td>
                          <td className="crs-td">
                            {StorePayment.amount}
                          </td>
                          <td className="crs-td">
                            {StorePayment.orderid}
                          </td>
                          <td className="crs-td">
                            {StorePayment.phoneNumber}
                            </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  paymentAdmin;
