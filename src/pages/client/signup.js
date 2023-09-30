import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useHistory} from "react-router-dom"
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import "./signup.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
 
const Signup = () => {
    const navigate = useHistory();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    
    
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate.push("/client/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    // <main className='signup-main'>        
    //     <section className='signup-section'>
    //         <div>
    //             <div>                  
    //                 <h1> Herbs </h1>                                                                            
    //                 <form className='signup-form'>                                                                                            
    //                     <div>
    //                         <label htmlFor="email-address">
    //                             Email address
    //                         </label>
    //                         <input
    //                             type="email"
    //                             label="Email address"
    //                             value={email}
    //                             onChange={(e) => setEmail(e.target.value)}  
    //                             required                                    
    //                             placeholder="Email address"                                
    //                         />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="password">
    //                             Password
    //                         </label>
    //                         <input
    //                             type="password"
    //                             label="Create password"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)} 
    //                             required                                 
    //                             placeholder="Password"              
    //                         />
    //                     </div>                                             
                        
    //                     <button
    //                         type="submit" 
    //                         onClick={onSubmit}                        
    //                     >  
    //                         Sign up                                
    //                     </button>
                                                                     
    //                 </form>
                   
    //                 <p>
    //                     Already have an account?{' '}
    //                     <NavLink to="/login" >
    //                         Sign in
    //                     </NavLink>
    //                 </p>                   
    //             </div>
    //         </div>
    //     </section>
    // </main> <MDBContainer fluid>
<MDBContainer>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px', height:550}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

          <p style={{ fontSize: 25, fontWeight:700 }}>
								Sign Up
							</p>

            <div className="d-flex flex-row align-items-center mb-4 ">
            <h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								First Name
							</h6>
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput id='form1' type='text' style={{ height: 35, width: 450 }} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="d-flex flex-row align-items-center mb-4 ">
            <h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								Last Name
							</h6>
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput id='form1' type='text' style={{ height: 35, width: 450 }}  onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="d-flex flex-row align-items-center mb-4 ">
            <h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								Mobile Number
							</h6>
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput id='form1' type='text' style={{ height: 35, width: 450 }}  onChange={(e) => setMobileNumber(e.target.value)} />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
            <h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								Email Address
							</h6>
              <MDBIcon fas icon="envelope me-3" size='lg'/>
              <MDBInput id='form2' type='email' style={{ height: 35, width: 450 }}   onChange={(e) => setEmail(e.target.value)}  />
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
            <h6
								style={{
									fontSize: 15,
									fontWeight: 700,
									marginTop: 15,
								}}>
								Password
							</h6>
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput id='form4' type='password' style={{ height: 35, width: 450 }}  onChange={(e) => setPassword(e.target.value)} />
            </div>

            <MDBBtn className='mb-4' size='lg' style={{
									backgroundColor: "#3A9943",
									width: 150,
                                    height: 40,
									fontSize: 16,
									marginLeft: 150,
									marginTop: 10,
								}}
                                href='/client/login'>
                                    Register</MDBBtn>

          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>

  )
}
 
export default Signup;