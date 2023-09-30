import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo/logo.png";
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
    const navigate = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate.push("/client/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
           console.log(error)
           alert("Invalid Login!")
        });
       
    }
 
    return(
        <>
        {/* <div>
          
            <main className='form-main'>        
                <section className='form-section'>
                    <div>
                                                                                  
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

								<div>
									<label htmlFor="password">
										Password
									</label>
									<input
										id="password"
										name="password"
										type="password"
										required
										placeholder="Password"
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
								</div>

								<div>
									<button onClick={onLogin}>
										Login
									</button>
								</div>
							</form>

							<p className="text-sm text-white text-center">
								No account yet?{" "}
								<NavLink to="/client/signup">
									Sign up
								</NavLink>
							</p>
						</div>
					</section>
				</main>
			</div>  */}

			<MDBContainer
				className="my-5 gradient-form"
				style={{ width: 1000, paddingTop: 40, height: 500 }}>
				<MDBRow>
					<MDBCol col="6" className="mb-5">
						<div className="d-flex flex-column ms-5">
							<div className="text-center">
								<img
									src={logo}
									style={{ width: "185px" }}
									alt="logo"
								/>
								<h4
									className="mt-1 mb-5 pb-1"
									style={{ fontSize: 20 }}>
									We are The Herbs Company
								</h4>
							</div>

							<p style={{ fontSize: 16 }}>
								Please login to your account
							</p>

							<h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								Email Address
							</h6>

							<MDBInput
								wrapperClass="mb-4"
								id="form1"
								type="email"
								style={{ height: 35, width: 450 }}
								onChange={(e) =>
									setEmail(e.target.value.toLowerCase())
								}
                                required
							/>

							<h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								Password
							</h6>
							<MDBInput
								wrapperClass="mb-4"
								id="form2"
								type="password"
								style={{ height: 35, width: 450 }}
								onChange={(e) =>
									setPassword(e.target.value)
								}
							/>

							<button
								style={{
									backgroundColor: "#3A9943",
									width: 120,
									fontSize: 16,
									marginLeft: 150,
									marginTop: 10,
								}}
								onClick={onLogin}>
								Login
							</button>

							<p
								className="text-sm text-white text-center"
								style={{
									marginRight: 150,
									fontSize: 14,
									marginTop: 5,
								}}>
								No account yet?{" "}
								<NavLink to="/client/signup">
									Sign up
								</NavLink>
							</p>
						</div>
					</MDBCol>

					<MDBCol col="6" className="mb-5">
						<div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
							<div className="text-white px-3 py-4 p-md-5 mx-md-4">
								<h4 class="mb-4" style={{ fontSize: 18 }}>
									We are more than just a company....
								</h4>
								<br />
								<br />
								<p
									class="small mb-0"
									style={{ fontSize: 16 }}>
									Herbs Private Limited is one of the top
									Nutraceutical, dietary supplement, food
									supplement manufacturer in Sri Lanka.
									<br />
									We provide high-quality dietary
									Supplements for the best nutrition
									brands across the market by using
									latest technologies and high quality
									ingredients.
								</p>
							</div>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
};

export default Login;
