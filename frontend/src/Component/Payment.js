import React from 'react'
import './payment.css'

const Payment = () => {
  if(document.cookie.includes('sessionToken')){
    return (
      <div>
        <div className="content-center-Bx">
          <h2 className='text-heading'>Payment Details :</h2>
          <p className="text-content">Account Holder Name : ITUM</p>
          <p className="text-content">Account No : 28XXXXXXXX</p>
          <p className="text-content">Bank Name : BOC</p>
          <p className="text-content">Branch Name : Diyagama</p>
          <form action="" className="upload">
              <input className="file" type="file" id="myFile" name="filename"/>
              <input className="btn-file" type="submit"/>
          </form>
        </div>
      </div>
    )
  }else{
    window.location.href = '/home';
  }
  
}

export default Payment
