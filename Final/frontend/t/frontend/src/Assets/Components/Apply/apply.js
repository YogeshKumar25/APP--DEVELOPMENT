import React, { useState } from 'react';
import './apply.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ApplyCard() {


  const Username=useSelector((state)=>state.name)
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData={
      name,
      lastName,
      email,
      contact,

    }

    // Form validation
    console.log(formData);
       axios.post('http://localhost:8080/api/v1/demo',formData)
       .then((response)=>{
        console.log(response.data);
         setSubmitted(true);
         window.location.reload(true);

       })

     
      . catch ((error)=> {
        console.log(error);
      });
  };
      
     
    
      


     
      

     
 

  return (
    <>
      <div className="frm">
        <div className="fr-m-body">
          <form className="fields" onSubmit={handleSubmit}>
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

            <p className="red">hi, {Username}</p>
            <br />
            <div>
              <h1>Buyer details</h1>
            </div>
            <br />
            <br />

            <div className="username">
              <input
                className="form__input"
                type="text"
                id="firstName"
                onChange={(e) =>setName(e.target.value)}
                placeholder="First Name"
                value={name}
              />
            </div>
            <br />

            <div className="lastname">
              <input
                type="text"
                id="lastName"
                className="form__input"
                placeholder="LastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <br />

            <div className="email">
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <br />

            <div className="phone">
              <input
                type="number"
                id="mob"
                pattern="[0-9]*"
                className="form__input"
                placeholder="Enter your phone"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
              />
            </div>
            <br />

            <br />

            <button type="submit" className="btn">
              send details
            </button>
          </form>
        </div>
      </div>
    </>
  );
 
}
