import React from 'react';
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import testingpc from './images/testingpc.png';
import homeIcon from './images/home.png';
import labIcon from './images/flask.png';
import purchaseIcon from './images/shopping-bag.png';
import contactIcon from './images/contact-us.png';
import quotationIcon from './images/quotation.png';
import reportIcon from './images/clipboard.png';
import paymentIcon from './images/payment.png';
import ProfIcon from './images/profile.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('sessionToken');
    localStorage.clear();
    // Clear the session token from document.cookie
    document.cookie = 'sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    
    // Redirect to the homepage or any other desired page
    navigate('/login');
  };

  return (
    
    <div>
      
      <nav className="navbar">
        <img src={testingpc} alt="testingpc-logo" className="nav-item-logo" />
        <Link to="/" className="nav-item">
          <img src={homeIcon} className="nav-icon" alt="Home-icon" />                    
        </Link>
        <Link to="/order" className="nav-item">
          <img src={labIcon} className="nav-icon" alt="flask-icon" />
        </Link>
        <Link to="/purchase" className="nav-item">
          <img src={purchaseIcon} className="nav-icon" alt="purchase-icon" />
        </Link>
        <Link to="/contact" className="nav-item">
          <img src={contactIcon} className="nav-icon" alt="contact-icon" />
        </Link>
        <Link to="/quotation" className="nav-item">
          <img src={quotationIcon} className="nav-icon" alt="quotation-icon" />
        </Link>
        <Link to="/report" className="nav-item">
          <img src={reportIcon} className="nav-icon" alt="report-icon" />
        </Link>
        <Link to="/payment" className="nav-item">
          <img src={paymentIcon} className="nav-icon" alt="payment-icon" />
        </Link>
        

        <div className="nav-icon-container">
        <Link to="/register" className='nav-icon-reg'>Register</Link>
        <Link to="/login" className='nav-icon-reg'>Login</Link>
        
        </div>
        <Link to="/profile" className="nav-item">
          <img src={ProfIcon} className="nav-icon" alt="profile-icon" />
        </Link>
        <button onClick={handleLogout} className='nav-icon-logout'>Logout</button>
      </nav>
    </div>
  );
};

export default Nav;
