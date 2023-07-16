import React from 'react'
// import Homepage from './Homepage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        Contact
        <FontAwesomeIcon icon="fa-solid fa-house" />
        <FontAwesomeIcon icon="fa-solid fa-phone" />
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/home';
  }
  
}

export default Contact
