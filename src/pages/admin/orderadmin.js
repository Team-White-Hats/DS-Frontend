import React from "react";
import "./productAdd.css";
import { useState, useEffect } from "react";
import Axios from "axios";



function paymentAdmin() {

const [listOfproduct, setlistOfproduct] = useState([]);




useEffect(() => {
  Axios.get("http://localhost:3001/order/api/getallorder").then((response) => {
    setlistOfproduct(response.data);
  });
}, []);



  return (
    <div>
      <div className="main_container">
     <div className="item fw-bold fs-5">Order Management</div>
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
            <h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">Current Orders</h6>
            

            <div className="table-responsive">
              <table
                className="table table-striped custom-table"
                id="assignLabsTable"
              >
                <thead>
                  <tr>
                    <th scope="col">Order ID</th>
                    <th scope="col">products</th>
                    <th scope="col">total</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfproduct &&
                    listOfproduct
                      .map((Order, i) => (
                        <tr class="crs-tr" data-status="active">
                          <td className="crs-td">{Order._id}</td>
                          <td className="crs-td">
                            {Order.products}
                          </td>
                          <td className="crs-td">
                            {Order.total}
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
