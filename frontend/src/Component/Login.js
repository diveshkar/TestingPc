import React from 'react'
import './login.css';
import axios from 'axios';
import { useState } from 'react';

function Login () {
  const [formData, setFormData] = useState({
    username_or_Email:'',
    password:''
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
      <form className='loginform' onSubmit={handleSubmit}>
        <label>username_or_Email</label>
        <input type='text' name = "username_or_Email" id = "username_or_Email" value={formData.username_or_Email} onChange={handleChange} required ></input><br />
        <label>Password</label>
        <input type='text' name = "password" id = "password" value={formData.password} onChange={handleChange} required ></input>
        <input type='submit' name='submit' id='submit'></input>
      </form>
    </div>
  )
}

export default Login
