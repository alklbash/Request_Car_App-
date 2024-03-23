import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./layout/navbar";
import Addcustomer from "./customer/addcustomer";

import Paymet from "./services/payment";
import Updatelocation from "./services/update-location";
import Searchlocation from "./services/search-location"; 
import Login from "./Login/login";
import Dashboard from "./layout/dashboard";
 
function App() {
  return (
    <BrowserRouter>
  
    <Routes> 
              <Route path="menu" element={<Dashboard/>} />   
 
              <Route path="addcustomer" element={<Addcustomer/>} /> 
              <Route path="payment" element={<Paymet/>} />
              <Route path="update-location" element={<Updatelocation/>} />
              <Route path="search-location" element={<Searchlocation/>} />
      
              <Route path="./login" element={<Login/>} />  
              <Route index element={<Login/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
