import React from "react";
import {Link } from "react-router-dom";
 import "./login.css"
 
const Login = () => {
    return ( 
        <>   
        <div class="login-box">
             <h2>Login</h2>
              <form>
        <div class="user-box">
               <input type="text" name="" required=""></input>
               <label>Username</label>
        </div>
       <div class="user-box">
                <input type="Password" required="" ></input>
                <label>Password</label>
       </div>
             
                 <Link to="/menu"> Login </Link>

  </form>
</div>        
       </>
  )
};

export default Login;