import React, {useState } from 'react';
import axios from 'axios';
import './purchase.css';

function Purchase() {
  const [orders, setOrders] = useState([]);

  const Username = localStorage.getItem('Username');
  // const z = localStorage.getItem('industry');
  let url = 'http://localhost/testingpc/backend/History.php'
  axios.post(url, {
    Username: Username
  }).then(function(response) {
    console.log(response);
    if(response.data.success) {
        setOrders(response.data.orders);
      // setIndustry(industry);
    }
  })
  .catch(function(error){
    window.alert(error);
  })
  
if(document.cookie.includes('sessionToken')){
  return (
    <div>
      <h2>Purchase History</h2>
      <table className="table">
        <thead>
          <tr className='font'>
            <th>Order ID</th>
            <th>Username</th>
            <th>Tests</th>
            <th>Parameters</th>
            <th>Sample Name</th>
            <th>Shelf Life</th>
            <th>Storage</th>
            <th>Sample Type</th>
            <th>Hazardous</th>
            <th>Sample Disposition</th>
            <th>Agree</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderID}>
              <td>{order.orderID}</td>
              <td>{order.username}</td>
              <td>{order.tests}</td>
              <td>{order.parameters}</td>
              <td>{order.sampleName}</td>
              <td>{order.shelfLife}</td>
              <td>{order.storage}</td>
              <td>{order.sampleType}</td>
              <td>{order.hazardous}</td>
              <td>{order.sampleDisposition}</td>
              <td>{order.agree ? 'Yes' : 'No'}</td>
              <td>{order.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}else{
  window.location.href = '/';
}
  
}
export default Purchase;
