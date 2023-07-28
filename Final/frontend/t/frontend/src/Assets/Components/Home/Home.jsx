import React from "react";

import Navbar from "../Navbar/Navbar";
import Hero from "../hero";
import hm from './im1.png'
import Featured from "../Featured/Featured";
import Footer from "../common/Footer/Footer";




const Home = () => {
    return (
    <>
        <div><Navbar/></div>
        <div className="M1"> 
            <img className="ig1" src={hm} alt="pic" />
            <div className="heading"><h1>Search Your Next Home</h1></div>
            <div className="heading"><p>Find new & featured property located in your local city.</p></div>
            
        </div>
        <div><Hero/>
        <Featured/>
        <Footer/>
        </div>
        
        
        
       
       
        
    </>
           
    
         
    )
        
      
      
    
    
}
export default Home