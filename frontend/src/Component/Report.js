import React from 'react'
// import Homepage from './Homepage'

function Report() {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        Report
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/home';
  }
 
}

export default Report
