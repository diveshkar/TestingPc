import React from 'react'
// import Homepage from './Homepage'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lady from './images/lady.jpg';
import prof from './images/profile.png';
import './contact.css';

function Contact() {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        <h3 className="bio">Contact Details</h3>
      <div className='container-contact'>
        
      
      <div className="content-center-Bx-contact">
        <img src={lady} class="mx-auto d-block rounded-circle" alt="Cinque Terre" width="90" height="90"/>
      <div class="card-body">
      <h4 class="card-title">Mrs.Wathsala</h4>
      <p class="card-text">Division of Chemical(HOD)</p>
      <p class="card-text">Tel : 071-1234567</p>
    </div>

       

      </div> 
      <div className="content-center-Bx-contact">
        <img src={prof} class="mx-auto d-block rounded-circle" alt="Cinque Terre" width="90" height="90"/>
      <div class="card-body">
      <h4 class="card-title">Mr.Kamal</h4>
      <p class="card-text">Lab Assistant(Senior) - Chemical Lab</p>
      <p class="card-text">Tel : 075-1234567</p>
    </div>
      </div>
      </div>
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/';
  }
  
}

export default Contact
