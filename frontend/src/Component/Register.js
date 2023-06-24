import React from 'react'
import './register.css';
import regImg from './images/register.jpg';
const Register = () => {
  return (
    <div>
    
    <section>
      <div className="imgBx">
          <img src={regImg} alt="Form" />
      </div>
      <div className="contentBx">

       <form className="form">
        <p className="form-heading">Register</p>
        

        <div className="inputBx">
          <input
            type="text"
            id='username'
            name="username"
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
            className="input-box"
            placeholder="Email"
            required
          />
          </div>


          <div className="inputBx">
          <input
            type="text"
            id='contactNumber'
            name="contact"
            className="input-box"
            placeholder="Contact No"
            required
          />
          </div>


          <div className="inputBx">
          <input
            type="text"
            id='industry'
            name="institute"
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
            className="input-box"
            placeholder="Password"
            required
          />
          </div>

          <div className="inputBx">
          <input
            type="password"
            id='reenterPassword'
            name="confirm-password"
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
