import React, { useState } from 'react';
import './login.css';
import logImg from './images/login.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Order from './Order';

function Login() {
  const [formData, setFormData] = useState({
    username_or_Email: '',
    password: ''
  });

  

  // const [sessionToken, setSessionToken] = useState('');

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(formData);
    // console.log(document.cookie);

    const headers = {
      'Content-Type': 'application/json',
      "withCredentials": true,
    };

    let url = 'http://localhost/testingpc/backend/login.php';
    axios
      .post(url, formData, { headers })
      .then(function (response) {
        console.log(response.data.sessionusername);
        if (response.data.success) {
         const  x = response.data.sessionusername;
         const y = response.data.sessionemail;
         let param = "username="+x+"&useremail="+y;
          
          document.cookie = 'sessionToken=' + response.data.sessionToken + '; path = /';
          localStorage.setItem('Username',x);
          localStorage.setItem('Email',y);
          alert(response.data.successMessage);
          window.location = "http://localhost/testingpc/backend/ab.php?"+param;  
        }
        else if (!response.data.success){
          alert(response.data.errorMessage);
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  // if (document.cookie.includes('sessionToken')) {
  //   window.location.href = '/order';
  // } else {
    return (
      <div>
        <section>
          <div className="imgBxLogin">
            <img src={logImg} alt="Form" />
          </div>
          <div className="contentBxLogin">
            <form className="formLogin" onSubmit={handleSubmit}>
              <p className="form-heading">Login</p>

              <div className="inputBx">
                <input
                  type="text"
                  id="username_or_Email"
                  name="email"
                  value={formData.username_or_Email}
                  onChange={handleChange}
                  className="input-box"
                  placeholder="Username / Email"
                  required
                />
              </div>

              <div className="inputBx">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-box"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="inputBx">
                <input
                  type="submit"
                  name="submit-btn"
                  value="Login"
                  className="submit-button"
                />
              </div>
              <div className="backSign">
                Don't have an account?{' '}
                <Link to="/register" className="backSignLink">
                  Sign up
                </Link>
                <br />
                <Link to="/forgotpassword">Forgot Password</Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
// }

export default Login;
