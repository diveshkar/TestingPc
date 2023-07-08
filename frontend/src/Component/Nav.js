import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';
import homeIcon from './images/home.png';
import labIcon from './images/flask.png';
import purchaseIcon from './images/shopping-bag.png';
import contactIcon from './images/contact-us.png';
import quotationIcon from './images/quotation.png';
import reportIcon from './images/clipboard.png';
import paymentIcon from './images/payment.png';

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
      
        <Link to="/home" className='nav-item'><img src={homeIcon} className='nav-icon' alt="Home-icon"/></Link>
        <Link to="/order" className='nav-item'><img src={labIcon} className='nav-icon' alt="flask-icon"/></Link>
        <Link to="/payment" className='nav-item'><img src={paymentIcon} className='nav-icon' alt="payment-icon"/></Link>
        <Link to="/purchase" className='nav-item'><img src={purchaseIcon} className='nav-icon' alt="purchase-icon"/></Link>
        <Link to="/contact" className='nav-item'><img src={contactIcon} className='nav-icon' alt="contact-icon"/></Link>
        <Link to="/quotation" className='nav-item'><img src={quotationIcon} className='nav-icon' alt="quotation-icon"/></Link>
        <Link to="/report" className='nav-item'><img src={reportIcon} className='nav-icon' alt="report-icon"/></Link>
      
        <Link to="/register" className='nav-item'><ul className='nav-list'><li>Register</li></ul></Link>
        <Link to="/login" className='nav-item'><ul className='nav-list'><li>Login</li></ul></Link>
    </nav>

    </div>
  )
}

export default Nav
