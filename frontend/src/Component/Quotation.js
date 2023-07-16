import React from 'react'
// import Homepage from './Homepage'
import { useLocation } from 'react-router-dom';

function Quotation() {
  const location = useLocation();
  const { quotation } = location.state;

  if(document.cookie.includes('sessionToken')){
    return (
      <div>
       <div>
      <p>Username: {quotation.username}</p>
      <p>Tests: {quotation.tests}</p>
      <p>Parameters :{quotation.parameters}</p>
      <p>sampleName: {quotation.sampleName}</p>
      <p>shelfLife: {quotation.shelfLife} </p>
      <p>storage: {quotation.storage}</p>
      <p>sampleType:{quotation.sampleType}</p>
      <p>hazardous: {quotation.hazardous}</p>
      <p>sampleDisposition: {quotation.sampleDisposition}</p>
      <p>total_price: {quotation.total_price}</p>
      <p>discounted_price: {quotation.discounted_price}</p>
       </div>
      </div>
    )
  }else{
    // <Homepage />
    window.location.href = '/';
  }
  
}

export default Quotation
