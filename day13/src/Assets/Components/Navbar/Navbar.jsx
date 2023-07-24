import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return(
        <div className='navbar'>
         
            <div title="tit"><h1 className="com">Acres.com</h1>
            </div>
            
           <div className='nav'>
            <Link to="/Home" className="HOME">HOME</Link>
            <Link to="/about" className="ABOUT">ABOUT</Link>
            <Link to="/property" className="PROPERTY">PROPERTY</Link>
            <Link to="/" className="LOGIN">SIGNOUT</Link>
            </div>
               
          
        </div>
            
        
        
       
      
   
    
          
     
      
    )
}
export default Navbar