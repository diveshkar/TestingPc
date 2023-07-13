import React from 'react'
import './register.css';
import regImg from './images/register.jpg';
import { useState } from 'react';
import axios from 'axios';

function Register ()  {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      contactNumber: '',
      industry: '',
      address:'',
      password:'',
      reenterPasswords:'',
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      // e.preventDefault();
      // Perform form submission logic or API call here
      let url = 'http://localhost/testingpc/backend/signup.php';
      console.log(formData);
      // axios.post(url , formData ).then(response=> alert(response.data)).catch(error=> alert(error));
      // axios.post(url, formData)
      // .then(response => {
      //   const data = response.data;
      //   if (data.success) {
      //     // User registered successfully
      //     // Redirect to the login page
      //     window.location.href = 'http://localhost:3000/login';
      //     alert(data.message);
      //   } else {
      //     // Handle the error
      //     console.log(data.message);
      //   }
      // })
      // .catch(error => {
      //   // Handle the error
      //   console.log(error);
      // });
      axios.post(url, formData)
    .then(response => {
        if (response.data && response.data.success) {
            // Registration successful, proceed with redirecting to the login page
            alert(response.data.message);
            window.location.href = '/login';
            
        } else if (!response.data.success && response.data.errors) {
            // Registration failed, display validation errors
            const errors = response.data.errors;
            errors.forEach(error => {
                alert(error);
                // Display error message in the frontend UI
            });
        } else {
            // Handle other cases where the response data is missing or unexpected
            console.log('Unexpected response:', response);
        }
    })
    .catch(error => {
        console.log(error);
        // Handle other errors, such as network errors
    });


    }
    
  return (
    <div>
    
    <section>
      <div className="imgBx">
          <img src={regImg} alt="Form" />
      </div>
      <div className="contentBx">

       <form className="form" onSubmit={handleSubmit}>
        <p className="form-heading">Register</p>
        

        <div className="inputBx">
          <input
            type="text"
            id='username'
            name="username"
            value={formData.username} onChange={handleChange}
            className="input-box"
            placeholder="Username"
            required
          />
          </div>


          <div className="inputBx">
          <input
            type="text"
            id='email'
            name="email"
            value={formData.email} onChange={handleChange}
            className="input-box"
            placeholder="Email"
            required
          />
          </div>


          <div className="inputBx">
          <input
            type="text"
            id='contactNumber'
            name="contactNumber"
            value={formData.contactNumber} onChange={handleChange}
            className="input-box"
            placeholder="Contact No"
            required
          />
          </div>


          <div className="inputBx">
          <input
            type="text"
            id='industry'
            name="industry"
            value={formData.industry} onChange={handleChange}
            className="input-box"
            placeholder="Industry / Institute"
            required
          />
          </div>


          <div className="inputBx">
          <input
            type="text"
            id='address'
            name="address"
            value={formData.address} onChange={handleChange}
            className="input-box"
            placeholder="Address"
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
            type="password"
            id='reenterPassword'
            name="reenterPassword"
            value={formData.reenterPassword} onChange={handleChange}
            className="input-box"
            placeholder="Confirm Password"
            required/>
          </div>

          <div className="inputBx">
          <input
            type="submit"
            name="sumbit-btn"
            value="Register"
            className="submit-button"
          />
          </div>
        </form>
      </div>
     </section>
    </div>
  );
}

export default Register
