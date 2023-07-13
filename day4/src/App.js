import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Components/Login";
import SignupPage from "./Assets/Components/signup";

import Navbar from "./Assets/Components/Navbar/Navbar";
import Home from "./Assets/Components/Home/Home";
import About from "./Assets/Components/About/About";
import Property from "./Assets/Components/Property/Property";
import New from "./Assets/Components/new";



function App()
{
  return(
    <div className="App">
   <BrowserRouter>
    <Routes>
    
        <Route path="/na" element={<Navbar/>}/>
        <Route path="/REG" element={<SignupPage/>}/>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/property" element={<Property/>}/>
        {/* <Route path="/new" element={<New/>}/> */}
        
      
  
    </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App