import React from "react";
import "./productAdd.css";
import { useState, useEffect } from "react";
import Axios from "axios";


function ProductAdd() {

  const [product_ids, setproduct_id] = useState("");
  const [productName, setproduct_name] = useState("");
  const [productCategory, setproduct_category] = useState(0);
  const [price, setprice] = useState(0);
  const [quantity, setproduct_quantity] = useState("");
const [longDescription, setlongDescription] = useState("");
const [status, setstatus] = useState(0);
const [smallDescription, setsmallDescription] = useState("");
const [listOfproduct, setlistOfproduct] = useState([]);
const [productImage,setproductImage] = useState("");
const [ProductSearch, setproductSearch] = useState("");
console.log(productName);


const handleSubmit = (e) => {
  e.preventDefault();
  createProduct();
};


//add product
const createProduct = () => {
  Axios.post("http://localhost:3001/product/api/create",{
    
  productName,
  productCategory,
  price,
  productImage,
  quantity,
  status,
  smallDescription,
  longDescription,
  
  }).then((response) => {
    setlistOfproduct([
      ...listOfproduct,
      {
        productName,
        productCategory,
        price,
        productImage,
        quantity,
        status,
        smallDescription,
        longDescription,
      },
    ]);
  }).then(function () {
    // Redirect the user
    window.location.href = "/admin/addproduct";
  });
};







//image 
const addcoverimage= () => {
  let imgDiv = document.getElementById("imgInputDiv");

  let imgUploader = document.createElement("input");
  imgUploader.setAttribute("id", "imgUploader");
  imgUploader.setAttribute("type", "file");
  imgUploader.setAttribute("accept", "image/png, image/gif, image/jpeg");
  imgUploader.setAttribute("class", "d-none")
  imgDiv.appendChild(imgUploader);

  let imgUploaderElement = document.getElementById("imgUploader");
  console.log(imgUploaderElement);

  if (imgUploaderElement !== undefined && imgUploaderElement !== null) {
      imgUploaderElement.click();
      imgUploaderElement.addEventListener("change", () => {
          imgUploaderElement = document.getElementById("imgUploader");
          console.log(imgUploaderElement);
          if (imgUploaderElement.files[0] !== null && imgUploaderElement.files[0] !== undefined) {
              if (imgUploaderElement.files.length > 0) {
                  const fileReader = new FileReader();

                  fileReader.onload = function (event) {
                    //setimage_url(event.target.result);
                  };

                  fileReader.readAsDataURL(imgUploaderElement.files[0]);
              }
          }
      });
  }

  document.getElementById("btnEditImg").removeAttribute("disabled");
  document.getElementById("btnImgDelete").removeAttribute("disabled");
}

const updatecoverimage = () => {
  document.getElementById("ProfileImage").removeAttribute("src");
  document.getElementById("btnAddImg").setAttribute("disabled", "true");

  let imgDiv = document.getElementById("imgInputDiv");

  let imgUploader = document.createElement("input");
  imgUploader.setAttribute("id", "imgUploader");
  imgUploader.setAttribute("type", "file");
  imgUploader.setAttribute("required", "true");
  imgUploader.setAttribute("accept", "image/png, image/gif, image/jpeg");
  imgUploader.setAttribute("class", "d-none")
  imgDiv.appendChild(imgUploader);

  let imgUploaderElement = document.getElementById("imgUploader");
  console.log(imgUploaderElement);

  if (imgUploaderElement !== undefined && imgUploaderElement !== null) {
      imgUploaderElement.click();
      imgUploaderElement.addEventListener("change", () => {
          imgUploaderElement = document.getElementById("imgUploader");
          console.log(imgUploaderElement);
          if (imgUploaderElement.files[0] !== null && imgUploaderElement.files[0] !== undefined) {
              if (imgUploaderElement.files.length > 0) {
                  const fileReader = new FileReader();

                  fileReader.onload = function (event) {
                // setimage_url(event.target.result);
                  };

                  fileReader.readAsDataURL(imgUploaderElement.files[0]);
              }
          }
      });
  }

}
const removecoverImages = () => {
document.getElementById("ProfileImage").removeAttribute("src");
document.getElementById("btnImgDelete").setAttribute("disabled", "true");
} 




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
          <form>
                            <div className="row">
                                <div className="col d-flex justify-content-end align-items-center">
                                    <div className="col d-flex justify-content-end">
                                        <div>
                                            <button className="btn btnAddImg" id="btnAddImg" type="button">
                                           
                                            </button>
                                            <button className="btn btnEditImg" id="btnEditImg" type="button">
                                                <i className="fa-solid fa-pen text-white"/>
                                            </button>
                                            <button className="btn btnImgDelete" id="btnImgDelete" type="button" >
                                                 
                                                <i className="fa-solid fa-trash-can d-inline text-white"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="imgInputDiv">
                                        <div>
                                            <img id="ProfileImage" className="imgDiv" 
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

              <div className="row mt-3">
             
                <div className="col-sm-6">
                  <input
                   value={productName}
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    onChange={(event) => {
                      setproduct_name(event.target.value);
                    }}
                  />
                
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <select
                     value={productCategory}
                    name="type"
                    className="form-select"
                    aria-label="role" 
                    onChange={(event) => {
                      setproduct_category(event.target.value);
                    }}
                    
                  >
                    <option selected disabled value="0" >
                     Product Category
                    </option>
                    <option value="Supplements">Supplements</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Baby care">Baby care</option>
                    <option value="Bath">Bath</option>
                  </select>
                </div>

    
              </div>

              <div className="row mt-4">
                <div className="col">
                  <input
                    type="text"
                    value={quantity}
                    className="form-control"
                    placeholder="Quantity"
                    onChange={(event) => {
                      setproduct_quantity(event.target.value);
                    }}
                  />
                  
                </div>
                <div className="col">
                  <input
                  value={price}
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    onChange={(event) => {
                      setprice(event.target.value);
                    }}
                  />
                 
                </div>
                <div className="col">
                  <select
                  value={status}
                    name="status"
                    className="form-select"
                    aria-label="role"
                    onChange={(event) => {
                      setstatus(event.target.value);
                    }}
                   
                  >
                    <option selected disabled value="0">
                      Status
                    </option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
              </div>
              
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                     value={smallDescription}
                      id="exampleFormControlTextarea1"
                      rows="2"
                      placeholder="Small Description"
                      onChange={(event) => {
                        setsmallDescription(event.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                    value={longDescription}
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="Additional Info"
                      onChange={(event) => {
                        setlongDescription(event.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    type="submit"
                    id="reg"
                    className="btn btnRegister "
                   onClick={createProduct}
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    id="edit"
                    className="btn btnUpdate"
                   
                  >
                    Update 
                  </button>
                  <button type="button" id="delete" className="btn btnDelete">
                  Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row mt-5 px-3">
            <h6 className="mb-0 fw-bold mt-2 mb-2 fs-5">Current Products</h6>
            <div className="row mb-5">
              <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    id="searchID"
                    type="text"
                    className="form-control col-8 me-5 px-5"
                    placeholder="Product Name"
                   
                  />
                </div>
                <div>
                  <input
                    type="button"
                    className="form-control btnSearch text-white"
                    value="Search"
                  />
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table
                className="table table-striped custom-table"
                id="assignLabsTable"
              >
                <thead>
                  <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Cover Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Type</th>
                    <th scope="col">contacts</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
              
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
