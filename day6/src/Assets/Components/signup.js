// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Signup.css'


// const SignupPage = () => {
//   const [username, setname] = useState('');
//   const [password, setpassword] = useState('');
//   const [repeatpassword, setrepeatpassword] = useState('');
//   const [email, setemail] = useState('');
//   const [phone, setphone] = useState('');
  

//   const handleNameChange = (e) => {
//     setname(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setpassword(e.target.value);
//   };
//   const handleRepeatpasswordChange = (e) => {
//     setrepeatpassword(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setemail(e.target.value);
//   };
//   const handlePhoneChange = (e) => {
//     setphone(e.target.value);
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform sign-up logic here, such as making an API call to create a new user
//     console.log('USERNAME:', username);
//     console.log('PASSWORD:', password);
//     console.log('REPEATPASSWORD:', repeatpassword);
//     console.log('EMAIL', email);
//     console.log('Phone', phone);
//     // Reset form fields
//     setname('');
//     setpassword('');
//     setrepeatpassword('');
//     setemail('');
//     setphone('');
//   };

//   return (
//     <div className='back'>
//     <div className='b'>
//       <h1 className='f'>REGISTER</h1>
//       <form onSubmit={handleSubmit}>
//         <label >USERNAME:</label>
//         <input
//         type="text"
//         onChange={handleNameChange}
//         // placeholder='enter your name'
//         // required
//         />
//         <label>PASSWORD:</label>
//         <input
//           type="PASSWORD"
//           pattern="PASSWORD"
//           value={password}
//           onChange={handlePasswordChange}
//         //   placeholder='enter your password'
//         //   required
//         />
//         <label htmlFor="REPEATPASSWORD">REPEATPASSWORD:</label>
//         <input
//           type="PASSWORD"
//           id="PASSWORD"
//         //   placeholder='enter your password'
//         //   value={repeatpassword}
//           onChange={handleRepeatpasswordChange}
//         //   required
//         />
        
//         <label>EMAIL</label>
//         <input
//           type='EMAIL'
//           id='EMAIL'
          
//           value={email}
//         //   placeholder='enter your email'
//           onChange={handleEmailChange}
//         //   required
//         />

//         <label>PHONE</label>
//         <input
//            type='number'
//            pattern='[0-9]*'
        
        
//           value={phone}
//         //   placeholder='enter your phone number'
//           onChange={handlePhoneChange}
//         //   required
//         />
//         <br></br>
        
//         <br></br>
//         <Link to='/'>
//         <button type="submit">REGISTER</button>
//         </Link>
//         <br></br>

//         <h3>Already User<Link to='/'>LOGIN</Link></h3>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default SignupPage;
// import React, { useState } from "react";
// import './App.css';
// import { Link } from 'react-router-dom';
// import Signup from "./signup";

// function Login() {
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const [name, setname] = useState('');
//   const [vehicle, setvehicle] = useState('');

//   const handleNameChange = (e) => {
//     setname(e.target.value);
//   };

//   const handleVehicleChange = (e) => {
//     setvehicle(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     if(!name){
//       alert("please enter the username")
//     }
//     else if(!vehicle){
//       alert("please enter the vechile No")
//     }
//     else{
//       alert("Login sucessful")
//       // e.preventDefault();
//       // Perform sign-in logic here, such as making an API call to authenticate the user
//       console.log('Name:', name);
//       console.log('Vehicle:', vehicle);
//       // Reset form fields
//       setname('');
//       setvehicle('');
//     }
//   };
 

  
  

//   return (
//     // <div className="container">
//     //   <div className={`form-container ${isLoginForm ? "active" : ""}`} id="login-form">
//     //     <h1>Login</h1>
//     //     <form >
//     //       <label htmlFor="username">Username</label>
//     //       <input className="margin" type="text" id="username" name="username" placeholder="Enter username" value={name} onChange={handleNameChange} required/>
//     //       <label htmlFor="password">Vechile NO</label>
//     //       <input  className="margin" type="text" id="password"  placeholder="Vechile NO" value={vehicle} onChange={handleVehicleChange} required/>
//     //       </form>
//     //       <button  onClick={handleSubmit} type="submit">Login</button>
//     //     <p>
//     //       Don't have an account?{" "}
//     //       <Link to="/signup"  id="signup-link" >
//     //         New User
//     //       </Link>
//     //     </p>
//     //   </div>
      
//     // </div>
//   );
// }

// export default Login;

import "./sigm.css";
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
function Signup()
{

     const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
 
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setphone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to create a new user
    console.log('Name:', name);
    console.log('Password:', password);
    
    console.log('Email', email);
    console.log('Phone', phone);
    // Reset form fields
    setname('');
    setpassword('');
   
    setemail('');
    setphone('');
  };



    return(
        <div className="full">
            <div className="outer">
                <h1 id="t">Acres.com</h1>
                <h1 id="head">Register your Account</h1>
                <div className="fields" onSubmit={handleSubmit}>

<input id="usrnm" type="name" required placeholder="Enter your name here" onChange={handleNameChange}></input>
<br></br>
<br></br>
<br></br>
<input id="email" type="email" required placeholder="Enter your email here" value={email} onChange={handleEmailChange}></input>
<br></br>
<br></br>
<br></br>
<input id="password" type="password" required placeholder="Enter your password here" value={password} onChange={handlePasswordChange}></input>
<br></br>
<br></br>
<br></br>
<input id="mob" type="number" pattern='[0-9]*' required placeholder="Enter your mobile number here" value={phone} onChange={handlePhoneChange}></input>
<br></br>
<br></br>
<Link to='/'><button id="submit">REGISTER</button></Link>
<br></br>
           <h4 id="lower">Already have an account?<Link to='/signup'>Login</Link></h4>
           
                </div>
            </div>
        </div> 
    )
}

export default Signup;