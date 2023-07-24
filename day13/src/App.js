import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Components/Login";
import SignupPage from "./Assets/Components/signup";

import Navbar from "./Assets/Components/Navbar/Navbar";
import Home from "./Assets/Components/Home/Home";
import About from "./Assets/Components/About/About";
import Property from "./Assets/Components/Property/Property";
import New from "./Assets/Components/new";
import BasicCard from "./Assets/Components/Bangalore/home/homeb";
import OasicCard from "./Assets/Components/Bangalore/home/ownerb";
import ApplyCard from "./Assets/Components/Apply/apply";
import Signup from "./Assets/Components/signup";
import Login from "./Assets/Components/Login";



function App()
{
  return(
    <div className="App">
   <BrowserRouter>
    <Routes>
    
        <Route path="/na" element={<Home/>}/>
        <Route path="/REG" element={<Signup/>}/>
        <Route path="/signup" element={<Login/>}/>

        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/property" element={<Property/>}/>
         <Route path="/mba" element={<BasicCard/>}/>
         <Route path="/ownb" element={<OasicCard/>}/>
         <Route path="/Apply" element={<ApplyCard/>}/>
        
        
      
  
    </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App