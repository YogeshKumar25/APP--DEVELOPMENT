import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='nav'>
                <Link to='/' className='Home'>
                    <h1>Home</h1>
                </Link>
                <Link to='/signin' className='signin'>
                    <h1>signin</h1>
                </Link>



            </div>
        </div>
    )
}
export default Navbar