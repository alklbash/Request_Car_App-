import React , { useState } from "react";
import "./search-location.css"

const  Searchlocation   = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    structure_no: '',
 
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
        <label htmlFor="structure_no">Structure Number:</label><br/>
        <input type="text" id="structure_no" name="structure_no" value={formData.structure_no} onChange={handleChange} /><br/>
      </div>

  <div class="user-box">
       <button> Search </button>
      </div>
 
  </form>
  </div>
 

  <div class="box-right">
  <form> 
    
      <div class="user-box">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} readOnly />   
      </div> 

      <div class="user-box">
        <label htmlFor="phone">Phone:</label><br/>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}  readOnly  /><br/>
      </div>
  
    </form>
  </div> 
</div>

 
<div class="container">
  <div class="box-down"> 
 <div class="user-box">
    <label htmlFor="history_car"> Car history  </label>   
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
     </div>
 </div> 
</div>
  

  </>
 ) };

export default  Searchlocation;