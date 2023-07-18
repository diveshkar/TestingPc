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
            <th>Date & Time</th>
            <th>Username</th>
            <th>Tests</th>
            <th>Email</th>
            <th>Total Price</th>
            <th>Discount Price</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.x}>
              <td>{order.created_at}</td>
              <td>{order.username}</td>
              <td>{order.tests}</td>
              <td>{order.email}</td>
              <td>{order.total_price} LKR</td>
              <td>{order.discounted_price}  LKR</td>
              <td>{order.status}</td>
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
