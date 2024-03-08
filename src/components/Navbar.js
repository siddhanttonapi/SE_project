import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from './logo5.jpeg';

const Navbar = () => {
    const logoStyle = {
        height: '50px', // Set the desired height
       
        marginRight: '10px', // Optional: Adjust spacing from other navbar elements
      };
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light "style={{ backgroundColor: '#3382b9',height:'60px' }}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <img src={logo} alt="Logo"  style={logoStyle}  className="d-inline-block align-top" />
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Log in</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
   
    </>
  );
}

export default Navbar;
