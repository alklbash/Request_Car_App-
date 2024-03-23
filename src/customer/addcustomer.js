import React , { useState } from "react";
import "./customer.css"
  
const  AddCustomer  = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    total_price: '',
    phone: '',
    structure_no: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
  <>
  

  <div class="container">
  <div class="box-left">
    <form>
      <div class="user-box">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />   
      </div>

      <div class="user-box">
        <label htmlFor="total_price">Total Price:</label><br/>
        <input type="text" id="total_price" name="total_price" value={formData.total_price} onChange={handleChange} />
      </div>

      <div class="user-box">
        <label htmlFor="phone">Phone:</label><br/>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br/>
      </div>

      <div class="user-box">
        <label htmlFor="structure_no">Structure Number:</label><br/>
        <input type="text" id="structure_no" name="structure_no" value={formData.structure_no} onChange={handleChange} /><br/>
      </div>

      <div class="user-box">
        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br/>
      </div>

      <div class="user-box">
       <button > Save </button>
      </div>

    </form>
  </div>

  <div class="box-right">
    sddddddddd 
  </div>
</div>



  
  </>
 ) };

export default  AddCustomer;

