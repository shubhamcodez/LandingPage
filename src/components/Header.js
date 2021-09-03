import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
    <div className = "header-container">
    <div className = "header-logo">
    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
    <img src="logo.jpg" className="nav-logo"/>  
    Company Corp. Limited.
    </Link>
    </div>
    <div className = "header-contact"> 
    Phone: <br></br>
    Email: <br></br>
    </div>
    </div>
    );
}          

export default Header;