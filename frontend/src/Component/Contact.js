import React from 'react'
// import Homepage from './Homepage'

function Contact() {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        Contact
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/';
  }
  
}

export default Contact
