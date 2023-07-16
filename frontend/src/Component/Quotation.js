import React from 'react'
// import Homepage from './Homepage'

function Quotation() {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        Quotation
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/';
  }
  
}

export default Quotation
