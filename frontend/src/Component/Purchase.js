import React from 'react'
// import Homepage from './Homepage'

function Purchase() {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        Purchase History
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/';
  }
  
}

export default Purchase
