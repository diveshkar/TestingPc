import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Nav from './Component/Nav';
import Homepage from './Component/Homepage';
import Order from './Component/Order';
import Purchase from './Component/Purchase';
import Contact from './Component/Contact';
import Available_Request from './Component/Available_Request';
import Quotation from './Component/Quotation';
import Report from './Component/Report';
import Register from './Component/Register';
import Login from './Component/Login';
import Laboratarian_View from './Component/Laboratarian_View';
import Accept_request from './Component/Accept_request';
import Rejected_request from './Component/Rejected_request';
import Labo_01 from './Component/Labo_01';
import Labo_02 from './Component/Labo_02';
import Labo_03 from './Component/Labo_03';
import Payment from './Component/Payment';


 function App() {
  return (
    <div>
      <div className="App">
        <Nav/>
      </div>
        <Routes>
          <Route path ='/' element={<Login/>}/>
          <Route path ='/home' element={<Homepage/>}/>
          <Route path ='/order' element={<Order/>}/>
          <Route path ='/purchase' element={<Purchase/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/quotation' element={<Quotation/>}/>
          <Route path ='/report' element={<Report/>}/>
          <Route path ='/Homepage/Available_Request' element={<Available_Request/>}/>
          <Route path ='/Homepage/Laboratarian_View' element={<Laboratarian_View/>}/>
          <Route path ='/Homepage/Accept_request' element={<Accept_request/>}/>
          <Route path ='/Homepage/Rejected_request' element={<Rejected_request/>}/>
          <Route path ='/Homepage/Available_Request/Rejected_request' element={<Rejected_request/>}/>
          <Route path ='/Homepage/Laboratarian_View/Labo_01' element={<Labo_01/>}/>
          <Route path ='/Homepage/Laboratarian_View/Labo_02' element={<Labo_02/>}/>
          <Route path ='/Homepage/Laboratarian_View/Labo_03' element={<Labo_03/>}/>
          <Route path ='/register' element={<Register/>}/>
          <Route path ='/Homepage/Accept_request/Payment' element={<Payment/>}/>
          
        </Routes>
      
     {/* hhh */}
    </div>
  );
}
 
export default App;