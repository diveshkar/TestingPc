import React from 'react'
import './nav.css';
import { useNavigate } from 'react-router-dom';


const Nav = () => {

  const navigate = useNavigate();
  function logoutSubmit(){
      localStorage.setItem("login", "");
      localStorage.setItem("loginStatus", "Logged out successfully!")
      navigate("/");
  }

  return (
    <div>
      <nav className="navbar">
      
      <div className='Nav_Title'>TestingPC</div>

      <div className='nav-item_btn'><button onClick={logoutSubmit} type="button" class="btn btn-primary">Logout</button></div>
    </nav>

    </div>
  )
}

export default Nav
