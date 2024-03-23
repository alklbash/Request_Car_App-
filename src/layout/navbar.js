import React from "react";
import {Link , NavLink  , Outlet } from "react-router-dom";
import "./nav.css"


const Navbar = () => {
    return (
      <div className="topnav">
        
       <NavLink to="/addcustomer" className="active">Add New Customer</NavLink> 
       <NavLink to="/update-location" className="active">Update location</NavLink> 
       <NavLink to="/payment" className="active">Invices</NavLink> 

      <NavLink to="/search-location" className="active">Search location</NavLink> 
      
</div>

  
    )
  };
  
  export default Navbar;

