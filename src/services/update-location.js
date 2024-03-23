import React , { useState } from "react";
import "./update-location.css"
   
const  Updatelocation   = () => {
  const [formData, setFormData] = useState({
    name: '',
    total_price: '',
    phone: '',
    structure_no: '',
    Loction: ''
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
    
  <div class="user-box">
        <label htmlFor="structure_no">Structure Number:</label><br/>
        <input type="text" id="structure_no" name="structure_no" value={formData.structure_no} onChange={handleChange} /><br/>
      </div>

      <form>
      <div class="user-box">
       <button > Search </button>
      </div> 
      </form>
   
 
  </div>
 

  <div class="box-right">
  <form> 
      <div className="user-box">
       <label htmlFor="Location">Location:</label><br/><br/>
       <select id="Location" name="Location" value={formData.Location} onChange={handleChange}>
       <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
      </select><br/>
    </div>

 
      <div class="user-box">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} readOnly />   
      </div>

      <div class="user-box">
        <label htmlFor="total_price">Total Price:</label><br/>
        <input type="text" id="total_price" name="total_price" value={formData.total_price} onChange={handleChange} readOnly  />
      </div>

      <div class="user-box">
        <label htmlFor="phone">Phone:</label><br/>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}  readOnly  /><br/>
      </div>
  
    </form>
  </div>
</div>

 
  </>
 ) };

export default  Updatelocation;