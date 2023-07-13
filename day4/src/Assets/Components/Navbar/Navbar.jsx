import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return(
        <div className='navbar'>
         
            <div title="tit"><h1 className="com">Acres.com</h1>
            </div>
            
           <div className='nav'>
            <Link to="/home" className="HOME">HOME</Link>
            <Link to="/about" className="ABOUT">ABOUT</Link>
            <Link to="/property" className="PROPERTY">PROPERTY</Link>
            <Link to="/" className="LOGIN">SIGNOUT</Link>
            </div>
               
            {/* <div><Link to="/new" className="new">
            <img src="https://img.freepik.com/free-vector/silhouette-skyline-illustration_53876-78786.jpg?w=900&t=st=1689188997~exp=1689189597~hmac=68e0b18d7a4cd587d16abb997ecfcc51fe03ee6f5ae34c690d56e0201412a0c2">
            </img>
            </Link> */}
        </div>
            
        
        
       
      
   
    
          
     
      
    )
}
export default Navbar