import React, { useState } from 'react';
import axios from 'axios';
import './payment.css';

function Payment() {
  const [formdata, setFormdata] = useState({
    myFile: ""
  });

  const handleChange = (e) => {
    setFormdata({ myFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    // console.log(formdata);
    e.preventDefault();

    const headers = {
      'Content-Type': 'multipart/form-data'
    };

   

    axios.post('http://localhost/testingpc/backend/payment.php', formdata, {headers})
      .then((response) => {
        // console.log(response);
        if (response.data.success) {
          let successMessage = response.data.successMessage;
          alert(successMessage);
        } else {
        alert(response.data.errorMessage);
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle other errors, such as network errors
      });
  };

  // if (document.cookie.includes('sessionToken')) {
    return (
      <div>
        <div className="content-center-Bx">
          <h2 className="text-heading">Upload File</h2>
          <p className="text-content">Account Holder Name: ITUM</p>
          {/* <p className="text-content">Account No: 28XXXXXXXX</p>
          <p className="text-content">Bank Name: BOC</p>
          <p className="text-content">Branch Name: Diyagama</p> */}
          <form onSubmit={handleSubmit} className="upload" encType="multipart/form-data">
            <input className="file" id='myFile' type="file" name="myFile" onChange={handleChange} />
            <input className="btn-file" type="submit" value="Upload" />
          </form>
        </div>
      </div>
    );
  // } else {
  //   window.location.href = '/home';
  // }
}

export default Payment;
