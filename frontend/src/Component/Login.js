import React from 'react'
import './login.css';
// import logImg from './images/login.jpg';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Login ()  {

    const [formData, setFormData] = useState({
      username_or_Email:'',
      password:''
      
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      // e.preventDefault();
      let url = 'http://localhost/testingpc/backend/login.php';
      axios.post(url , formData).then(function(response) {
        if(response.data.success) {
          window.location.href = '/order';
          alert("login succed");
        }
      })
      .catch(function(error){
        alert(error);
      })
      
    }
  

    
  return (
    <div>
    
    <section>
      <div className="imgBxLogin">
          {/* <img src={logImg} alt="Form" /> */}
      </div>
      <div className="contentBxLogin">

       <form className="formLogin" onSubmit={handleSubmit}>
        <p className="form-heading">Login</p>
        

        

          <div className="inputBx">
          <input
            type="text"
            id='username_or_Email'
            name="email"
            value={formData.username_or_Emailemail} onChange={handleChange}
            className="input-box"
            placeholder="Username / Email"
            required
          />
          </div>


          
          <div className="inputBx">
          <input
            type="password"
            id='password'
            name="password"
            value={formData.password} onChange={handleChange}
            className="input-box"
            placeholder="Password"
            required
          />
          </div>

          
          <div className="inputBx">
          <input
            type="submit"
            name="sumbit-btn"
            value="Login"
            className="submit-button"
          />
          </div>
          <div className="backSign">
            Don't have an account? <Link to="/register" className='backSignLink'>Sign up</Link><br />
            <Link to = "/forgotpassword">Forgot Password</Link>
          </div>
        </form>
      </div>
     </section>
    </div>
  );
}

export default Login
