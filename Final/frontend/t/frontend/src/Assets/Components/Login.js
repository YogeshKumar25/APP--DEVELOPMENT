// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import './App.css';
// // import { Link } from "react-router-dom";

// // function Signup() {
// //   const [isLoginForm, setIsLoginForm] = useState(true);

//   // const switchToLogin = (event) => {
//   //   event.preventDefault();
//   //   setIsLoginForm(true);
//   // };

//   // const switchToSignup = (event) => {
//   //   event.preventDefault();
//   //   setIsLoginForm(false);
//   // };

//   // return (
//     // <div className="container">
//     //   <div className={`form-container ${!isLoginForm ? "active" : ""}`} id="signup-form">
//     //     <h1>New User</h1>
//     //     <form>
//     //       <label htmlFor="new-username">First name</label>
//     //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your firstname"/>
//     //       <label htmlFor="new-username">Last name</label>
//     //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your lastname"/>
//     //       <label htmlFor="new-email">Email Id</label>
//     //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/>
//     //       <label htmlFor="new-email">Mobile No</label>
//     //       <input className="margin" type="number" id="new-password" name="new-password" placeholder="   enter mobile no" required />
//     //       <label htmlFor="new-email">Vechile No</label>
//     //       <input className="margin" type="text" id="new-password" name="new-password" placeholder="   enter vechile no" required />
//     //       <label htmlFor="new-email">Select Vechile Type </label>
//     //       <select className="margin1" id="new-password" name="new-paddword" >
  
//     //          <option value="volvo">  TWO-Wheeler</option>

//     //          <option value="fiat">  FOUR-Wheeler  </option>
//     //          <option value="audi">  OTHER</option>
             
//     //          </select>
//     //       <button  className="sumit" type="submit">Sign Up</button>
//     //     </form>
//     //     <p>
//     //       Already have an account?{" "}
//     //       <Link to="/"  id="login-link">
//     //         Login
//     //       </Link>
//     //     </p>
//     //   </div>
//     // </div>
// //   );
// // }

// // export default Signup;
// import "./sigm.css";
// import {Link} from 'react-router-dom';
// function Login()
// {   
    
    
//       const [email, setemail] = useState('');
//       const [password, setpassword] = useState('');
//       const [errors, setErrors]=useState({})

//       const navigate = useNavigate();
  
//       const handleEmailChange = (e) => {
//         setemail(e.target.value);
//       };
    
//       const handlePasswordChange = (e) => {
//         setpassword(e.target.value);
//       };

//      const handleSubmit=(e)=>{
//       e.preventDefault();
      
//       const data = {

//         email:email,
//         password:password

//       };

//       fetch('http://localhost:8080/post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => response.json())
      
//         .then((responseData) => {
//           console.log('Success:', responseData);
        
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//         const validationErrors = {};

//         if (email.trim() === '') {
//           validationErrors.email = 'First Name is required';
//         }
      
//         if (password.trim() === '') {
//           validationErrors.password = 'Password is required';
//         } else if (!/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$%^&()])[A-Za-z\d@#$%^&()]{8,}/.test(password)) {
//           validationErrors.password =
//             'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character';
//           alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character');
//         }
      
//         setErrors(validationErrors);
      
//         if (Object.keys(validationErrors).length === 0) {
//           navigate('/na');
//         }
    
//     };

//     return(
//         <div className="full">
//             <div className="outer" id="login-full">
//                 <h1 id="title">Acres.com</h1>
//                 <h1 id="head">LOGIN</h1>
//                 <div className="fields">



// <br></br>
// <br></br>
// <input id="email" type="email" required placeholder="Enter your email here" value={email}  
//  onChange={handleEmailChange}></input>


// <br></br>
// <br></br>
// <br></br>
// <input id="password" type="password" required placeholder="Enter your password here"  value={password}  onChange={handlePasswordChange} />
// <br></br>
// <br></br>
// <br></br>
// <button id="submit" onSubmit={handleSubmit} type="submit"><Link to='/na'>LOGIN</Link></button>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
// <br></br>
//            <h4 id="lower">Dont have an account?{" "}<Link to='/reg'>Register</Link></h4>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login;


import React, { useState } from 'react';
import './sigm.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';


// ... (previous imports and code) ...

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleformSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"POSTEMAIL",payload:email})
    

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email,
        password,
      });

      navigate('/Home');

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Password is Incorrect');
    }
  };

  return (
    <div className="full">
      <div className="outer" id="login-full">
        <h1 id="title"></h1>
        <h1 id="head">LOGIN</h1>
        <div className="fields">
          <label htmlFor="email">User email</label>
          <br/>
          <input
            id="email"
            label='user'
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>

          <label htmlFor="password">Password</label>
          <br/>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button id="submit" onClick={handleformSubmit} type="submit">
            LOGIN
          </button>

          <h4 id="lower">
            Don't have an account? <Link to="/reg">Register</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;